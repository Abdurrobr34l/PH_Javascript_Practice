//* MODULE-21 ER VIDEO NO.4 ER ENDING EI BOLSILO 2 PRACTICE THIS

const products = [
    { name: 'Samsung', price: 20000, camera: "12mp", color: "Black" },
    { name: 'Xoami', price: 18000, camera: "12mp", color: "Black" },
    { name: 'Oppo', price: 30000, camera: "12mp", color: "Black" },
    { name: 'Apple', price: 100000, camera: "12mp", color: "Black" },
    { name: 'Walton', price: 310000, camera: "12mp", color: "Black" },
    { name: 'HTC', price: 27000, camera: "12mp", color: "Black" }
];

function cheapestPhone(phones) {
    // console.log(phones);
    let lessPrice = phones[0].price
    let lessPricePhoneName;
    for (const phoneInfo of phones) {
        let phonePrice = phoneInfo.price;
        let phoneName = phoneInfo.name;
        // console.log(phonePrice));
        if (phonePrice < lessPrice) {
            lessPrice = phonePrice
            lessPricePhoneName = phoneName
        }
    }
return {lessPricePhoneName, lessPrice}
}

let cheapest = cheapestPhone(products);
console.log(`Cheapest phone: ${cheapest.lessPricePhoneName}, Price: ${cheapest.lessPrice}৳`);