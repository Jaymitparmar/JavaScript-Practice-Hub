
let num = +(prompt("Enter any number:"));

let lastDigit = num % 10;
let firstDigit = num;

while (firstDigit >= 10) {
    firstDigit = Math.floor(firstDigit / 10);
}

let sum = firstDigit + lastDigit;
document.write("The sum of the first and the last digit: " + sum);

