export{}

const employees = [
    { id: 1, name: "John", department: "IT" },
    { id: 2, name: "Alice", department: "HR" },
    { id: 3, name: "Bob", department: "IT" },
    { id: 4, name: "David", department: "Finance" },
    { id: 5, name: "Emma", department: "HR" }
];

let dept : any = [];

for(let i =0 ; i< employees.length; i++){

    if(!dept[employees[i].department]){
        dept[employees[i].department] = []
    }

    dept[employees[i].department].push(employees[i])

}

console.log(dept)
