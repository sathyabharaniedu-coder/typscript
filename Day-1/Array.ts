export {} //“This file is a module. Don’t put variables in global scope.”

let a:string[] =[]

for (let i=0; i<5 ; i++){
     a[i] = 'hello';
}

let i = 0;
 while (i<5){
    console.log(a[i])
    i++;
 }

 for (let x in a ){
    console.log(x,a[x]);
 }
 
  for (let element of a ){
    console.log(element);    
 }

 let fruits = ['apple','banana','orange'];

/*  let lastfruit = fruits.pop(); // removes the last element from the array and returns it. In this case, it will remove 'orange' and assign it to lastfruit.

   console.log(lastfruit); // Output: 'orange' */
// console.log(fruits); // Output: ['apple', 'banana']

fruits.forEach((fruit,index)=>{
      console.log(`${index+1}`,`${fruit}`);
})