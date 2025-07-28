/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// let person = true
let passengerAge = 45;
let student = true;
let elder = 49;
let price = 800;
let discountPrice = 800 - (800 * 0.15);
let discountPrice2 = 800 - (800 * 0.5);

if (passengerAge < 10) {
    console.log("Free of childrens");
} else if (student) {
    console.log(`${discountPrice2} ticket fare after 50% Discount`);
} else if (passengerAge >= 60) {
    console.log(`${discountPrice} ticket fare after 15% Discount`);
} else {
    console.log(`${price} is your ticket fare`)
}