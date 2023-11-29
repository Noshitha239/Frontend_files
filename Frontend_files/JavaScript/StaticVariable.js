class StaticVariable{
    static country = "India"
    constructor(){
        StaticVariable.bird="Peacock"
        console.log(`Name of the country is : ${StaticVariable.country}`)
    }
    nationalanimal(){
        StaticVariable.animal="Tiger"
        console.log(`National bird of the country is : ${StaticVariable.bird}`)
        console.log(`National Animal of the country is : ${StaticVariable.animal}`)
    }
    static nationalgame(){
        StaticVariable.game="Hockey"
        console.log(`National Animal of the country is : ${StaticVariable.game}`)
    }
}
StaticVariable.nationalgame()
