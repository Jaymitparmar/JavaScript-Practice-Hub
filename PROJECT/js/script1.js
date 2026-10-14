
let a = Number(prompt("Enter Base Salary:"));

let b = Number(prompt("Enter HRA (%):"));

let c = Number(prompt("Enter DA (%):"));

let d = Number(prompt("Enter TA (%):"));

b = a * b / 100;
c = a * c / 100;
d = a * d / 100;

let x = a + b + c + d;

console.log("Gross Salary = Rs. " + x);
