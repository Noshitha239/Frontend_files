class MethodOverloading{
    method1(){
        console.log(`constructor with zero parameters`)
    }
    method1(a){
        console.log(`constructor with one parameters`)
    }
    method1(a,b){
        console.log(`constructor with two parameters`)
        console.log(a,b)
    }
    method1(a,b,c){
        console.log(`constructor with three parameters`)
        console.log(a,b,c)
    }
  
}
c1=new MethodOverloading()
c1.method1(10)
