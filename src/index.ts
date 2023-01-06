type MaybePromise<T> = T | Promise<T>

interface BuilderOptions<B> {
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
}

interface BuilderResolve {
	resolve(value: unknown): void
    reject(reason?: any): void
}

interface BuilderArg<T extends any[], K extends Record<any, any>, B> {
    (r: BuilderResolve):
        | ((...args: T) => K & BuilderOptions<B>)
        | (() => K & BuilderOptions<B>)
}

type Fn = (...args: any) => any

type BuilderRecursive<K extends Record<string, Fn>, B> = {
    [Key in keyof K]: (...args: Parameters<K[Key]>) => BuilderRecursive<K, B> & Promise<B>
}

type BuilderReturn<K extends Record<string, Fn>, B, T extends any[]> = (...args: T) =>
    BuilderRecursive<Omit<K, keyof BuilderOptions<B>>, B> & Promise<B>

export default function builder<T extends any[], K extends Record<string, Fn>, B>(fn: BuilderArg<T, K, B>): BuilderReturn<K, B, T> {
    
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

		const proxy = new Proxy({} as Record<any, any>, {
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