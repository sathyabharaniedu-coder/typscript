export {}

let a = "programming java i love my"

let split = a.split(" ")

for(let i = 0; i< split.length; i++){

    if(split[i].toLowerCase() == "i"){
        split[i] = "my"
    }else if(split[i].toLowerCase() == "my"){
        split[i] = "i"
    }
}

let result = split.join(" ")
console.log(result)