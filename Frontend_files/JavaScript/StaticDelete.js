class StaticDelete{
    constructor(){
        StaticDelete.country ="India"
        StaticDelete.bird="Parrot"
        StaticDelete.animal="Lion"
        StaticDelete.game="Cricket"
        console.log(`Name of the country is : ${StaticDelete.country}\nNational bird of the country is : ${StaticDelete.bird}\nNational animal of the country is: ${StaticDelete.animal}\nNational game of the country is: ${StaticDelete.game}`)
    }
    delete_Opt(){
        delete StaticDelete.bird
        console.log(`Name of the country is : ${StaticDelete.country}\nNational bird of the country is : ${StaticDelete.bird}\nNational animal of the country is: ${StaticDelete.animal}\nNational game of the country is: ${StaticDelete.game}`)

    }
    static delete_Opt(){
        delete StaticDelete.animal
        console.log(`Name of the country is : ${StaticDelete.country}\nNational bird of the country is : ${StaticDelete.bird}\nNational animal of the country is: ${StaticDelete.animal}\nNational game of the country is: ${StaticDelete.game}`)
    }
}
a=new StaticDelete()
a.delete_Opt()
StaticDelete.delete_Opt()
delete StaticDelete.game
console.log(`Name of the country is : ${StaticDelete.country}\nNational bird of the country is : ${StaticDelete.bird}\nNational animal of the country is: ${StaticDelete.animal}\nNational game of the country is: ${StaticDelete.game}`)