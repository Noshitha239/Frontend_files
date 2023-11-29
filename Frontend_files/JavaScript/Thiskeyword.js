class Cricketer{
    constructor(){
        this.name1="Kohli"
        this.age1=29
        this.avg1=45.7
    }
    disply(){
        console.log(this)
        console.log(`The name of the cricketer is ${this.name1}\nThe age of the cricketer is ${this.age1}\nThe avg of the cricketer is ${this.avg1}`)
    
    }
    
}
let a=new Cricketer()
console.log(a)
a.disply()