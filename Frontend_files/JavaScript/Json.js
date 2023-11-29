//JSON object
let details = {
    "name":"Noshitha",
    "age":21,
    "city":"Tirupati"

}
//convert it into the js object

converted_js_obj =JSON.stringify(details)
console.log(converted_js_obj)

// convert the JSON string into the js object
converted_js_obj =JSON.parse(converted_js_obj)
console.log(converted_js_obj)