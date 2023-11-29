class InstanceVariable{
    //this.fname="Noshi"-->Error
    constructor(fname,lname,age){
        this.fname=fname
        this.lname=lname
        this.age=age
        console.log(`Name of the person is: ${this.fname + " " +this.lname}\nAge of the person is: ${this.age}`)
    }
}