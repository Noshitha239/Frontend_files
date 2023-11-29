class ModifyInstance {
    constructor() {
        this.name = "Noshi"
        console.log(`the name of the person is:${this.name}`)
    }
    modify(){
        this.name="Vithanala Noshitha Navya Renuka"
        console.log(`the name of the person is:${this.name}`)
    }
}
a=new ModifyInstance()
a.modify()
console.log(`The name of the person is: ${a.name}`)

a.name="bhavana"
console.log(`The name of the person is: ${a.name}`)
