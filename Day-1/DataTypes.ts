let a: number |  string = 3.2+5+ " "+ "hello";

console.log(typeof(a))//type of the variable a is string because of the concatenation with string "hello"`

let b = 'hello'
let c // if you have not assigned any value to a variable, it is considered undefined. The variable c is declared but not initialized, so its value is undefined.

let ans = `Chech ${b} ${c}`; // Template literals allow for embedding expressions and variables directly within a string using the ${} syntax. This makes it easier to create dynamic strings without needing to concatenate multiple parts together.

console.log(ans)

console.log("hello",b,c);

let x =(5>6) ? 5 : 6

let ex = 2

if(typeof(x) === 'number'){
    console.log('true')
}else{
    console.log('false');
}