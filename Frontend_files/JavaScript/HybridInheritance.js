class Plane{
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
class PassengerPlane extends Plane{

}
class FighterPlane extends PassengerPlane{

}
class CargoPlane extends PassengerPlane{

}
c1=new PassengerPlane ()
c2=new FighterPlane ()
c3=new CargoPlane ()
c1.fly()
c1.land()
c1.takeoff()
c2.fly()
c2.land()
c2.takeoff()
c3.fly()
c3.land()
c3.takeoff()