export {}

let a = "krmy"
let b = "mary"

// let charA= a.toLowerCase().split("").sort().join("")
// let charB= b.toLowerCase().split("").sort().join("")

// if(charA == charB){
//     console.log("Anagram")
// }else{
//     console.log("It is not an anagram")
// }

//====================================

let map = new Map()
let map2 = new Map()

if(a.length == b.length ){
 mapAdding(a, map)
 mapAdding(b, map2)

 let isAnagram = true

 for(let key of map.keys()){
    if(map.get(key)!= map2.get(key)){
        isAnagram = false
        break
        }
    }
    if(isAnagram){
     console.log("Anagram")
        }
    else{
    console.log("It is not an anagram")    
    }
}
else{
    console.log("It is not an anagram")
}

function mapAdding(str:string, map:Map<string, number>){
   
    for(let i =0; i < str.length ; i++){
        if(map.has(str.charAt(i))){
            let count = map.get(str.charAt(i)) || 0
            map.set(str.charAt(i), count+1)
        }else{
            map.set(str.charAt(i), 1)
        }
    }
}