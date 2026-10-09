export {}
/*1. Class
2. Read only Properties
3. Optional property
4. Static variables and methods
*/

//constructor overloading
//method overloading

class Employee {

    readonly empid: number; //can only be assigned once and cannot be changed
    name : string;
    static school: string = "VMHSS"; // static variable belongs to the class itself rather than to any specific instance of the class. It can be accessed without creating an instance of the class.
    email?:string // optional whether we can assign or not to this property



    constructor(empid: number, name: string, email?:string){
        this.empid = empid;
        this.name = name;
        this.email = email;
    }

    displyaInfo(): void{
        console.log(`${this.empid} ${this.name} ${Employee.school}`);
    
        if (this.email){
            console.log(`school is ${this.email}`);
        }   else{
            console.log(`school is not assigned`);
        }
    }
}

let person = new Employee(123,'jhon');
person.displyaInfo();
