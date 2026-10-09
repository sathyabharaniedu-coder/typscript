export { }

let a: string = "word a count b hello c and b c word hi hello"

let split: string[] = a.split(" ")

let map = new Map<String,number>()

for (let i =0 ;i <split.length;i++){
    if(map.has(split[i])){
        map.set(split[i],(map.get(split[i]) ?? 0)+1)
    }else{
        map.set(split[i],1)
    }
}

let highest: String[] | undefined = []
let max = 0;
let i = 0
for(let [key,value] of map){
    
    if(value >= max){
        highest[i++] = key;
        max = value;
    }
}
console.log(`Most frequent word: ${highest}`)