export {}

function isPalindrome(str1:string):boolean{

    if(str1.length == 0 || str1.length == 1){
        return true;
    }

    let first = str1.slice(0,1)
    let last = str1.slice(-1)

    if(first == last){
        return isPalindrome(str1.slice(1,str1.length-1))
    }else{
        return false;
    }

}

let str = "ayarraya"

console.log(isPalindrome(str))
