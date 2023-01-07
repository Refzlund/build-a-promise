# build-a-promise

Creates a promise that uses the builder-pattern. The chained functions will run asynchronously.

`npm i build-a-promise`  |  `pnpm add build-a-promise`

[Try it out in TypeScript Playground](https://www.typescriptlang.org/play?target=99&jsx=0&ssl=201&ssc=5&pln=146&pc=1#code/C4TwDgpgBAsghiARhACgJwPYFsCWBnCAHgBUA+KAXimKgB8p1t8iyAoVnAO2AjQDM4AY2gAhAK44ANgBNeAeTDAcGTnkIB9dSIA0UAGJQIADx6dpeKHE4gA2gF1dmgJKP1AZVd7yAb1YBIAHoAKiD-KCCoAGE4YEEACwgLKxBDNEw0PAA6KAB1OJioYDj8KD4xTkElFSg0CGAxNFVtMIiAdylJKGRChKgANzhJMWg+DDQe6DBMXAILWoArCEqACgBKUvLK5U5M-yCA-01BGPiAfmXedIAuKHKAa04MVs5Vm-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-seuGONG67Gm4RvUzCPx-ylLhv1A45NwL1QauNfi6AuqG3Z3hEAAlfMi4Cjjl39ogcpnd1W1zdnveZd9+b-3WvFsds9aIvjgAUskAPB-Yb9cK-i5wCLKe-Bm+F5brXV2QB64N0urnziecuMrPz1PKia9i5wDL5xdqcAAGoh9asA5cJ12LuNGb42sBPzqxCSFPJXkPT5F-L9WDHiwbvw3+BIjC9gk6-tZKZfz6vFvNf4iv3qe00AACMJ2icvQEUYIOO4IB34BoD4n47uXCOIIkMAA-sgufv7iyhtC-m-ruJ-gfn4P4KAbXlfqaMcAQFAAAEyP5ZYQGv5YDv5oFf7gbMI-5rCZBr5L54BrDi4AEpjAHwGC7p6W7gHP44F4FcoyoIGX7X4oHQAADMmBiaZBDKlghBhQgBJBOA4uAAIrwGAP1pkBIWHjIf1uLvaNIPwd3hfsyqyuvmwXQWnj3uLkgTfqgQACzqGlKJDr74FUDf5iGPJxTyFSFKGrCOGKFoCyF-6qHqF+6MHaFL74EH7jSsCn5AA)

[![Example](https://raw.githubusercontent.com/Refzlund/build-a-promise/master/example-output.jpg)](https://www.typescriptlang.org/play?target=99&jsx=0&ssl=201&ssc=5&pln=146&pc=1#code/C4TwDgpgBAsghiARhACgJwPYFsCWBnCAHgBUA+KAXimKgB8p1t8iyAoVnAO2AjQDM4AY2gAhAK44ANgBNeAeTDAcGTnkIB9dSIA0UAGJQIADx6dpeKHE4gA2gF1dmgJKP1AZVd7yAb1YBIAHoAKiD-KCCoAGE4YEEACwgLKxBDNEw0PAA6KAB1OJioYDj8KD4xTkElFSg0CGAxNFVtMIiAdylJKGRChKgANzhJMWg+DDQe6DBMXAILWoArCEqACgBKUvLK5U5M-yCA-01BGPiAfmXedIAuKHKAa04MVs5Vm-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-seuGONG67Gm4RvUzCPx-ylLhv1A45NwL1QauNfi6AuqG3Z3hEAAlfMi4Cjjl39ogcpnd1W1zdnveZd9+b-3WvFsds9aIvjgAUskAPB-Yb9cK-i5wCLKe-Bm+F5brXV2QB64N0urnziecuMrPz1PKia9i5wDL5xdqcAAGoh9asA5cJ12LuNGb42sBPzqxCSFPJXkPT5F-L9WDHiwbvw3+BIjC9gk6-tZKZfz6vFvNf4iv3qe00AACMJ2icvQEUYIOO4IB34BoD4n47uXCOIIkMAA-sgufv7iyhtC-m-ruJ-gfn4P4KAbXlfqaMcAQFAAAEyP5ZYQGv5YDv5oFf7gbMI-5rCZBr5L54BrDi4AEpjAHwGC7p6W7gHP44F4FcoyoIGX7X4oHQAADMmBiaZBDKlghBhQgBJBOA4uAAIrwGAP1pkBIWHjIf1uLvaNIPwd3hfsyqyuvmwXQWnj3uLkgTfqgQACzqGlKJDr74FUDf5iGPJxTyFSFKGrCOGKFoCyF-6qHqF+6MHaFL74EH7jSsCn5AA)

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
const pizza = builder(({resolve, reject}) => (pizzaType: string) => {
    // * Initial code
})
...
await pizza('mexican')
```

Last thing you need to know, is that you return an object.

The object requires `__build`, which will "build" the promise. The returned value of `build`, 
will define what type the promise returns.

```ts
const pizza = builder(({resolve, reject}) => (pizzaType: string) => {
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

## Builder functions

Order of execution: <br>
`__function` → `__init` → (* → `__step`)* → `__build` → `__finally`

| Name | Description
| ---- | -----------
| `__function?.(...args)` | The chained functions returns a function (e.g. `pizza().extraCheese()(...args)`) 
| `__init?.()` | The initial function to be called. <br>Used to initialize values that require asynchronous operatinos.<br><br>Like the other declared functions here, it will be called without chaining it.
| `__catch?.(error)` | The whole chain is inside a try-catch block. <br> If an error occurs, and __catch is defined, rather than throwing the error, __catch will be called.<br><br>Note: If __catch is not defined, reject(error), will be called before throwing an error.
| `__step?.()` | Runs after each step in the chain functions. <br> Good for things like validating every step.
| `__build?.()` | Is called as a last function to be called (before finally). This returns the awaited result of the builder-pattern. <br><br> It is optional - as sometimes we just want to run a chain of commands without a final "build".
| `__finally?.()` | The last function - and will always run. Consider it as a way to clean-up after the full execution.

> The `__function` is called like this: `pizza().extraCheese().extraCheese()(...args)`