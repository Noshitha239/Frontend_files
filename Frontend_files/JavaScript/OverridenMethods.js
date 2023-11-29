class Animal{
    eat(){
        console.log("The animal is eating")
    }
    sleep(){
        console.log("The animal is sleeping")
    }
    run(){
        console.log("The animal is running")
    }
}
class Lion extends Animal{
    eat(){
        console.log("The Lion is eating")
    }
    run(){
        console.log("The Lion is running")
    }
}
c1=new Lion
c1.eat()
c1.sleep()
c1.run()