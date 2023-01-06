# build-a-promise

Creates a promise that uses the builder-pattern. The chained functions will run asynchronously.

`npm i build-a-promise`  |  `pnpm add build-a-promise`

[Try it out in TypeScript Playground](https://www.typescriptlang.org/play?target=99&jsx=0&ssl=166&ssc=5&pln=121&pc=1#code/C4TwDgpgBAsghiARhACgJwPYFsCWBnCAHgBUA+KAXimKgB8p1t8iyAoVnAO2AjQDM4AY2gAhAK44ANgBNeAeTDAcGTnkIiANFABiUCAA8enaXihxOIANoBdcgG9WASAD0AKldOorqAGE4wQQALCFNzED00TDQ8ADooAHVA-yhgQPwoPjFOQSUVKDQIYDE0VQ1PbwB3KUkoZBTgqAA3OEkxaD4MNHroMExcAlMCgCsIHIAKAEoMrJzlThinV2cnAH0VwX8ggH4x3iiALigsgGtODArOCcP4JFQ+5kIw0ic3D0cvKAAlLNC+Hi7EBIZFpzNIoFVJDU0FlwcFUrxuik0CAALQbAKBDJwKSmTpQM7ABaOJarFZ8LgtSQgHZXWAIZCMfpERoYHDSZ4udzlL4-DI4aKE7kAVU4khwx2g8NqQNkXUy2VynCgG0hiCExygKPq6XlsxU3I2SrqcDwIGygUwZzEsSgi2WjjWXBwwBp13pdyYBEILLZHNe3O+qjMfwRECEmLwPDAUC4iKC2KVusVsW5AHEMBgwR0uqkuABzUxiiVNFps-z5vSNXjhSMQMBEkkOla1sCuum3RkPH3sl5c97eQO-f5mSHKpJcUxJUzICBKwTYMCSQoQaRabmgmPAQaFYqcFcl1rQCE1OpSgp4DCSKtg5qHjJ4qW9T0QBv2taAqTSSZujv3L0iP0+w+O1SSTOYdhiSC4DQAtDm0WkbgZP9mVZHsAF92C4f4BGEKBxE-XhPhCS8qygBxHHPEiIDGW82kOE4zguWlu1YKA2PyCARnGAoTRULZDjCZjUNYDCOG4XgcNEGVeAAQRgkg9EMWcTDMCwbC0ABpRSjBUoj5zQaRHgsEELFILRNB0bTlNCNTbDI1j2LGNBDnwmRCOIq8ICuBz2PY+gxjGSCYmg2DqCmChyC0gAyPDpLQBRk3ULRtFICYfN8ugoAC8LIqgGLXNlBK5jUCyUrS0TQEgHQlSoQKoJgvABIsHLVJAdhKqkgi0D04o8BwKtCC0gwdNMPTOkMyM0HzZLODMvDkqs4wbKsOyqHIywNIgcJYwlEAMD4KANOsQ46uChrDhQaC4CwZdokGjattsFqxl0YbrPxCAqy6LYGGQ9RyBOoKQsanQWs7f9Ury2Kup66J+qIDTzOS54KvATq3O6ncSkGxbdNGcbCEm6bqrmiyaDepbWvUyyKZUsIbHIWqgfOsLKA5F7cdMPcvqgH7waIACoEB+rQvgtnfuff6pnyuLYb6ga5FwYBBq0Xb9uhjGipUErkdJ5H2DAvIPwxhTaeW6mhqUymxoMwngCmzg8xmvWaatunbNIMY+E4Fy4rkvMSE0pGdFS32YaxzgVfm6hkfs3ynENo0ZX507gaakApnIxwl2ADiL08+jjAgck9zBfyaJaOijk4U5zkucXuwmMpHBb4ZRmAQvZBL-dy54i9OH41qWsbpxs8KKBpBUaAqAESQCFH+dVFzp8mUoD6KglpkApWSjPK0HfOPblqs4ojzSNqxpj4nqe1-ttoAG4oAP-OqxoqYMJb0+uNzi+r8nvdb7QggI-A+3835QA-o4NCaUW44D4GMAAhLvUitB6BIMPjkKYBQiglHYC3RekZlQqCMD-DInAxh2DzlRLQbccgQImKnBqMDHAENzonEG2Vxb829KhVKNg142DwSw7Wy9MD6BAHIRA3814IMXiQmIaxE68zImhIWWVmahUEuLE+cjZyEkUTMRUWwYiMILMw0+OClRPnEaPUSLcCDAGIDgG6GAxDADGCaM0ggsrH1Ho4e24QT6ODgBUbEuddHcAUSsJ0LoTHmMcNmLKrCyFQHVuwzOfiW4hLCWQyYmTgmhOdEQ8SkS1gtmMXkz+sCDpjH-l5eyVT8HEL0VEkulJqRxPyRY3c+TIEtz6Y4OBiDkH1NSJgDee4N4AFFIidEqZ-EZHjCnhOaaUlYxsvwTHMao9EQQsp7E6BkqpcCsroO-lMMZ5x15QBmVEeZ1SkmrP0esTYgR4lf3bksnJETnm7MCBUg5aAtmZIgHPCA+TaHuMBds20n82mQkCZk7JRSfmtIpAiip2zbFaAAAxpQXiIqA1jwhUEmRLcRYxiWSO-loE+eZChjGACFQoWgnxgEOETR2RzP4nMpZgaMFBBVQAAOTwk4MK952DdxEuQjEMVMREBcC-CvZg8TeVssoEK4VfyJUQojjK58MQ-kKqVXy58aqakasFVQYV8KqS6saVKkoBqmQxDtSAE1xgzVMniZkp1SpTEgy0RFBpVT2ExDANaQIHjTTZB8eLZFKySnAEsGy6wgbgWOv1cSzJfTIHQLMMtUe-qDU2KgelJwJaNn80La1ES7BnDOA+AANV4H1PIABGGIXacXsGSTwQhVANm8CcuLXYkQ16zwIL4seuccBr17d051WcDEKjmGMSaHL7b5m5cI1Ql4XySAwHmMYwrV16nFVoSazC0LNybDEyYoa9350Pce09jpODOgdVAu9ZSoyPp0drA9MQj0nuFS2b9t7R7vhlABvxBDgOgffesmU36l1KmFQACVBUep+KHPzCtraw7F0GXkYjg5-BDS4QNvrPWRoIaGS3CtuZ0QAKWSAHg-4VJGW6KPRVSCjTT93UaQ3R91kG704A3fbLdDs8y7qo6+k9OAr323MTgAA1OpvxQy9jxMuRMiA0zZloHmR-DC0D2CeLjUo72FGFM0bAyiJzyoTTQA7Q65J54xCSFIYmlIIR3ETBiJJ4VAARXgYAJXBdPdhtAkWGHCpNNIDzQHhNvrsF5nzFnHBOHsyJpzWoNgECgAAJhS0vPO3ngAlbXn5gd7i75eWi2FiLUWQuxfi6epL5WX0OYoZl6rFnRKsFsxMIAA)

[![Example](https://raw.githubusercontent.com/Refzlund/build-a-promise/master/example-output.jpg)](https://www.typescriptlang.org/play?target=99&jsx=0&ssl=166&ssc=5&pln=121&pc=1#code/C4TwDgpgBAsghiARhACgJwPYFsCWBnCAHgBUA+KAXimKgB8p1t8iyAoVnAO2AjQDM4AY2gAhAK44ANgBNeAeTDAcGTnkIiANFABiUCAA8enaXihxOIANoBdcgG9WASAD0AKldOorqAGE4wQQALCFNzED00TDQ8ADooAHVA-yhgQPwoPjFOQSUVKDQIYDE0VQ1PbwB3KUkoZBTgqAA3OEkxaD4MNHroMExcAlMCgCsIHIAKAEoMrJzlThinV2cnAH0VwX8ggH4x3iiALigsgGtODArOCcP4JFQ+5kIw0ic3D0cvKAAlLNC+Hi7EBIZFpzNIoFVJDU0FlwcFUrxuik0CAALQbAKBDJwKSmTpQM7ABaOJarFZ8LgtSQgHZXWAIZCMfpERoYHDSZ4udzlL4-DI4aKE7kAVU4khwx2g8NqQNkXUy2VynCgG0hiCExygKPq6XlsxU3I2SrqcDwIGygUwZzEsSgi2WjjWXBwwBp13pdyYBEILLZHNe3O+qjMfwRECEmLwPDAUC4iKC2KVusVsW5AHEMBgwR0uqkuABzUxiiVNFps-z5vSNXjhSMQMBEkkOla1sCuum3RkPH3sl5c97eQO-f5mSHKpJcUxJUzICBKwTYMCSQoQaRabmgmPAQaFYqcFcl1rQCE1OpSgp4DCSKtg5qHjJ4qW9T0QBv2taAqTSSZujv3L0iP0+w+O1SSTOYdhiSC4DQAtDm0WkbgZP9mVZHsAF92C4f4BGEKBxE-XhPhCS8qygBxHHPEiIDGW82kOE4zguWlu1YKA2PyCARnGAoTRULZDjCZjUNYDCOG4XgcNEGVeAAQRgkg9EMWcTDMCwbC0ABpRSjBUoj5zQaRHgsEELFILRNB0bTlNCNTbDI1j2LGNBDnwmRCOIq8ICuBz2PY+gxjGSCYmg2DqCmChyC0gAyPDpLQBRk3ULRtFICYfN8ugoAC8LIqgGLXNlBK5jUCyUrS0TQEgHQlSoQKoJgvABIsHLVJAdhKqkgi0D04o8BwKtCC0gwdNMPTOkMyM0HzZLODMvDkqs4wbKsOyqHIywNIgcJYwlEAMD4KANOsQ46uChrDhQaC4CwZdokGjattsFqxl0YbrPxCAqy6LYGGQ9RyBOoKQsanQWs7f9Ury2Kup66J+qIDTzOS54KvATq3O6ncSkGxbdNGcbCEm6bqrmiyaDepbWvUyyKZUsIbHIWqgfOsLKA5F7cdMPcvqgH7waIACoEB+rQvgtnfuff6pnyuLYb6ga5FwYBBq0Xb9uhjGipUErkdJ5H2DAvIPwxhTaeW6mhqUymxoMwngCmzg8xmvWaatunbNIMY+E4Fy4rkvMSE0pGdFS32YaxzgVfm6hkfs3ynENo0ZX507gaakApnIxwl2ADiL08+jjAgck9zBfyaJaOijk4U5zkucXuwmMpHBb4ZRmAQvZBL-dy54i9OH41qWsbpxs8KKBpBUaAqAESQCFH+dVFzp8mUoD6KglpkApWSjPK0HfOPblqs4ojzSNqxpj4nqe1-ttoAG4oAP-OqxoqYMJb0+uNzi+r8nvdb7QggI-A+3835QA-o4NCaUW44D4GMAAhLvUitB6BIMPjkKYBQiglHYC3RekZlQqCMD-DInAxh2DzlRLQbccgQImKnBqMDHAENzonEG2Vxb829KhVKNg142DwSw7Wy9MD6BAHIRA3814IMXiQmIaxE68zImhIWWVmahUEuLE+cjZyEkUTMRUWwYiMILMw0+OClRPnEaPUSLcCDAGIDgG6GAxDADGCaM0ggsrH1Ho4e24QT6ODgBUbEuddHcAUSsJ0LoTHmMcNmLKrCyFQHVuwzOfiW4hLCWQyYmTgmhOdEQ8SkS1gtmMXkz+sCDpjH-l5eyVT8HEL0VEkulJqRxPyRY3c+TIEtz6Y4OBiDkH1NSJgDee4N4AFFIidEqZ-EZHjCnhOaaUlYxsvwTHMao9EQQsp7E6BkqpcCsroO-lMMZ5x15QBmVEeZ1SkmrP0esTYgR4lf3bksnJETnm7MCBUg5aAtmZIgHPCA+TaHuMBds20n82mQkCZk7JRSfmtIpAiip2zbFaAAAxpQXiIqA1jwhUEmRLcRYxiWSO-loE+eZChjGACFQoWgnxgEOETR2RzP4nMpZgaMFBBVQAAOTwk4MK952DdxEuQjEMVMREBcC-CvZg8TeVssoEK4VfyJUQojjK58MQ-kKqVXy58aqakasFVQYV8KqS6saVKkoBqmQxDtSAE1xgzVMniZkp1SpTEgy0RFBpVT2ExDANaQIHjTTZB8eLZFKySnAEsGy6wgbgWOv1cSzJfTIHQLMMtUe-qDU2KgelJwJaNn80La1ES7BnDOA+AANV4H1PIABGGIXacXsGSTwQhVANm8CcuLXYkQ16zwIL4seuccBr17d051WcDEKjmGMSaHL7b5m5cI1Ql4XySAwHmMYwrV16nFVoSazC0LNybDEyYoa9350Pce09jpODOgdVAu9ZSoyPp0drA9MQj0nuFS2b9t7R7vhlABvxBDgOgffesmU36l1KmFQACVBUep+KHPzCtraw7F0GXkYjg5-BDS4QNvrPWRoIaGS3CtuZ0QAKWSAHg-4VJGW6KPRVSCjTT93UaQ3R91kG704A3fbLdDs8y7qo6+k9OAr323MTgAA1OpvxQy9jxMuRMiA0zZloHmR-DC0D2CeLjUo72FGFM0bAyiJzyoTTQA7Q65J54xCSFIYmlIIR3ETBiJJ4VAARXgYAJXBdPdhtAkWGHCpNNIDzQHhNvrsF5nzFnHBOHsyJpzWoNgECgAAJhS0vPO3ngAlbXn5gd7i75eWi2FiLUWQuxfi6epL5WX0OYoZl6rFnRKsFsxMIAA)

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

Order of execution: <br>
`__function` → `__init` → (* → `__step`)* → `__build` → `__finally`

| Name | Description
| ---- | -----------
| `__finally?.(...args)` | Add
| `__init?.()` | The initial function to be called. <br>Used to initialize values that require asynchronous operatinos.<br><br>Like the other declared functions here, it will be called without chaining it.
| `__catch?.(error)` | The whole chain is inside a try-catch block. <br> If an error occurs, and __catch is defined, rather than throwing the error, __catch will be called.<br><br>Note: If __catch is not defined, reject(error), will be called before throwing an error.
| `__step?.()` | Runs after each step in the chain functions. <br> Good for things like validating every step.
| `__build()` | Is called as a last function to be called (before finally). This returns the awaited result of the builder-pattern.
| `__finally?.()` | No matter the given event of the chain function, finally will ALWAYS be run at the end

> The `__function` is called like this: `pizza().extraCheese().extraCheese()(...args)`