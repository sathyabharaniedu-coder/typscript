export {}

let str = "yarray"
let count = 0

for(let i =0 ; i<str.length/2; i++){
    if(str.charAt(i) == str.charAt(str.length-i-1)){
        count++
        continue;
    }
    console.log("Not a palindrome");
    break;
}

if(count == str.length/2){
    console.log("It is a palindrome");
}