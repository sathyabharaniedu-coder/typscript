export{}

//promise,async,await

function age(ag:number) : Promise<string>{
    return new Promise((resolve,reject) =>{
        if(ag > 10){
            resolve("age is greater than 10")
        }else{
            reject("age is less than 10")
        }
    })
}

async function main() {

    try{
            const ba = await age(1);
            console.log(ba)
    }catch(error){
    console.log(error);

    }
}

main()