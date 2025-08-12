//* MODULE-21 ER VIDEO NO.3 THE ENDING EI BOLSILO 2 PRACTICE THIS

/**
 * Shirt Price = 500
 * Pant Price = 300
 * Shoe Price = 900
*/

//? Find total money to buyed given number of items

function totalMoney(shirtQnt, pantQnt, shoesQnt) {
    let shirtPrice = 500;
    let pantPrice = 300;
    let shoePrice = 900;

    let totalMoney = (shirtPrice*shirtQnt) + (pantPrice*pantQnt) + (shoePrice*shoesQnt);
    return totalMoney;
}

totalMoney(2, 3, 2);
console.log(`Your total price is: ${totalMoney(2, 3, 2)}৳`);