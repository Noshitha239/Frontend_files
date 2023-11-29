function mul(num){
    for(let i=0;i<11;i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
}
let num=5
mul(num)

//nameless functions or anonymous functions
let div = function(){
    let n=10
    let n1=20
    console.log(n/n1)
}
div()

let div1 = function(){
    let n=10
    let n1=30
    console.log(n/n1)
}
div1()



let a=20
console.log(a)

function abc(){
    let b=30
    console.log(b)
    console.log(a)
}
abc()
console.log(b)

