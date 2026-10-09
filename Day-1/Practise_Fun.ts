export {}

interface hello{
     a : number,
     b : "hello" | "success" | "failure",
     c : [number,string]
}

class cat implements hello{

    a:number

    constructor( a : number,
        public b : "hello" | "success" | "failure",
        public c : [number,string]){
            this.a = a
        }


    catwalk(){
        console.log("hello" + this.a)
    }
}

let catex = new cat(1,"hello",[1,'rt'])

catex.catwalk()