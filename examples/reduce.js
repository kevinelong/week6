
let numbers = [1, 2, 3];

function getSum(runningTotal, freshValue) {
    // adds the array value to the accumulated total 
    return runningTotal + freshValue; 
}

let sum = numbers.reduce(getSum, 1000); //second param is initial runningTotal

console.log(sum) // 6

let kids = [ { first : "Natalie", last : "Plyers" }, { first: "Brittany", last: "Ray" }, { first: "Zachary", last: "Westly" } ];

function getInitials(soFar, person) {
    // adds the array value to the accumulated total 
    return soFar + person.first[0] + person.last[0]; 
}

let initials = kids.reduce(getInitials, ""); //second param is initial value

console.log(initials) // "NPBRZW"

//////
let ticketPackage = [
    {ticketType: "Senior", price: 9.99, numTickets: 10},
    {ticketType: "Adult", price: 29.99, numTickets: 20},
    {ticketType: "Child", price: 19.99, numTickets: 30}
];

// function getTotalCost(currentTotal, arrayElement) { 
//     return currentTotal + (arrayElement.price * arrayElement.numTickets); 
// }
// console.log( ticketPackage.reduce(getTotalCost, 0) );
    // sum contains 299.94

//ALL IN ONE LINE !?!?!?!
console.log( ticketPackage.reduce( (r, e) => r + (e.price * e.numTickets), 0) );

// Array.reduce - converts a array/list into a single output value e.g. total