type MaybePromise<T> = T | Promise<T>

interface BuilderOptions<__B, __I, __S> {
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
}

interface BuilderResolve {
	resolve(value: unknown): void
    reject(reason?: any): void
}

interface BuilderArg<T extends any[], K extends Record<any, any>, __B, __I, __S, F extends any[]> {
	(r: BuilderResolve):
		| ((...args: T) => K & BuilderOptions<__B, __I, __S>)
		| ((...args: T) => (...args: F) => K & BuilderOptions<__B, __I, __S>)
}

type Fn = (...args: any) => any

type NonVoidable<T> = T extends void ? never : T
type VoidAsUndefined<T> = T extends void ? undefined : T 
type BuilderPromise<__B, __I, __S, More = never> =
	Promise<VoidAsUndefined<__B> | NonVoidable<__I> | NonVoidable<__S>| NonVoidable<More>>

type BuilderRecursive<K extends Record<string, Fn>, __B, __I, __S, F extends any[], More = never> = {
	[Key in keyof K]: (...args: Parameters<K[Key]>) =>
		(
			F extends [never]
				? BuilderPromise<__B, __I, __S, More | ReturnType<K[Key]>>
				: (...args: F) => BuilderPromise<__B, __I, __S, More | ReturnType<K[Key]>>
		)
		& BuilderRecursive<K, __B, __I, __S, F, More | ReturnType<K[Key]>>
}

type BuilderReturn<K extends Record<string, Fn>, B, T extends any[], __I, __S, __F, F extends any[]> = (...args: T) =>
	(
		F extends [never]
			? BuilderPromise<B, __I, __S, __F>
			: (...args: F) => BuilderPromise<B, __I, __S, __F>
	)
	& BuilderRecursive<Omit<K, keyof BuilderOptions<B, __I, __S>>, B, __I, __S, F>

const MISSING_PROMISE = 'Missing Resolve or Reject functions for the promise'

export default function builder
	<T extends any[], K extends Record<string, Fn>, B, __I, __S, __F, F extends any[] = [never]>
	(fn: BuilderArg<T, K, B, __I, __S, F>): BuilderReturn<K, B, T, __I, __S, __F, F> {

	function buildPromise(...args: any) {
		let resolve: undefined | ((value: unknown) => void),
			reject: undefined | ((reason?: any) => void)
		let done = false
		const promise = new Promise((_resolve, _reject) => {
			resolve = (v) => { done = true; _resolve(v) }
			reject = (v) => { done = true; _reject(v) }
		})
		if (!resolve || !reject) throw new Error(MISSING_PROMISE)

		let content = fn({ resolve, reject })(...args)
		
		const functions: ((content: Record<any,any>) => Promise<any>)[] = []

		const returnsValue = (value: any) => {
			if (!resolve) throw new Error(MISSING_PROMISE)
			if (value)
				resolve(value)
			return typeof value !== 'undefined'
		}

		const proxyObject = typeof content !== 'function' ? {} : (...args: any) => {
			if(typeof content === 'function')
				content = content(...args)
			return proxy
		}

		setTimeout(async () => {
			if (typeof content === 'function')
				throw new Error('Something went wrong when building promise...')
			try {
				if (returnsValue(await content.__init?.()))
					return
				for (const fn of functions) {
					if (returnsValue(await fn(content)))
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
					functions.push(async (content) => await content[prop](...args))
					return proxy
				}
			}
		}) as any
		return proxy
	}
    
	return buildPromise as any
}