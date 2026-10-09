export{}

let a = [1,2,3,4,5,6,7,8,9,10];

let b = a.map((item) => {
    return item*item
})   
console.log(`map  = ${b}`)
//=================================
a.push(11)
console.log(`push = ${a}`)
//===============================
let c = a.pop()
console.log(`pop = ${a} and popped element is ${c}`)

//==================================
c = a.shift()
console.log(`shift = ${a} and shifted element is ${c}`)

//===================================
console.log(`unshift = ${a} and unshifted element is ${c}`)
//===================================
console.log(`includes 5 = ${a.includes(5)}`)
//===================================
console.log(`indexOf 5 = ${a.indexOf(5)}`)
//===================================
console.log(`to string = ${a.toString()}`)
//===================================
a.forEach((item,i) => {
    console.log(`${i+1}] = ${item}`)
})
//===================================
let d = a.filter((item) => {
    return item%2 == 0
})
console.log(`filter even numbers = ${d}`)
//===================================
let e = a.reduce((acc, item) => {
    return acc + item
}  ,0 )
console.log(`reduce sum = ${e}`)
//===================================
let ans = a.some((item) => {
    return item > 5
})
console.log(`some numbers > 5 = ${ans}`)
//===================================
ans = a.every((item) => {
    return item > 5
})
console.log(`every numbers > 5 = ${ans}`)