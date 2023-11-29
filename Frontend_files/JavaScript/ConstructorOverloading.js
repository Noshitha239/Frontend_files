class ConstructorOverloading{
    constructor(){
        console.log(`constructor with zero parameters`)
    }
    constructor(a){
        console.log(`constructor with one parameters`)
    }
    constructor(a,b){
        console.log(`constructor with two parameters`)
    }
    constructor(a,b,c){
        console.log(`constructor with three parameters`)
    }
}
a=new ConstructorOverloading("N","Noshi")