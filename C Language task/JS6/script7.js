
let n = +prompt("Enter Any Number:");

let temp = n;
let sum = 0;

while (n != 0) {
    let rem = n % 10;

    sum = sum + (rem * rem * rem);

    n = Math.floor(n / 10);
}

if (sum == temp) {
    document.write(temp + " is Armstrong Number");
} else {
    document.write(temp + " is Not Armstrong Number");
}
