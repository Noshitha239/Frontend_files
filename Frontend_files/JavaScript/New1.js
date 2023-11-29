let P = 250
let sum = A * P
alert(`The Total price is:${A}*${P}=${sum}`)
let p = Number(prompt("Do you want extra toppings\n1.yes\n2.No"))
if (p == 1) {
    // alert("Extra Toppings added")
    alert(`The item details\n--------------\nQuantity  :  ${A}\nPrice  :  ${sum + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${sum + 5}\n--------------`)
    let p1 = Number(prompt("Do you want another items\n1.yes\n2.No"))
    if (p1 == 1) {
        let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
        user_options(Number(options))
    }
    else {
        alert(`Bill Amount\n--------------\nQuantity  :  ${A}\nPrice  :  ${sum + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${sum + 5}\n--------------`)

        let c3 = Number(prompt("Do you want to purchace\n1.yes\n2.No"))
        if (c3 == 1) {
            alert("Thank you for purchace. Visit again.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
        else {
            alert("Thank you for visiting.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want\n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
    }

}
else if (p == 2) {
    let p2 = Number(prompt("Do you want another items\n1.yes\n2.No"))
    if (p2 == 1) {
        let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
        user_options(Number(options))
    }
    else {
        alert(`Bill Amount\n--------------\nQuantity  :  ${A}\nPrice  :  ${sum}\nExtra Toppings  :  Not added\n--------------\nTotal  :  ${sum}\n--------------`)

        let p3 = Number(prompt("Do you want to purchace\n1.yes\n2.No"))
        if (p3 == 1) {
            alert("Thank you for purchace. Visit again.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
        else {
            alert("Thank you for Visiting.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want\n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
    }
}
else {
    alert("You are entered invalid input. Please enter valid input to continue.")
    let s = Number(prompt("Do you wnat to Continue.\n1.For yes press 1\n2.For No press 2"))
    if (s === 1) {
        PaneerPizza()
    }
    else {
        alert("Thank you for Visiting.")
    }
}

else if (A == 2) {
let A = Number(prompt("How many pizza's do you want:"))
let P = 250
let sum = A * P
alert(`The Total price is:${A}*${P}=${sum}`)
let p = Number(prompt("Do you want extra toppings\n1.yes\n2.No"))
if (p == 1) {
    // alert("Extra Toppings added")
    alert(`The item details\n--------------\nQuantity  :  ${A}\nPrice  :  ${sum + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${sum + 5}\n--------------`)
    let p1 = Number(prompt("Do you want another items\n1.yes\n2.No"))
    if (p1 == 1) {
        let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
        user_options(Number(options))
    }
    else {
        alert(`Bill Amount\n--------------\nQuantity  :  ${A}\nPrice  :  ${sum + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${sum + 5}\n--------------`)

        let c3 = Number(prompt("Do you want to purchace\n1.yes\n2.No"))
        if (c3 == 1) {
            alert("Thank you for purchace. Visit again.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
        else {
            alert("Thank you for visiting.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want\n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
    }

}
else if (p == 2) {
    let p2 = Number(prompt("Do you want another items\n1.yes\n2.No"))
    if (p2 == 1) {
        let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
        user_options(Number(options))
    }
    else {
        alert(`Bill Amount\n--------------\nQuantity  :  ${A}\nPrice  :  ${sum}\nExtra Toppings  :  Not added\n--------------\nTotal  :  ${sum}\n--------------`)
        let p3 = Number(prompt("Do you want to purchace\n1.yes\n2.No"))
        if (p3 == 1) {
            alert("Thank you for purchace. Visit again.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
        else {
            alert("Thank you for Visiting.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want\n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
    }
}
}

else if (A == 3) {
let A = Number(prompt("How many pizza's do you want:"))
let P = 250
let sum = A * P
alert(`The Total price is:${A}*${P}=${sum}`)
let p = Number(prompt("Do you want extra toppings\n1.yes\n2.No"))
if (p == 1) {
    // alert("Extra Toppings added")
    alert(`The item details\n--------------\nQuantity  :  ${A}\nPrice  :  ${sum + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${sum + 5}\n--------------`)
    let p1 = Number(prompt("Do you want another items\n1.yes\n2.No"))
    if (p1 == 1) {
        let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
        user_options(Number(options))
    }
    else {
        alert(`Bill Amount\n--------------\nQuantity  :  ${A}\nPrice  :  ${sum + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${sum + 5}\n--------------`)

        let c3 = Number(prompt("Do you want to purchace\n1.yes\n2.No"))
        if (c3 == 1) {
            alert("Thank you for purchace. Visit again.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
        else {
            alert("Thank you for visiting.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want\n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
    }

}
else if (p == 2) {
    let p2 = Number(prompt("Do you want another items\n1.yes\n2.No"))
    if (p2 == 1) {
        let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
        user_options(Number(options))
    }
    else {
        alert(`Bill Amount\n--------------\nQuantity  :  ${A}\nPrice  :  ${sum}\nExtra Toppings  :  Not added\n--------------\nTotal  :  ${sum}\n--------------`)

        let p3 = Number(prompt("Do you want to purchace\n1.yes\n2.No"))
        if (p3 == 1) {
            alert("Thank you for purchace. Visit again.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
        else {
            alert("Thank you for Visiting.")
            let options = prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want\n1.Pizza .\n2.Ice Creams\n3.SoftDrinks\n4.Desserts")
            user_options(Number(options))
        }
    }
}
}
else {
alert("You are entered invalid input. Please enter valid input to continue.")
let s = Number(prompt("Do you wnat to Continue.\n1.For yes press 1\n2.For No press 2"))
if (s === 1) {
    PaneerPizza()
}
else {
    alert("Thank you for Visiting.")
}
}