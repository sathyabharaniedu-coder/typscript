export {}

let a = 153
let sum = 0
let temp = a

function countOfDigits(a : number) : number {
    let count = 0
    while(a > 0){
        count++
        a = Math.floor(a/10)
    }   
    return count
}

let count = countOfDigits(a)

while(temp > 0){
    let rem = temp%10
    sum = sum + Math.pow(rem, count)
    temp = Math.floor(temp/10)
}

if(sum == a){
    console.log(`${a} is an Armstrong number`)
}else {
    console.log(`${a} is not an Armstrong number`)
}   