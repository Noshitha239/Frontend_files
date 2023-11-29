class LocalVariable{
    //constructor(){..
    //}
    add(){//11
        let num11=11//12
        let num22=12//13
        let sum=num11+num22//14
        console.log(`The sum of 2 numbers is: ${sum}`)//15
    }
    static sub(){//2
        let num11=11//3
        let num22=12//4
        let diff=num11-num22//5
        console.log(`The sum of 2 numbers is: ${diff}`)//6
    }
    static display1(){//9
        console.log(`The sum of 2 numbers is: ${diff}`)//10--error
    }
    display(){//18
        console.log(`The sum of 2 numbers is: ${sum}`)//19-->error
    }
}
LocalVariable.sub()//1//7
//LocalVariable.display1()//8//9
c1=new LocalVariable()//8//9
c1.add()//10//16
c1.display()//17//20