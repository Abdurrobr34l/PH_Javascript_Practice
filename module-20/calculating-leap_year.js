// *FINDING LEAP YEAR 
// !(It is not 100% accurate)
function leapYear(year) {

  if (year % 4 === 0) {
    return (year + " is a Leap Year");
  } else {
    return (year + " is not a Leap Year");
  }
}
// leapYear(2043);
console.log("This method is not 100% accurate(1))--------");
console.log(leapYear(1900));
console.log(leapYear(1996));
console.log(leapYear(2000));


// *FINDING LEAP YEAR 
// !(It is close to 100% accurate)
function leapYear2(year) {

  if (year % 4 === 0 && year % 100 !== 0) {
    return (year + " is a Leap Year");
  } else {
    return (year + " is not a Leap Year");
  }
}
// leapYear2(2043);
console.log("This method is close to 100% accurate(2))--------");
console.log(leapYear2(1900));
console.log(leapYear2(1996));
console.log(leapYear2(2000));


// *FINDING LEAP YEAR
// !(It is 100% accurate)
function leapYear3(year) {

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return (year + " is a Leap Year");
  } else {
    return (year + " is not a Leap Year");
  }
}

console.log("This method is 100% accurate(3)--------");
console.log(leapYear3(1900));
console.log(leapYear3(1996));
console.log(leapYear3(2000));