type MaybePromise<T> = T | Promise<T>

interface BuilderOptions<__B, F extends any[], __I, __S, __F> {
	/**
	 * Catches any errors. What this function returns,
	 * will be the value for the promises reject() function.
	*/
	__catch?(error: unknown): MaybePromise<any>
	/**
	 * Runs after build, and will run whether the try-catch fails or not.
	*/
	__finally?(): MaybePromise<void>
	/**
	 * Runs first.
	 * Unlike the builder function callback - this function
	 * can be asynchronous. 
	*/
	__init?(): MaybePromise<__I>
	/**
	 * Runs after each step in the chain functions.
	 * Good for things like validating every step.
	*/
	__step?(): MaybePromise<__S>
	/**
	 * Runs after all chains has been completed, 
	 * and its returned value will be the resolved value for the promise.
	*/
	__build?(): MaybePromise<__B>
	/**
	 * 
	*/
	__function?(...args: F): MaybePromise<__F>
}

interface BuilderResolve {
	resolve(value: unknown): void
    reject(reason?: any): void
}

interface BuilderArg<T extends any[], K extends Record<any, any>, __B, F extends any[], __I, __S, __F> {
    (r: BuilderResolve):
        | ((...args: T) => K & BuilderOptions<__B, F, __I, __S, __F>)
        | (() => K & BuilderOptions<__B, F, __I, __S, __F>)
}

type Fn = (...args: any) => any

type NonVoidable<T> = T extends void ? never : T
type VoidAsUndefined<T> = T extends void ? undefined : T 
type BuilderPromise<__B, __I, __S, __F, More = never> =
	Promise<VoidAsUndefined<__B> | NonVoidable<__I> | NonVoidable<__S> | NonVoidable<__F> | NonVoidable<More>>

type BuilderRecursive<K extends Record<string, Fn>, __B, F extends any[], __I, __S, __F, More = never> = {
	
	[Key in keyof K]: (...args: Parameters<K[Key]>) => (F extends never ? BuilderPromise<__B, __I, __S, __F, More | ReturnType<K[Key]>> : (...args: F) => BuilderPromise<__B, __I, __S, __F, More | ReturnType<K[Key]>>) & BuilderRecursive<K, __B, F, __I, __S, __F, More | ReturnType<K[Key]>>

}

type BuilderReturn<K extends Record<string, Fn>, B, T extends any[], F extends any[], __I, __S, __F> = (...args: T) =>
	(F extends never ? BuilderPromise<B, __I, __S, __F> : (...args: F) => BuilderPromise<B, __I, __S, __F>)
	& BuilderRecursive<Omit<K, keyof BuilderOptions<B, F, __I, __S, __F>>, B, F, __I, __S, __F>

const MISSING_PROMISE = 'Error occured: Missing Resolve or Reject functions for the promise'

export default function builder
	<T extends any[], K extends Record<string, Fn>, B, F extends any[], __I, __S, __F>
	(fn: BuilderArg<T, K, B, F, __I, __S, __F>): BuilderReturn<K, B, T, F, __I, __S, __F> {

	function buildPromise(...args: any) {
		let resolve: undefined | ((value: unknown) => void),
			reject: undefined | ((reason?: any) => void)
		let done = false
		const promise = new Promise((_resolve, _reject) => {
			resolve = (v) => { done = true; _resolve(v) }
			reject = (v) => { done = true; _reject(v) }
		})
		if (!resolve || !reject) throw new Error(MISSING_PROMISE)

		const content = fn({ resolve, reject })(...args)
		const functions: (() => Promise<void>)[] = []

		const returnsValue = (value: any) => {
			if (!resolve) throw new Error(MISSING_PROMISE)
			if (value)
				resolve(value)
			return typeof value !== 'undefined'
		}

		let __fnReturn: any
		const proxyObject = !content.__function ? {} : (...args: any) => {
			__fnReturn = content.__function?.(...args)
			return proxy
		}

		setTimeout(async () => {
			try {
				if (returnsValue(__fnReturn))
					return
				if (returnsValue(await content.__init?.()))
					return
				for (const fn of functions) {
					if (returnsValue(await fn()))
						return
					if (returnsValue(await content.__step?.()))
						return
					if (done) {
						content.__finally?.()
						return
					}
				}
				if (!resolve) throw new Error(MISSING_PROMISE)
				resolve(await content.__build?.() || undefined)
			} catch (error) {
				if (!reject) throw new Error(MISSING_PROMISE)
				if (content.__catch)
					reject(await content.__catch?.(error))
				else
					reject(error)
			} 
			finally {
				await content.__finally?.()
			}
		}, 0)

		const proxy = new Proxy(proxyObject, {
			get(target, prop: string) {
				if (prop === 'then')
					return promise.then.bind(promise)
				if (prop === 'catch')
					return promise.catch.bind(promise)
				if (prop === 'finally')
					return promise.finally.bind(promise)
				
				return (...args: any) => {
					functions.push(async () => await content[prop](...args))
					return proxy
				}
			}
		}) as any
		return proxy
	}
    
	return buildPromise as any
}