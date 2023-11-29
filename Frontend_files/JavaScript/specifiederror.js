try{
   const gravity=9.8
   gravity =3.4
}
catch(msg){
    if(msg instanceof ReferenceError){
    console.log("Inside the reference Error")
    console.log(msg.message)
    }
    else if(msg instanceof TypeError){
        console.log("Inside the Type Error")
        console.log(msg.message)
    }
    else{
        console.log(msg.message)
    }
}
finally{
    console.log("Executing the finally block")
}