nest_arr = [[1,2,3,4],[5,6,7,8]]
total_bill = 0 
for (let index = 0; index < nest_arr.length; index++) {
    arr1 = nest_arr[index];
    item_name = arr1[arr1.length-4]
    quantity =  arr1[arr1.length-3]
    price = arr1[arr1.length-2]
    total =arr1[arr1.length-1]
    total_bill +=arr1[arr1.length-1] 
}

console.log(nest_arr,total_bill)