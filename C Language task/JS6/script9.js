
let num = +(prompt("Enter a number:"));
let  sum, rem;

while (num > 9) {
    sum = 0;

    while (num != 0) {
        rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10);
    }

    num = sum;
}

if (num === 1) {
    document.write("Magic Number");
} else {
    document.write("Not a Magic Number");
}
