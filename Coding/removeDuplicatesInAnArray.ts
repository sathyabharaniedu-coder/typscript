export {}

let a = "word a word b word c hello a"

let arr = a.split(" ")


for(let i =0 ; i<arr.length; i++){

    if(arr.indexOf(arr[i]) === i){
        console.log(arr[i])
    }

}