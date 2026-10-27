
let n = +prompt("Enter Any Number:");

let temp = n;

while (n > 9) {
    let sum = 0;

    while (n != 0) {
        let rem = n % 10;
        sum = sum + rem;
        n = Math.floor(n / 10);
    }

    n = sum;
}

if (n == 1) {
    document.write(temp + " is Magic Number");
} else {
    document.write(temp + " is Not Magic Number");
}
