export {}

interface person{
    name:string;
    age:number
    school?:string //optional
}

let person1: person={ 
    name : 'jhon', age:2
}

//Readonly properties

interface school{
    id:number;
    name:string;

    display():void;
}

let student : school = {
    id:1, name :"sathya",

    display(){
        console.log(`${this.id} ${this.name}`);
    }
}

student.display();










/*
1] An interface in TypeScript is a way to define the structure of an object. It specifies the properties 
and methods that an object should have, without providing the implementation details. Interfaces are
 used to enforce a certain structure on objects, ensuring that they adhere to a specific contract. 
 This allows for better type checking and helps to catch errors at compile time. Interfaces can be
 implemented by classes, which means that a class can be required to implement the properties and 
 methods defined in an interface. This promotes code reusability and helps to create more maintainable 
 and scalable applications.
2] Interfaces can be used to define the shape of an object, including its properties and methods. 
They can also be used to define the structure of a class, ensuring that it implements certain properties
 and methods. Interfaces are a powerful tool for creating reusable and maintainable code, as they allow 
 you to define a common structure that can be implemented by multiple classes or objects. They also help
 with type checking, ensuring that objects conform to the expected structure at compile time.  
3] In TypeScript, interfaces can also be used to define the structure of a function. This is done using
 the "callable" interface, which specifies the parameters and return type of a function. This allows you
 to define a common structure for functions, ensuring that they adhere to a specific contract and can
 be used interchangeably in your code. Callable interfaces are particularly useful when working with
 higher-order functions or when defining callback functions, as they provide a clear and consistent 
 way to specify the expected behavior of the function.   

1. An interface in TypeScript is a way to define the structure of an object.
2. It tells the compiler what properties and types an object should have.
3. It's like a blueprint for objects.


Abstract method: we only signature of the method ( there is no implementation )

interface InterfaceName
{
properties
abstract methods
}

1 Regular properties
2 Optional properties
3 Readonly properties & function types

*/