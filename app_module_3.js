// string Methods in JavaScript

//Trim Method - It removes whitespace from both sides of a string

let msg = "    Hello  Virendra!           ";
console.log(msg.trim());

// Example of trim method

// let password = prompt("set your password");
// let NewPassword = password.trim();
// console.log(NewPassword);

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

//slice() Method - It extracts a section of a string and returns it as a new string

let country = "United States of America";
let NewCountry = country.slice(0,6); // extracts "United"s
let NewCountry1 = country.slice(-7); // extracts "America"
console.log(NewCountry1);
console.log(NewCountry);


//replace and repeat Methods in JavaScript

let Msg = "Hii Viru, How are you ?";
console.log(Msg);
console.log(Msg.replace("Viru","KumKum")); 
console.log(Msg.repeat(3));

let Website = "New-Look-Hub";
console.log(Website.repeat(2));

//Practice Question

//question 1;

let msg1 = "help!";
console.log(msg1.trim().toUpperCase());

//question 2;

let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));