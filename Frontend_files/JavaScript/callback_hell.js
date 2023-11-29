
setInterval(() => {
    console.log("First Interval")
    setInterval(() => {
        console.log("Second Interval")
    }, 3000)
}, 5000)