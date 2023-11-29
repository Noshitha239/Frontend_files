class StaticModify{
    constructor(){
        StaticModify.country ="India"
        StaticModify.bird="Parrot"
        StaticModify.animal="Lion"
        StaticModify.game="Cricket"
        console.log(`Name of the country is : ${StaticModify.country}\nName of the bird is : ${StaticModify.bird}\nName of the animal is : ${StaticModify.animal}\nName of the game is : ${StaticModify.game}`)
    }
    modify(){//it is possible to modify in instance method
        StaticModify.bird="Peacock"
        console.log(`Name of the country is : ${StaticModify.country}\nName of the bird is : ${StaticModify.bird}\nName of the animal is : ${StaticModify.animal}\nName of the game is : ${StaticModify.game}`)
    }
    static modify1(){
        StaticModify.animal="tiger"
        console.log(`Name of the country is : ${StaticModify.country}\nName of the bird is : ${StaticModify.bird}\nName of the animal is : ${StaticModify.animal}\nName of the game is : ${StaticModify.game}`)
    }
    
}
a=new StaticModify()
a.modify()
StaticModify.modify1()
StaticModify.game="Hockey"
console.log(`Name of the country is : ${StaticModify.country}\nName of the bird is : ${StaticModify.bird}\nName of the animal is : ${StaticModify.animal}\nName of the game is : ${StaticModify.game}`)
    