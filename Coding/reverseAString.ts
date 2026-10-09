export {}

let a = "Sathyaraj"

let b = "";

//let reversedString = a.split("").reverse().join("")

for (let i =a.length-1 ; i>=0 ;i--){
    b+=a.charAt(i)
}

console.log(b)
//console.log(reversedString)

//======================================================

// export {}//This file is a module. Don’t put variables in global scope.

// function reverse(a : string) : string{

//     let b = a.split(" ")

//     let reverse = "";

//     for(let str1 of b){

//         for(let i =str1.length-1; i>=0 ; i-- ){
//             reverse+=str1.charAt(i)
//         }

//         reverse+=" "
//     }

//     return reverse
    
// }

// console.log(reverse("hello a sathya raj sjjbab"))
