let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];

// let total = 0
// for(let i=0; i < cart.length; i++){
//     item = cart[i]
//     total += item.quantity * item.price
// }
// console.log(total) //60.82

//ALL ON ONE LINE !?!?!?!
console.log(cart.reduce( (total, o) => total + o.price * o.quantity, 0 ));

//compromise with forEach?
let total = 0;
cart.forEach(o => total += o.price * o.quantity )
console.log(total)

//multi step
subtotalList = cart.map(o=> o.price * o.quantity)
grand_total = subtotalList.reduce((running_total, n) => running_total + n, 0)
console.log(grand_total);

//chained
console.log( cart.map(o=> o.price * o.quantity).reduce((total, subtotal) => total + subtotal, 0) )


//hide the ugliness of reduce for sum into a function
function sum(list){
    return list.reduce((running_total, n) => running_total + n, 0)
}
console.log(sum([1,3,5])) //9

//using named sum functioin
subtotalList = cart.map(o=> o.price * o.quantity)
grand_total = sum(subtotalList)
console.log(grand_total);


// CAN REDUCE OUTPUT AN OBJECT?
//CRAZY convert the list to an object
dict = cart.reduce((d, o)=> {
    d[o.item] = o.price * o.quantity;
    return d
}, {})

// console.log(dict)

//print object's keys and values, sorted
function printObject(object){
    Object.keys(object).sort().forEach(key=>console.log(key, dict[key])); 
}

printObject(dict)
