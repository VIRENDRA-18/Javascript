let students = ["Virendra", "KumKum", "Anjali", "Ravi", "Amit"];
console.log(students);
 

// array are mutable
let Fruits = ["Apple", "Banana", "Mango"];
console.log(Fruits);
Fruits[1] = "Orange";
console.log(Fruits);

let players = ["Virat", "Rohit", "Dhoni", "Jadeja"];
console.log(players);
console.log(players.push("Bumrah", "Rana")); // add element at last
console.log(players);
console.log(players.pop()); // remove element from last
console.log(players);

console.log(players.unshift("Shami", "Bhuvi")); // add element at first
console.log(players);
console.log(players.shift()); // remove element from first
console.log(players);

//Practice Problem

let Months = ["january", "july", "march", "august", "october"];

console.log(Months);
console.log(Months.shift()); // remove first month
console.log(Months.shift());
console.log(Months.unshift("june"));// add june at first
console.log(Months.unshift("july"));
console.log(Months);