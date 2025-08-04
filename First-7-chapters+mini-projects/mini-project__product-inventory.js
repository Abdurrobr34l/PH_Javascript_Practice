// *Mini Project: Simple Product Inventory App(It is completely done by chatgpt)
// ?🛒 Goal:
// ?You will build an app to 
// track products in a store,
// check stock levels,
// total value, and
// allow search by product name.

let inventory = [
  { name: "Shirt", price: 500, quantity: 4 },
  { name: "Pant", price: 800, quantity: 2 },
  { name: "Shoe", price: 1500, quantity: 0 },
  { name: "Watch", price: 1200, quantity: 1 }
];

// ✅ First & Second Task
let totalInventoryValue = 0;
console.log("✅ Available Products:");
for (let product of inventory) {
  let totalValue = product.price * product.quantity;
  if (product.quantity > 0) {
    console.log(`Name: ${product.name} | Price: ${product.price} | Quantity: ${product.quantity} | Total: ${totalValue}`);
    totalInventoryValue += totalValue;
  }
}
console.log(`\n🧾 Total Inventory Value: ${totalInventoryValue} Taka`);


// ✅ Third Task
let searchProduct = "Pant";
let found = false;

for (let product of inventory) {
  let productNameLowercase = product.name.toLowerCase();
  let searchNameLowercase = searchProduct.toLowerCase();

  if (productNameLowercase === searchNameLowercase) {
    found = true;
    console.log(`\n🔍 Product Found:`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Quantity: ${product.quantity}`);
    console.log(`Status: ${product.quantity > 0 ? "In stock" : "Out of stock"}`);
    break;
  }
}

if (!found) {
  console.log(`\n❌ Product '${searchProduct}' not found.`);
}
