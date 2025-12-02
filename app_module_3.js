// string Methods in JavaScript

//Trim Method - It removes whitespace from both sides of a string

let msg = "    Hello  Virendra!           ";
console.log(msg.trim());

// Example of trim method

let password = prompt("set your password");
let NewPassword = password.trim();
console.log(NewPassword);

//toUpperCase() Method - It converts string to uppercase letters
//toLowerCase() Method - It converts string to lowercase letters

let Name = "Virendra Singh";
console.log(Name);
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

//indexOf() Method - It returns the index of the first occurrence of a specified text in a string
let fruit = "Apple Banana Mango Orange Apple";
let index = fruit.indexOf("Mango");
let index1 = fruit.indexOf("na");
console.log( index);
console.log( index1);


//method chainning in JavaScript
let city = "     New Delhi     ";
// let NewCity = city.trim();
// console.log("After trim :",NewCity);
// NewCity = NewCity.toUpperCase();
// console.log("After UpperCase :",NewCity);

//Method chainning
let NewCity = city.trim().toUpperCase();
console.log("After method chainning :",NewCity);