export {}

let a = [513,1,2,3,9,10,22,44,112]

for(let i =0 ;i<a.length-1;i++){

    let start = a[i]

    for(let j = i+1 ; j<a.length ; j++){
        if(start < a[j]){
            let temp = start
            start = a[j]
            a[j] = temp
        }
    }
    a[i] = start
}

console.log(a)