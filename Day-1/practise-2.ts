export{}

// let employee : object = {
//     name : "John",
//     age : 30,
//     salary : 50000
// }   

// console.log(employee.name);
// console.log(employee.salary);   
//================================
//Inline type declaration

// let employee:{name : string,age :number ,salary : number,getDetail():string} = {

//     name : "jhon",
//     age : 30,
//     salary : 50000,
//     getDetail:function(){
//         return `Name : ${this.name} and Salary : ${this.salary}`;
//     }
// }

// console.log(employee.name);
// console.log(employee.salary);
// console.log(employee.getDetail());  

//================================
    
//Type alias

// type employee = {name:string,age:number,salary:number,getDetail():string}

// let people : employee = {
//     name : "jhon",
//     age : 30,
//     salary : 50000,
//     getDetail:function(){
//         return `Name : ${this.name} and Salary : ${this.salary}`;
//     }
// }

// people.name = "Smith";
// console.log(people.getDetail())

//=================================================

//Class

// class Employee {

//     constructor(public name:string,public age:number,public salary :number){}

//     getDetails():string{

//         return `name : ${this.name} and salary : ${this.salary}`;
//     }
// }

// let employee = new Employee("jhon",30,50000);

// console.log(employee.name);
// console.log(employee.salary);
// console.log(employee.getDetails()); 

//=================================================

//interface

// interface Employe {
//     name :string;
//     age? : number;
//     salary? : number;
//     getDetails():string;
// }

// interface Employe1 extends Employe{

//     getName():string
// }

// class employee implements Employe{

//     constructor(public name:string,public age?:number,public salary? :number){}

//     getDetails():string{
//         return `name : ${this.name} and salary : ${this.salary}`;
//     }
// }

// class employee1 implements Employe1{

//     constructor(public name:string,public age:number,public salary :number){}   

//     getDetails():string{
//         return `name : ${this.name} and salary : ${this.salary}`;
//     }   
//     getName():string{

//         return `name : ${this.name}`;
//     }   
// }

// let people = new employee("jhon");

// console.log(people.name);
// console.log(people.salary);
// console.log(people.getDetails());   

//=====================================
//static members
class Employee {

    static pi = 3.14;
    static getPiDouble():number{
        return Employee.pi * 2;
    }
}

console.log(Employee.pi);
console.log(Employee.getPiDouble());
//====================================================
