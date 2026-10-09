/* 1) Scope  
2) Declaration/Value Assignment  
3) Re-declaration  
4) Re-initialization/Re-assignment  
5) Hoisting   */
//========================================================
//Varialble : conatiner  which can hold or store a data
//var,let,const
//var : global scope
//let : block scope
//const : block scope and value cannot be changed  
//========================================================
//var - We do not use this in Modern JS/TS. Avoid var because it has function scope and can lead to unexpected
//let - Use let when you need a variable that can change.
//const - Use const when the variable value should not change.
//========================================================

//1] scope - Accessiable are (Functional scope(Var)& Block scope(let,const))

/* function varScope() {//------------------------>Function
    if (true) { //-----------------------> Block
        var x = "Hello Var";
    }
    console.log(x); // Hello Var (Var is function scope, so it is accessible here)
} 
varScope(); */

//==========================================================

/* function letScope() {//------------------------>Function
    if (true) { //-----------------------> Block
        let x = "Hello Var";
        const y = "Hello Const";
        }
    console.log(x + " " + y); // Hello let,const (Var is block scope, so it is not accessible here)
} 
letScope(); */

//==========================================================

//2] Declaration/Value Assignment
/* var a; // Declaration
let b; // Declaration
//const c; // copile time error: Missing initializer in const declaration
console.log(a); //Undefined
console.log(b);//undefined
//console.log(c);// triggeruncaught error
a = 10; // Value Assignment or initialization
b = 10;
//c = 10;
console.log(a); // 10
 */
//============================================================
//3) Re-declaration  

//Var support redeclaration, but let and const do not allow it. Re-declaring a variable with var will overwrite the previous declaration, while trying to re-declare a variable with let or const will result in a syntax error.

/* var a = 10;
var a = 20; // No error, a is now 20
console.log(a); // 20

//let b = 10;
//let b = 20; // SyntaxError: Identifier 'b' has already been declared
*/
//============================================================
//4) Re-initialization/Re-assignment

//Var and let allow re-assignment, but const does not. You can change the value of a variable declared with var or let, but once a variable is declared with const, its value cannot be changed.

//==================================================
//5) Hoisting

//Var declarations are hoisted to the top of their scope, meaning you can use a variable before it is declared. However, let and const declarations are also hoisted but are not initialized, which means you cannot access them before their declaration without causing a ReferenceError.
//var will through undefined if you try to access it before declaration, while let and const will throw a ReferenceError if accessed before declaration.
//let and const are hoisted but not initialized, so they are in a "temporal dead zone" from the start of the block until the declaration is processed. Accessing them before declaration will result in a ReferenceError.
