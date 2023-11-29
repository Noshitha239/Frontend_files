class Plane{
    constructor(){
        this.a=10
        this.b=20
    }
   
    fly(){
       console.log("The plane is flying")
    }
    land(){
        console.log("The plane is landing")
    }
    takeoff(){
        console.log("The plane is takeoff")
    }
}
class ChildClass1 extends Plane{
    constructor(){//3
       super()//
       console.log("Inside the child class one")
       console.log(this.a+this.b)
    }
}
class ChildClass12 extends ChildClass1{
    //constructor(){
    //     super()
    // }
    display(){
        console.log("inside the display method of childclass12")
        console.log(this.a+this.b)
    }
}
c1=new ChildClass12()//1 //12
c1.display()//13//17
// c1.fly()
// c1.land()
// c1.takeoff()