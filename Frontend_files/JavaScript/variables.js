// let a=20// Global variable
// console.log(a)

// function abc(){
//     let b=30
//     console.log(b)// local variable
//     console.log(a)
// }
// abc()
// console.log(b)

//Nested functions
function outer_func(){
      let a=20
      console.log(`The vale of the a is ${a} called in the outer function`)
      function inner_func(){
        let b=20
        console.log(`The vale of the b is ${b} called in the inner function`)
        console.log(`The vale of the a is ${a} called in the inner function`)
      }
      inner_func()
}
outer_func()
// delete outer_func()
function outer_func(){
  let a=20
  console.log(`The vale of the a is ${a} called in the outer function`)
  function inner_func(){
    let b=20
    console.log(`The vale of the b is ${b} called in the inner function`)
    console.log(`The vale of the a is ${a} called in the inner function`)
  }
  return inner_func()
}
inner=outer_func()
console.log(inner)
inner()