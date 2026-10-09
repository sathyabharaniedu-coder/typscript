export {}

let a ="bbbaaabbbaaaaccchhhddddeee"

// let map = new Map<string, number>()

// for(let i =0 ;i < a.length; i++ ){
//     if(map.has(a.charAt(i))){
//         map.set(a.charAt(i),(map.get(a.charAt(i)) ?? 0 )+ 1 )
//     }else{
//         map.set(a.charAt(i), 1 )
//     }
// }

// for(let [Key,Value] of map){
//     if(Value > 3){
//         console.log(`The key has occured more than 3 times ${Key} and the value is ${Value}`);
//     }
// }

//===============================

let string : {[key:string] : number} = {}

for(let i =0 ; i<a.length ; i++){
    if(string[a.charAt(i)]){
        string[a.charAt(i)] = string[a.charAt(i)]+1
    }else{
        string[a.charAt(i)] = 1
    }
}
console.log(string)