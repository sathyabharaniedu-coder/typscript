//object - object contains properties and behaviour.
// object contains variables & methods
// object is collection of key and value pairs.

//Ex:

// employee --name, desig, sal, dep
//            bonus(), getemdetails(), setdetails()


//student - name, sid,grade
//          // getdetails(), setdetails()


// Different ways to create an object in JS/TS //

// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (JS/TS)
// 4. Using the classes (JS ES16/TS)


// 1. using 'object' type - Directly define the values for variable
// The TypeScript 'object' type represents all values that are not in primitive types.

/*let employee = {name : 'jhon',
    age : 40,
    getDetails: function(){
        return `${this.name} age is ${this.age}`
    } 
}

console.log(employee.name); // object */

type Employee = { name : string, age: number, getaccountdetails: () => string }


let personDetails: Employee = {
    name : 'jhon',
    age : 40,
    getaccountdetails() {
        return `${this.name} age is ${this.age}`
    }}


class Person { 
  constructor(public ssn: string, public firstName: string, public lastName: string) {} 
  getFullName(): string { 
    return `${this.firstName} ${this.lastName}`; 
  } 
  getDetails(): string { 
    return `SSN: ${this.ssn}, Name: ${this.getFullName()}`; 
  } 
}

let person1 = new Person("123", "John", "Doe"); 