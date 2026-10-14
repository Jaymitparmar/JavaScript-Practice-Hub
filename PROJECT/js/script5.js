
let a = prompt("Enter student name:");
console.log("Student Name:", a);

let b = Number(prompt("Enter student English marks:"));
let c = Number(prompt("Enter student Gujarati marks:"));
let d = Number(prompt("Enter student Hindi marks:"));
let e = Number(prompt("Enter student Sanskrit marks:"));
let f = Number(prompt("Enter student Science marks:"));

console.log("English:", b);
console.log("Gujarati:", c);
console.log("Hindi:", d);
console.log("Sanskrit:", e);
console.log("Science:", f);

let g = b + c + d + e + f;
console.log("TOTAL MARKS:", g);

let p = (g / 500) * 100;
console.log("Percentage:",  +p );
