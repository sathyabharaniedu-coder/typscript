export {}

let a = 192345678

let highest = 0

for(let i =0 ; i < 8 ; i++){


    if(highest < a%10){
        highest = a%10
    }

    a = Math.floor(a/10)
}

console.log(highest)