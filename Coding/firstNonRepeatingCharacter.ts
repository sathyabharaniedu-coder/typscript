export {}

 let a = "sathyaraj"
// let map: Map<string, number> = new Map()

// for(let i=0;i<a.length;i++){
//     if(map.has(a.charAt(i))){
//         map.set(a.charAt(i), map.get(a.charAt(i)) ?? 0 + 1)
//     }else{
//         map.set(a.charAt(i), 1)
//     }
// }

// for(let [Key,Value] of map){
//     if(Value == 1){
//         console.log(`The first non repeating character is ${Key}`)
//         break
//     }
// }

let char : any = {};

for (let i = 0; i < a.length; i++) {
    if (char[a[i]] > 0) {
        char[a[i]] = char[a[i]] + 1;
    } else {
        char[a[i]] = 1;
    }
}

for(let key in char){
    if(char[key] == 1){
        console.log(`The first non repeating character is ${key} and ` + char[key] )
        break
    }
}