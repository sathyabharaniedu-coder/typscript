export {}

let a = 5

function factorial(a : number) : number {

    return a == 0 ? 1 : a * factorial(a-1)
}

console.log(factorial(a))