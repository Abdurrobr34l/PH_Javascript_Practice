//* This questions are practiced from this repo - https://github.com/ismailjosim/js-basic-concept.git (Conceptual Session er practice task)

//* Problem 01:
//* ===========
// // A seat planner needs to be created for a new cinema hall. The seats in this cinema hall are designed in such a way that if the seat number is divisible by 3 or 5 and there is no remainder then it will be considered as a 'premium' seat. That is, if the seat number is 1 then it will be a normal seat, if the seat number is 3/5 then it will be a premium seat.

// // Problem: Your task is to write a program that takes the total number of seats (totalRows) and prints for each seat whether it is a 'Normal Row' or a 'Premium Row'. Row 1 - Normal Row, Row 4 - Premium Row

// // ADVANCED: If the seat is normal then the prize will be 500 Taka and if it is premium seat then the prize will be 800 Taka. You have to calculate how much total income will be earned in one show e.g. Total Income: 5000 Taka


// let seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let normalSeatPrice = 0;
// let premiumSeatPrice = 0;

// for (let seat of seats) {
//   // console.log(seat);

//   if (seat % 3 === 0 || seat % 5 === 0) {
//     premiumSeatPrice += 800;
//     console.log(`Row ${seat} - Premium Row:`)
//   } else {
//     normalSeatPrice += 500;
//     console.log(`Row ${seat} - Normal Row:`)
//   }

// }

// // console.log(`Normal Seat Total: ${normalSeatPrice}`);
// // console.log(`Normal Seat Total: ${premiumSeatPrice}`);
// console.log(`Total Income: ${normalSeatPrice + premiumSeatPrice}`);


//* Problem 02: Product Tagging
//* ===========
// // For an online store, you need to write a program (productDescription) that takes (string) input and automatically adds some tags (Tags) based on the product details. For example:

// // details
// // If the word "cotton" is in the details, then the program will output "Material: Cotton".
// // If the word "sale" is in the details, the program will output "Category: Sale Item".
// // If the details contain the word "new arrival", the program will output "Status: New Arrival".
// // If the details contain the phrase "limited edition", the program will output "Availability: Limited".
// // If none of the conditions are met, a default tag "Tag: General" is used.

// // ADVANCED: Handle case insensitively.

// let productDescription = "This is a limited edition cottons shirt on sale";
// let productLowerCase = productDescription.toLocaleLowerCase();
// let words = productLowerCase.split(/\W+/);
// let found = false;

// console.log(productLowerCase)
// console.log(words)


//   if (words.includes("cotton")) {
//     console.log(`Tag: Cotton`);
//     found = true;
//   } if (words.includes("sale")) {
//     console.log(`Tag: Sale`);
//     found = true;
//   } if (productLowerCase.includes("new arrival")) {
//     console.log(`Tag: New Arrival`);
//     found = true;
//   } if (productLowerCase.includes("limited edition")) {
//     console.log(`Tag: Limited Edition`);
//     found = true;
//   }

// if (!found) {
//   console.log(`Tag: General`);
// }


//* Problem 03:
// // A new company, "AlphaCorp", wants to automatically generate a unique employee username for its employees to access their database. This username will be based on some of the employees' personal information.

// // You need to write a program that takes an object named employee as input, where the employee information will be as follows:
// // { firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" }

// // // Output:
// // username: doe101@alphacorp.com

// // Rules:
// // 👉 First, the first three letters of lastName will be lowercase.
// // 👉 Then it will be employeeId.
// // 👉 Next will be @
// // 👉 From now on, the company name will be in lowercase.
// // 👉 The last one will be .com.



// // ADVANCED: Creates a temporary password along with the username.
// // 👉 If lastName is less than three characters, then all characters of lastName will be used.
// // 👉 for Password generate use firstname last 3 char + # + departmentCode

// // Output:
// // ID: doe101@alphacorp.com, TempPass: jn1#AC

// let employee = { firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" };
// let companyName = "AlphaCorp";

// let cNameLower = companyName.toLowerCase();
// // console.log(cNameLower);

// let employeLastName = employee.lastName.slice(0, 3).toLowerCase();
// // console.log(employeLastName);

// // ? First Task
// let employeeEmail = `ID: ${employeLastName}${employee.employeeId}@${cNameLower}.com`
// console.log(employeeEmail);

// // ? Advance Task
// if (employee.lastName.length <= 3) {
//   console.log(`TempPass: ${employee.lastName}#${employee.departmentCode}`);
// } else {
//   console.log("Last Name Characters are more then 3")
// }