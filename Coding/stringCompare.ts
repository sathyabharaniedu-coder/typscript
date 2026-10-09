export {}

let a = "apple"
let b = "orange"

let ans="";

compareString(a,b)
compareString(b,a)

function compareString(str1 : string , str2: string){
    for(let i =0 ; i < str1.length ;i++){
        if(str2.includes(str1.charAt(i))){
            continue
        }else{
            ans += str1.charAt(i) 
        }
    }
}

console.log(ans)