let arr = []
function push_operation() {
    a = Number(prompt("Enter the number to be added in the array"))
    arr.push(a)
    console.log(arr)
    alert("Added Successfully")
    console.log("Added Successfully")
    a1=Number(prompt("Do you want to add another element\nFor yes press 1\nFor No press 2"))
    if (a1 == 1) {
       push_operation(a1)
    }
    else {
        b = prompt("Do you want to exit.\nFor yes press 1\nFor No press 2")
        if (b == 1) {
            alert("Completed the operations")
            console.log("Completed the operations")
        }
        else {
            let b1 = prompt("What operation you want to perform \n1.For Adding the elements press 1.\n2.For deleting the element press 2.\n3.For exit press 3")
            user_options(Number(b1))
        }
    }
    return arr  
    console.log(arr)
}
function pop_operation() {
    arr.pop()
    alert("Element deleted successfully")
    console.log("poped Successfully")
    console.log(arr)
    c=Number(prompt("Do you want to delete element\nFor yes press 1\nFor No press 2"))
    if (c == 1) {
       pop_operation(c)
    }
    else {
        d = prompt("Do you want to exit.\nFor yes press 1\nFor No press 2")
        if (d == 1) {
            alert("Completed the operations")
            console.log("Completed the operations")
        }
        else {
            let d1 = prompt("What operation you want to perform \n1.For Adding the elements press 1.\n2.For deleting the element press 2.\n3.For exit press 3")
            user_options(Number(d1))
        }
    }
    return arr
}
function user_options(num1) {
    if (num1 === 1) {
        arr = push_operation()
    }
    else if (num1 === 2) {
        arr = pop_operation()
    }
    else if (num1 === 3) {
        opt = prompt("Do you want to exit.\nFor yes press 1\nFor No press 2")
        if (opt == 1) {
            alert("Completed the operations")
            console.log("Completed the operations")
        }
        else {
            let opt1 = prompt("What operation you want to perform \n1.For Adding the elements press 1.\n2.For deleting the element press 2.\n3.For exit press 3")
            user_options(opt1)
        }
    }
    console.log(arr)
}
let options = prompt("What operation you want to perform \n1.For Adding the elements press 1.\n2.For Deleting the element press 2.\n3. For exit press 3.")
user_options(Number(options))



