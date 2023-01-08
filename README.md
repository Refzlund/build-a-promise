# build-a-promise

Creates a promise that uses the builder-pattern. The chained functions will run asynchronously.

`npm i build-a-promise`  |  `pnpm add build-a-promise`

[Try it out in TypeScript Playground](https://www.typescriptlang.org/play?target=99&jsx=0&ssl=206&ssc=5&pln=151&pc=1#code/C4TwDgpgBAsghiARhACgJwPYFsCWBnCAHgBUA+KAXimKgB8p1t8iyAoVnAO2AjQDM4AY2gAhAK44ANgBNeAeTDAcGTnkIB9dSIA0UTQEldmgMrkA3qwCQAegBUtq1FtQAwnGCCAFhDxQ4nECheTDQ8ADooAHVPdyhgT3woPjFOQSUVKDQIYDE0VW1HZwB3KUkoZDjvKAA3OEkxaD4MNEroMExcAl8sgCsINIAKAEoklLTlTjCrW2srTUF3LwB+AeDmgC4oFIBrTgwiziHN+CRUDuZCfxBSKzsHSycoACUU3zg+HhbECRldf2koCVJGU0ClAd54rxWnE0CAALQLDyeJJwKS+ZpQPbAKaWGZzdR8Lh1SQgFZHWAIZCMTpEaoYHDSG42eyFZ6vJI4ULY1kAVU4khw22gkPKP1kLWSqXSnCgC2BiCE2ygcMqiUl4xUrIWMoqcDwIFSnkwezE4Sg01mlk0XBwwDJx0pZyYBA06n0TLurJeqj8HyhECEyLwPDAUC40K8qJl6ul4VZAHEMBgAU0WvEuABzXwCoU1OoM9yZoLVXiBYMQMA4vFW9TlsD2imnakXEwelkPZzet5+lrE2UxLi+GK+ZAQGWCbBgSTZCDSXSs-5h4DdbK5TizvP1aBAsoVEVZPAYSQlgG1LdJDEi9rOiBVy2ab5SaQNk5U84uzQiG4AX3YXE+AjCFA4hPrwTw+EeJZQBYlgHpBEADGeDSbDsewHOSdIMqwUA4ZkEB9IMWR6ioSybFcGH0tIrC-hw3C8IBohirwACCaAZiQQQAB48Jw0hvAEADaAC6ugANJcTxfHPP0zTSJcAR-AEpBGFoKmGHo6jGLoABiEljlJVzCeYVgDGgmwgTIYEQceEBHFYlj0AMAxhC5cBsXgmzECMFDkOJABkwFMWgCixq6OgaeprZDPZjnOa57med55BxWEblZps2lJVA-mBaBwWKBMaifmpKmmNFNGgJAUDaTKVApWlHl+AEWVXOwlXQAAcioABqlFwIg04kOQVA0BA3H6b4mEAksmIQCWLSeaw7VQL1DLMXgfKyIS65yWQlDUHpvGTZRUAzSkW1cBunnmstFnis2H6qRFpW6DAzTQFQ67zcNVgPUQq3SOtm0QNts5heQ9BdZwAP9YNBgQ1AUMwwNRCtpDPV9SjhBvVkpA3Et4CMXl4GCLkeA4CWhDiWNkm+CTsmEMGaCZjpnDKRp4UGC91WHQZgkibA737V9vDDdBVgCaJECBOGQogBgfDZUJmz1QlDBuXAWAzqEVOS9LQmkEl9kDPZli6TTE1QAJItoEJpuWDNd28H9YUlRpWmC1kdDSTkeTEITutSyABtMpYYcqy5qVq5llDkE7aAu8Vz3u69Qv0OBvucP7kCB-reP2dFYcBfHJNkxTRCiSpnNutz2mp176ern7AeiXrwf5xVhO5ZZaAZ2uVO83TMloHJTMs9VbO6OFo3jUdTUgMJbsmCpdc8xbc+GQb+2q+l1BG5YJth+bs9Sdbc28HbYcO9393vkQ1eRZpK+h5YEfxbvMc+Tfzt34QD-c5obSTJC7FyCqXUI5dCByFwMAKmug5YK2-vlUK-93Z4ynkvJ+1V8YTlUMAWA+hjDGH0B1eM6gUBPDkDAQhABRfaAByGA+ByacAzNJQ8NkoAYnAgRfBMZCoXjTFUa8NJ6HsH4RkR8PcrAcXXnzBeAtqYnyHhOEejNgDM1YazdmqDl4aVXsfWm89hL7TPvNA2Jk+CcHMkFVi7FiBiQwcnPRQDyQlybpwOBwFdAOOcVgwBOljJWAkTqMUf0d6NXIuLMO058FwRsihXiINLoAlikhCAiTdj7EOLHGolEhgFCvr0fowBEkXR2t7JyRFDycFIvPLKU1C6WFiVAaQKgPookkAQeyuDgxQBEcwYWEAigMDvk5dQ8SSxGGKWkLKMEw6TI6YhOZrT2n7Q0Q0AA3HoRZyyoC-iKfhEp29qgrLaeudZoIIDbImUcwYpz9n2W-E0nAisBgAEJFl0HoJ8u5wARjxEwCM9cIyaFoBCAMahRCSFkIoVQ2h0V7ItNwTxfBVArEDDMHhDhUy8K8P2UMCJTSekqD6SExqTkUVjlKdJVRckrjaCuIbXJLsmVDBMVQYS7Aw69LiR4vA3U6gNBOUKjJ9TcnzMsK8qAHzFkAqNPsWaoLwXNEhYQ4hpDyGUKhTQppUq3npL1bBayJZEKir1VkTOcRCaIPSVAd5FAqD0POsknaYiw40R5aS-B15OIgDkIgfFVB2qIKpdwe1jqoD0JCfQ060FvxQDflHXeUSv6SteQMENisw1osjdGsY0p6FGpzftHNRLTaWrXP0zAfqnncssAQYAxAcBawwGIYAAw9QGkEDKuZptpWZptdmlQqLKB5pjUawFiqQVQDBRC+hxhsDZASKwwE1LATGjYUUbwoSnxFgGQQSORbTYaMCJK-VMrK15AFaKztRRUT4JzWEa0nBbRLDCMMIYRrjWZ3tqmGVvKkgykQeSkY56L2mX5YKrcd6H1AYGDmr936f1rnthBq9qhoMNFg7aWUI7qXPtrCGd9n7kMYbQwO85tlolXy9XRbghHtrElJB+sjHi0MHKvpxsOA7fk4uo1O4FwzZ0qrQGq6Fmq4U6qNbsuA97cNPofGKEjIxaD0BdaDaQeqE2Ii8DKtYaAwP214zM-5lQgVKpExCqFGrYXaoRcZt5in1C6c8N+0zOHH34YY-MRYngSMGa-fbCAXSIBoY84F02CbTZMeBGe+2cm4POdiySFTUWnm6AAAyIro3031gRPrCcYH6gY+WA28N0JKjM2RM1pWyLoa8YBNhj1YUZ2jA7GtjqdZCTgx7aMobyNWm8YQethEQFwaQpW75Go65gUMjqnWub67RjDQ2aRhFc2NibU2bwzbeZ1hbUaUsgGW4cq1B7bzHa27xHbNIjX21WxEsizUJVofJWEMAppPCdv1KkAD3mzNf0SwpgHAlGtCSJe5jxQ3a20e45x55fh+IgHsqt-LVhfy4XNAN3dMg-pI-ntRdggGeB9KoFI8UplcmrHBftAQoWsoDCZs1jRmY+3NOyGGfamWrC9KPLeSQGAMwDHoTaJQdR1j0Mq8EZ5vPSX87CIL4X+apQTCJZLyrTNZdWFW-Ml9tphg0csHz6ciuhci-18AZb35Ck1jrIbyVJuBfm-oXWU7q36F9zyJsTQbuCe8oy-ZJTT4Hemyd2b5XweZDu+h-QgAEiFwXGkKexr1HhvBgew6+aRKHq+4elcW5c35mPVr6FzuaIAFLJADwf+6ywNug8EiJHF3PuWFcF-oZoY71vbc4CZxolnmiMxtdb6bgvOBdBMz1TgAA1NP-tbzgiToVUJ5VEKmn14WT4MQkhlwt5x1Gg82-d9DFT74APHqMfUURV2v7IT4Ntfzy7uEz-ZR6mgAARj6yTwmNDOKaynBAO-vtMDvgqTh2oSvQsQD4MAJ-oXI-sLliu1L-v-tOEAbLpYHLqoG3k-i-gsAQFAAAExf7erWqQDIFYAAEEHAHyagHQHDBhCH4754DDAi5QHBiwGYEcLO4IGkEQDkGUEErcrwEi7P4qh4HQAADMxBeC2KR+1BcGYB9Bve9CAAIrwGAEWmEMoQnmgBoRAXqNINIVwRHpirITvoIZwdgcrqIa-vgQACxGF8p4BH5UFUAgFxB0EbK2RaEi5qG6GaHaHqFFoi4GFGFWGmGMHABUGy40SsAYpDBAA)

[![Example](https://raw.githubusercontent.com/Refzlund/build-a-promise/master/example-output.jpg)](https://www.typescriptlang.org/play?target=99&jsx=0&ssl=206&ssc=5&pln=151&pc=1#code/C4TwDgpgBAsghiARhACgJwPYFsCWBnCAHgBUA+KAXimKgB8p1t8iyAoVnAO2AjQDM4AY2gAhAK44ANgBNeAeTDAcGTnkIB9dSIA0UTQEldmgMrkA3qwCQAegBUtq1FtQAwnGCCAFhDxQ4nECheTDQ8ADooAHVPdyhgT3woPjFOQSUVKDQIYDE0VW1HZwB3KUkoZDjvKAA3OEkxaD4MNEroMExcAl8sgCsINIAKAEoklLTlTjCrW2srTUF3LwB+AeDmgC4oFIBrTgwiziHN+CRUDuZCfxBSKzsHSycoACUU3zg+HhbECRldf2koCVJGU0ClAd54rxWnE0CAALQLDyeJJwKS+ZpQPbAKaWGZzdR8Lh1SQgFZHWAIZCMTpEaoYHDSG42eyFZ6vJI4ULY1kAVU4khw22gkPKP1kLWSqXSnCgC2BiCE2ygcMqiUl4xUrIWMoqcDwIFSnkwezE4Sg01mlk0XBwwDJx0pZyYBA06n0TLurJeqj8HyhECEyLwPDAUC40K8qJl6ul4VZAHEMBgAU0WvEuABzXwCoU1OoM9yZoLVXiBYMQMA4vFW9TlsD2imnakXEwelkPZzet5+lrE2UxLi+GK+ZAQGWCbBgSTZCDSXSs-5h4DdbK5TizvP1aBAsoVEVZPAYSQlgG1LdJDEi9rOiBVy2ab5SaQNk5U84uzQiG4AX3YXE+AjCFA4hPrwTw+EeJZQBYlgHpBEADGeDSbDsewHOSdIMqwUA4ZkEB9IMWR6ioSybFcGH0tIrC-hw3C8IBohirwACCaAZiQQQAB48Jw0hvAEADaAC6ugANJcTxfHPP0zTSJcAR-AEpBGFoKmGHo6jGLoABiEljlJVzCeYVgDGgmwgTIYEQceEBHFYlj0AMAxhC5cBsXgmzECMFDkOJABkwFMWgCixq6OgaeprZDPZjnOa57med55BxWEblZps2lJVA-mBaBwWKBMaifmpKmmNFNGgJAUDaTKVApWlHl+AEWVXOwlXQAAcioABqlFwIg04kOQVA0BA3H6b4mEAksmIQCWLSeaw7VQL1DLMXgfKyIS65yWQlDUHpvGTZRUAzSkW1cBunnmstFnis2H6qRFpW6DAzTQFQ67zcNVgPUQq3SOtm0QNts5heQ9BdZwAP9YNBgQ1AUMwwNRCtpDPV9SjhBvVkpA3Et4CMXl4GCLkeA4CWhDiWNkm+CTsmEMGaCZjpnDKRp4UGC91WHQZgkibA737V9vDDdBVgCaJECBOGQogBgfDZUJmz1QlDBuXAWAzqEVOS9LQmkEl9kDPZli6TTE1QAJItoEJpuWDNd28H9YUlRpWmC1kdDSTkeTEITutSyABtMpYYcqy5qVq5llDkE7aAu8Vz3u69Qv0OBvucP7kCB-reP2dFYcBfHJNkxTRCiSpnNutz2mp176ern7AeiXrwf5xVhO5ZZaAZ2uVO83TMloHJTMs9VbO6OFo3jUdTUgMJbsmCpdc8xbc+GQb+2q+l1BG5YJth+bs9Sdbc28HbYcO9393vkQ1eRZpK+h5YEfxbvMc+Tfzt34QD-c5obSTJC7FyCqXUI5dCByFwMAKmug5YK2-vlUK-93Z4ynkvJ+1V8YTlUMAWA+hjDGH0B1eM6gUBPDkDAQhABRfaAByGA+ByacAzNJQ8NkoAYnAgRfBMZCoXjTFUa8NJ6HsH4RkR8PcrAcXXnzBeAtqYnyHhOEejNgDM1YazdmqDl4aVXsfWm89hL7TPvNA2Jk+CcHMkFVi7FiBiQwcnPRQDyQlybpwOBwFdAOOcVgwBOljJWAkTqMUf0d6NXIuLMO058FwRsihXiINLoAlikhCAiTdj7EOLHGolEhgFCvr0fowBEkXR2t7JyRFDycFIvPLKU1C6WFiVAaQKgPookkAQeyuDgxQBEcwYWEAigMDvk5dQ8SSxGGKWkLKMEw6TI6YhOZrT2n7Q0Q0AA3HoRZyyoC-iKfhEp29qgrLaeudZoIIDbImUcwYpz9n2W-E0nAisBgAEJFl0HoJ8u5wARjxEwCM9cIyaFoBCAMahRCSFkIoVQ2h0V7ItNwTxfBVArEDDMHhDhUy8K8P2UMCJTSekqD6SExqTkUVjlKdJVRckrjaCuIbXJLsmVDBMVQYS7Aw69LiR4vA3U6gNBOUKjJ9TcnzMsK8qAHzFkAqNPsWaoLwXNEhYQ4hpDyGUKhTQppUq3npL1bBayJZEKir1VkTOcRCaIPSVAd5FAqD0POsknaYiw40R5aS-B15OIgDkIgfFVB2qIKpdwe1jqoD0JCfQ060FvxQDflHXeUSv6SteQMENisw1osjdGsY0p6FGpzftHNRLTaWrXP0zAfqnncssAQYAxAcBawwGIYAAw9QGkEDKuZptpWZptdmlQqLKB5pjUawFiqQVQDBRC+hxhsDZASKwwE1LATGjYUUbwoSnxFgGQQSORbTYaMCJK-VMrK15AFaKztRRUT4JzWEa0nBbRLDCMMIYRrjWZ3tqmGVvKkgykQeSkY56L2mX5YKrcd6H1AYGDmr936f1rnthBq9qhoMNFg7aWUI7qXPtrCGd9n7kMYbQwO85tlolXy9XRbghHtrElJB+sjHi0MHKvpxsOA7fk4uo1O4FwzZ0qrQGq6Fmq4U6qNbsuA97cNPofGKEjIxaD0BdaDaQeqE2Ii8DKtYaAwP214zM-5lQgVKpExCqFGrYXaoRcZt5in1C6c8N+0zOHH34YY-MRYngSMGa-fbCAXSIBoY84F02CbTZMeBGe+2cm4POdiySFTUWnm6AAAyIro3031gRPrCcYH6gY+WA28N0JKjM2RM1pWyLoa8YBNhj1YUZ2jA7GtjqdZCTgx7aMobyNWm8YQethEQFwaQpW75Go65gUMjqnWub67RjDQ2aRhFc2NibU2bwzbeZ1hbUaUsgGW4cq1B7bzHa27xHbNIjX21WxEsizUJVofJWEMAppPCdv1KkAD3mzNf0SwpgHAlGtCSJe5jxQ3a20e45x55fh+IgHsqt-LVhfy4XNAN3dMg-pI-ntRdggGeB9KoFI8UplcmrHBftAQoWsoDCZs1jRmY+3NOyGGfamWrC9KPLeSQGAMwDHoTaJQdR1j0Mq8EZ5vPSX87CIL4X+apQTCJZLyrTNZdWFW-Ml9tphg0csHz6ciuhci-18AZb35Ck1jrIbyVJuBfm-oXWU7q36F9zyJsTQbuCe8oy-ZJTT4Hemyd2b5XweZDu+h-QgAEiFwXGkKexr1HhvBgew6+aRKHq+4elcW5c35mPVr6FzuaIAFLJADwf+6ywNug8EiJHF3PuWFcF-oZoY71vbc4CZxolnmiMxtdb6bgvOBdBMz1TgAA1NP-tbzgiToVUJ5VEKmn14WT4MQkhlwt5x1Gg82-d9DFT74APHqMfUURV2v7IT4Ntfzy7uEz-ZR6mgAARj6yTwmNDOKaynBAO-vtMDvgqTh2oSvQsQD4MAJ-oXI-sLliu1L-v-tOEAbLpYHLqoG3k-i-gsAQFAAAExf7erWqQDIFYAAEEHAHyagHQHDBhCH4754DDAi5QHBiwGYEcLO4IGkEQDkGUEErcrwEi7P4qh4HQAADMxBeC2KR+1BcGYB9Bve9CAAIrwGAEWmEMoQnmgBoRAXqNINIVwRHpirITvoIZwdgcrqIa-vgQACxGF8p4BH5UFUAgFxB0EbK2RaEi5qG6GaHaHqFFoi4GFGFWGmGMHABUGy40SsAYpDBAA)

## Minimal example

```ts
import builder from 'build-a-promise'

const test = builder(r => (s: number, k: boolean) => {
    console.log('Initial: ', {s,k})
    // * Initial code (cannot be run asynchronously)

    let i = 0
    return {
        __build() {
            console.log('build')
            return 'test-result' as const
        },
        async __init() {
            // * Initial code (can be async)
            console.log('__init')
        },
        __step() {
            console.log('step')
        },
        i: (str: string) => {
            console.log(i, str)
            i++
        }
    }
})

async function testFunction() {
    const returnedValue: 'test-result' = await test(2, true).i('test').i('asd').i('herpderp')
    console.log({returnedValue})
}

testFunction()

/*
    Console
    -----------
    Initial:  {s: 2, k: true}
    __init
    0 'test'
    step
    1 'asd'
    step
    2 'herpderp'
    step
    build
    {returnedValue: 'test-result'}
*/
```

## Usage

The builder has two callbacks e.g.
```ts
const pizza = builder(r => () => {
    // * Initial code
})
```

`r`: If you want to resolve or reject the promise early, they're provided there.
```ts
const pizza = builder(({resolve, reject}) => () => {
    // * Initial code
})
```

Next callback is the initial parameters provided the to function.

```ts
const pizza = builder(r => (pizzaType: string) => {
    // * Initial code
})
...
await pizza('mexican')
```

Last thing you need to know, is that you return an object.

The object requires `__build`, which will "build" the promise. The returned value of `build`, 
will define what type the promise returns.

```ts
const pizza = builder(r => (pizzaType: string) => {
    // * Initial code
    const extras = {
        cheese = 0
    }
    return {
        __build() {
            return extras
        },
        extraCheese() {
            extras.cheese++
        }
    }
})
...
const finishedPizza = await pizza('mexican').extraCheese().extraCheese()
//    ^? finishedPizza = { cheese: number }
```

## The returned values from functions

ANY function (both chained functions and builder options e.g. `__`) may provide a returned value.

If a function returns a value - it will be equivilant to `resolve(value)`.

The difference being, returning a value will also provide a type.

Exceptions:
- The returned value of `__catch` will be equivilant to `reject(value)`
- `__finally` cannot return anything

> Note: If `__build` returns void, the returned type is `Promise<undefined | Others>` - 
> where `Others` are the returned types from other functions. 

## As a Function
You can also return a function, if you provide a third callback:

```ts
const pizza = builder(r => (pizzaType: string) => (...args) => {
   ... 
})

pizza('mexican')(...args)
pizza('mexican').extraCheese().extraCheese()(...args)
```

## Builder functions

Order of execution: <br>
`__init` → (* → `__step`)* → `__build` → `__finally`

| Name | Description
| ---- | -----------
| `__init?.()` | The initial function to be called. <br>Used to initialize values that require asynchronous operatinos.<br><br>Like the other declared functions here, it will be called without chaining it.
| `__catch?.(error)` | The whole chain is inside a try-catch block. <br> If an error occurs, and __catch is defined, rather than throwing the error, __catch will be called.<br><br>Note: If __catch is not defined, reject(error), will be called before throwing an error.
| `__step?.()` | Runs after each step in the chain functions. <br> Good for things like validating every step.
| `__build?.()` | Is called as a last function to be called (before finally). This returns the awaited result of the builder-pattern. <br><br> It is optional - as sometimes we just want to run a chain of commands without a final "build".
| `__finally?.()` | The last function - and will always run. Consider it as a way to clean-up after the full execution.
