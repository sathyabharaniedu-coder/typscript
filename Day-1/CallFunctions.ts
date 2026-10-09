function show(a :number , callback : (a : string) => void){// for strict checking, we can specify the type of the callback function as well. In this case, the callback function takes a string argument and returns void (does not return anything).
    console.log(a);
    callback("Hello from show function");
}

function showMessage(a : string){
    console.log("Hello from callback function",a);
}

show(10,showMessage)