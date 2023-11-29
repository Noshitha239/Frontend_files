class Methods{
    constructor(){//2
        //constructor is used to initialization of obejects
        this.name1="Kohli"//3
        this.age1=23//4
        this.avg1=54.7//5
    }
    static counrty_name(){//it is common for all class it doesnt change//Static method
        Methods.counrty = "India"
        console.log(`Name of the country is: ${this.country}`)
    }
    display(){//8//instance method the name which doesnot have the prefix called as static
        console.log(`The name of the cricketer is ${this.name1}\nThe age of the cricketer is ${this.age1}\nThe avg of the cricketer is ${this.avg1}`)//9
    
    }
}
c1=new Methods()//1//6
c1.display()//7//10
//methods.display()--->Error
//We can access the static methods using the class name onlu. if we try to access the static methods using obj reference then it will return an error
Methods.country_name()
