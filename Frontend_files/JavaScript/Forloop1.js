// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// for(let i=10;i>=1;i--){
//     if(i%2==0){
//        console.log(i);
//     }
 
// }
// let i="noshitha"
// if(i){
//     console.log("true")
// }
// str = "SundayIsAHoliday"
// console.log(str.split())

arr=[1,2,3,4,5,6,7,2]
console.log(arr)
//Accesing a individual element from the array
//case 2:based on the element value
for(j in arr){
    if(arr[j]===2){
        console.log(`element ${arr[j]} found at ${j}`)
    }
} 

for(let index=0;index<arr.length;index++){
    if(arr[index]===2){
        console.log(`element ${arr[index]} found at ${index} position`)
    }
}
//Array length
console.log(arr.length)

//Modification
console.log(arr)
arr[3]=33
console.log(arr)


//deleting an array
delete arr[3]
console.log(arr)

//adding at the begining
console.log(arr)
arr[0]=33
console.log(arr)


let a=[1,2,3,4,5]
console.log(a)
a.push(6)
console.log(a)
a.unshift(9)
console.log(a.slice(1,3))

function mul(num){
    for(let i=0;i<11;i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
}
let num=5
mul()
// let a="Greek for geeks"
// console.log(a)
// let s=["Apple","watermelon","pinaple","mango"];
// arr=s.join("*")
// console.log(arr)
// let arr1=["apple","watermillon","pineapple","mango"]
// console.log(arr1)
// let arr2=arr1.toString()
// console.log(arr2)
// console.log(arr1.concat(a))
// let arr3=a.sort()
// console.log(arr3)