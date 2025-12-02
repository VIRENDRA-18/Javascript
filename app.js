console.log("Hello Virendra !");
console.log("Welcome to JavaScript Programming");

let num1 = 4;
let num2 = 5;

let sum = num1 + num2;
console.log("The sum of two number is " , sum);

// Template Literals
// --- They are used to add embedded expressions in string ---
// --- They are enclosed by backticks `` ---
let ShirtPrice =  500;
let PentPrice = 650;
let TotalPrice = `The total price of shirt and pent is : ${ShirtPrice + PentPrice} rupees`;
console.log(TotalPrice);


//Arthmetic Operators in JavaScript
let a = 10;
let b = 5;
console.log("The value of a + b is : " , a + b);
console.log("The value of a - b is : ", a - b);
console.log("The value of a * b is : ", a * b);
console.log("The value of a / b is : ", a / b);
console.log("The value of a % b is : ", a % b);
console.log("The value of a ** b is : ", a ** b); //Exponentiation Operator


// Unary Operators
let c = 10;
c++;
console.log("The value of c is : ", c);

let age = 18;
console.log(age<=18);