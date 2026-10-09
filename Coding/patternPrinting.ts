
export {}

//declare const process: any;
//process.stdout.write(i.toString())
//console.log("*".repeat(5))


// let a = 5

// for (let i =1 ; i<=a ; i++){

//     let b = ""
//    for (let j = 1 ; j <= i; j++){
    
//     let x = (i+j)%2
//      b += x.toString() + " "
   
//     }
//     console.log(b)
// }

// 0 
// 1 0 
// 0 1 0 
// 1 0 1 0 
// 0 1 0 1 0 

//==========================================================================

//pyramid pattern
// let a = 4
// let b = 1
// for(let i =0 ; i<a;i++){
//     console.log(" ".repeat(a-i-1) + "*".repeat(i+b++))
// }
//===========================================================================

// let a = 4
// let tot = 1

// for (let i = 1; i <= a; i++) {
//     process.stdout.write(" ".repeat(a - i + 1))

//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(tot++ + " ")
//     }

//     process.stdout.write("\n") // move to next line
// }

//===========================================================================

//Buttergly pattern

// let a=5

// for(let i = 0 ; i<=a ;i++){
//   console.log("*".repeat(i+1) + " ".repeat(a-i) +" ".repeat(a-i) +"*".repeat(i+1))  
// }   
// for(let i = a ; i>=0 ;i--){
//   console.log("*".repeat(i+1) + " ".repeat(a-i) +" ".repeat(a-i) +"*".repeat(i+1))  
// }

//===========================================================================

// x pattern

let n: number = 9; // MUST be odd for perfect symmetry

for (let i = 0; i < n; i++) {
    let row: string = "";

    for (let j = 0; j < n; j++) {
        row += (i === j || i + j === n - 1) ? "*" : " ";
    }

    console.log(row);
}