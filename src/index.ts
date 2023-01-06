type MaybePromise<T> = T | Promise<T>

interface BuilderOptions<B, F extends any[]> {
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
	__init?(): MaybePromise<void>
	/**
	 * Runs after each step in the chain functions.
	 * Good for things like validating every step.
	*/
	__step?(): MaybePromise<void>
	/**
	 * Runs after all chains has been completed, 
	 * and its returned value will be the resolved value for the promise.
	*/
	__build(): MaybePromise<B>
	/**
	 * 
	*/
	__function?(...args: F): MaybePromise<void>
}

interface BuilderResolve {
	resolve(value: unknown): void
    reject(reason?: any): void
}

interface BuilderArg<T extends any[], K extends Record<any, any>, B, F extends any[]> {
    (r: BuilderResolve):
        | ((...args: T) => K & BuilderOptions<B, F>)
        | (() => K & BuilderOptions<B, F>)
}

type Fn = (...args: any) => any

type BuilderRecursive<K extends Record<string, Fn>, B, F extends any[]> = {
	[Key in keyof K]: (...args: Parameters<K[Key]>) => (F extends never ? Promise<B> : (...args: F) => Promise<B>) & BuilderRecursive<K, B, F>
}

type BuilderReturn<K extends Record<string, Fn>, B, T extends any[], F extends any[]> = (...args: T) =>
	(F extends never ? Promise<B> : (...args: F) => Promise<B>) & BuilderRecursive<Omit<K, keyof BuilderOptions<B, F>>, B, F>

export default function builder<T extends any[], K extends Record<string, Fn>, B, F extends any[]>(fn: BuilderArg<T, K, B, F>): BuilderReturn<K, B, T, F> {
    
	function buildPromise(...args: any) {
		let resolve: undefined | ((value: unknown) => void),
			reject: undefined | ((reason?: any) => void)
		let done = false
		const promise = new Promise((_resolve, _reject) => {
			resolve = (v) => { done = true; _resolve(v) }
			reject = (v) => { done = true; _reject(v) }
		})
		if(!resolve || !reject) return

		const content = fn({ resolve, reject })(...args)
		const functions: (() => Promise<void>)[] = []

		const proxyObject = !content.__function ? {} : (...args: any) => {
			content.__function?.(...args)
			return proxy
		}

		setTimeout(async () => {
			try {
				await content.__init?.()
				for (const fn of functions) {
					await fn()
					await content.__step?.()
					if (done) {
						content.__finally?.()
						return
					}
				}
				if(!resolve) throw new Error()
				resolve(await content.__build())
			} catch (error) {
				if (!reject) throw new Error()
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