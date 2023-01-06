# build-a-promise

Creates a promise that uses the builder-pattern. The chained functions will run asynchronously.

`npm i build-a-promise`  |  `pnpm add build-a-promise`

[Try it out in TypeScript Playground](https://www.typescriptlang.org/play?ssl=142&ssc=15&pln=114&pc=1#code/FAFwngDgpgBAsgQzAIygBQE4HsC2BLAZygB4AVAPhgF4ZSYAfGTXQki4YPAOxCgwDMEAY1gAhAK54ANgBM+AeQgg8WLgWKjKAb2ABIAPQAqQ3piGYAYQQghACygEYCLmBh9sGAgDo9h-XoB9AKFrOwB+AAp3LAwALhhxLgBrLiwAdy4ASnjEFHRsfCJiADcsPBlyPSMTXTMYACVExwR+XgwYZElZABonLhkYNOkpGAxEwfsQe3ap2BAMMABaEJtbGEFpRxiYVJAfXT9AgP5uBCkpMEjs+CRUZkKSUvLKg2NTc0a1dbxPPfeYACqXCkeCSc3sHS6cna-ESQmUqhgIXOyGESRgixgU0I6zhCK4-xCXA6sAQBDAXDs2FS4m8MF8-l0QW4eBAVxyt3yLCKTwqVTetQ+TScrT4bmEawIvAgMG4WIhdgQcthlPx3n+AHEsFgBvxttiuABzRwgsEwYpncrWbiGtzFPiuKVQCD7Q5MgJOiDsm55e6sEplPmvGp1T7NUXtM4jRXcRy2MkkqDEoS4CBSKC8GS9f7OAasxwYDPiDBcKADC1ScSwIbnEny2CFghYKT28tnKvrfUQiAFViuxlBTrSGQRa65O69oqaYAAXw43DaghEMAkw749QczftMB0ukbW6gEQrVfiiRS6Sy8V5wBgt9GUAAVlB4RFC2TVGF4s4wNdr3PODwfBLmIUJ8AAghghpkG4AAevD9M0LgANoALq9AA0rB8EyI4G4phgMjEN+vTfuQvSaDuN53q+8SrrI66bi2UDZFRd53owEQRF43EIJBBDxKQmTUJQmEAGQrqBGCKGqGjkJkrFsQwMCcUJVAiTA4l0dC0kqGosnyf+4DQDAABixI0FxPF8V+LiqZQ34cEZIFrhgeHFgQeD2sQmFQHBSY4Q0z4xIRUoYDavRmWRK6UDQOhsUh6FQK4cpgmAWD8DA6EofElleLxxrxGgvEIDgGZ8Oo6EJUlKFycJEkuW5nieSQ6HkZQ4l+lOlSGZAzn0a5RYlt5WH+bhQUEcQoXhaZXBRaIvR0L52GIWAqExcp3F5dZtB2QpWkMUI7nNcQ8j4CA3m9Kl6X1f1OmqOomhze1TCTiQ07ACq8K6ZCLnQUto19KtaGZSNCGBfhIXzNNkVtRE-BcLRkkQVBpAYW11z7QNIDFlwF0rgt2gKXon34j9sidYem35fxgNCbuujpiA95Nkxp79FAJylgMHFHu2UBs+eGR2eagaZN0ei6Huj7PiAbNyJzZZKZxb5Nlwn603VvLyZLjMwDIqiwDQghSEQEspmoTM9tyhs7FAaQvdbnEBPuTG9M70vwsL9NSyz24WcUXt6wb1BYmMUAANwwO7vuHgHMBzpLUtPvCIdHoH+uliH8xVpH7vJyAafxxLM7a7oeD8BEACELvbvQjDVx7IBCYW2Mlhwkvm1KSKqPBTNG1wERaMzB69IW+fx5kuXU6XndMyTuk0ypdUUwGzyZKhIeoe3uhECApB4KVWDiAXZIUkIylexLujzK43u6AgaRKkz5u914zJcKyYReKOV+6Hq7QRFnusYk11573Tpr-e+j9WTAJ-onSWD8n7d0AjwN+HppRfzgfA8uykM7MUovAjuPckx7CCJzKMlxv6l3gS3HGkCE6JwYZLcuVca74KmNge2pZ7YAFEMAeCwZLNhEREEwJfiQtBQ5ZCjmoTOJEoQ1hRH4TECB2CMqsMbkJDh6Rba8OURgQRZd1HiNQUEFYdhqFCMbiI6Bz9iGmOCAozB0QMCZEsVAE2UBIFjxlkojwsj6SJ3IecW+v9RF2JQaQ44pwQmYNkcXXoAAGeSZt7qW2wDBVwNBuEO0yYPORCY8LBSIi4EiLgore0NBmCIIB8oZl6FbCA8QppGlUYnHBERGnUCoDQAA5LMLgvTLFS1bsSK2DwvADK8MgbgI5xmsEsR0rpPS+nmNsEM7xg0xmvS8Gs6ZszOmvUWeo5ZPSYC9OCRcDZhDaElhgPMogXhLlgH2f0Q51tLG-1ucSKe21vyX0IWAtQXgIC0lsCI8klIL51XCcg3uSFGkoV+caNxmzRn3IyWAX+TCGElycCtCW3yMVYEyXoOcbE9BEqkTICm+LAazg4BwIBvAu40GpXwV8dUIg0y4OIHAqAMCXXiMgbU6ZnCXzYp3ZsUAvBSCwIaCIvSACSH9lBnHiL03oWgCDdCSCXBS+h9B1BVayPAZxu5yA4GxXWeAQ6JIUkSuKilbyDihKOSizrnVSvTLK+VirqUbM9YpIl-SHAgF6XS2eCk2IznFkG9+rJ3VOqDbeb1Mq5UKt6Qm8N8kg2xujXeIInok0Fq9fdaVvrM2ekDZ6-NQbZbKVCs0qGrS6rJpTWmytEQ8C9FCrmlNt48AAGoh2lqLjG2cKTT5QqBViMNJk8S6RLdajM95RllgAGp8xDrCllBcABMvRs7MUmYqvdQzT29LJDIC9BdenTAgNCCANbU3lp9Rmwe3zN1831YZedi7VA-2AEAA)

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

## Builder functions

| Name | Description
| ---- | -----------
| `__init?.()` | The initial function to be called. <br>Used to initialize values that require asynchronous operatinos.<br><br>Like the other declared functions here, it will be called without chaining it.
| `__catch?.(error)` | The whole chain is inside a try-catch block. <br> If an error occurs, and __catch is defined, rather than throwing the error, __catch will be called.<br><br>Note: If __catch is not defined, reject(error), will be called before throwing an error.
| `__step?.()` | Runs after each step in the chain functions. <br> Good for things like validating every step.
| `__build()` | Is called as a last function to be called (before finally). This returns the awaited result of the builder-pattern.
| `__finally?.()` | No matter the given event of the chain function, finally will ALWAYS be run at the end

