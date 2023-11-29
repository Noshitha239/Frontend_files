class DeleteInstance {
    constructor() {
        this.name = "Noshi"
        this.age=23
        this.city="tirupati"  
    }
    display(){
        console.log(`the name of the person is:${this.name}\nThe age of the person is:${this.age}\nThe city of the person is:${this.city}`)
    }
    deleteInstance(){
        delete this.name
    }
}
a=new DeleteInstance()
a.display()
a.deleteInstance()
console.log(a)
delete a.city
console.log(a)