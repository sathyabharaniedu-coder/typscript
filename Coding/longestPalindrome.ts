export {}

let str = "baddad"
let strResult = new Set<string>()
let maxLength = 0

for (let i =0 ; i < str.length ;i ++){

    let left  = i
    let right = i

    while(left >=0 && right < str.length && str[left]==str[right] ){
        if(maxLength < (right -left+1)){
            strResult.clear()
            strResult.add(str.slice(left,right+1))
            maxLength = right -left +1
        }else if(maxLength == (right -left+1)){
            strResult.add(str.slice(left,right+1))
        }
        right ++
        left --
    }

    left = i
    right = i+1

    while(left >=0 && right < str.length && str[left]==str[right] ){
        if(maxLength < (right -left+1)){
            strResult.clear()
            strResult.add(str.slice(left,right+1))
            maxLength = right -left +1
        }else if(maxLength == (right -left+1)){
            strResult.add(str.slice(left,right+1))
        }
        right ++
        left --
    }
}

console.log(maxLength)
console.log(strResult)
console.log(Array.from(strResult.values()))