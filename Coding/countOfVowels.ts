export {}

let a = "word apple orange banana grapes outh"

 let arr = a.split("")

// for(let  i =0;i<arr.length ; i++){
//     let count  = 0
//     const word = arr[i].toLowerCase()
//     for(let j = 0;j<word.length;j++){
//         const ch = word[j]
//         if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
//             count++
//         }
//     }
//     console.log(`${arr[i]} has ${count} vowels`)
// }

let count = 0

arr.forEach(ch => {
    if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
        count++
    }
})

console.log(`Total number of vowels in the string is ${count}`)