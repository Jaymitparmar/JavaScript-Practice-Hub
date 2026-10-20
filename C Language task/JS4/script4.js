let a = +(prompt("Enter Value of A"))
console.log("Before A=",a);

let b = +(prompt("Enter Value of B"))
console.log("Before B=",b);

a=a+b;
b=a-b;
a=a-b;

console.log("After A=",a);
console.log("After B=",b);