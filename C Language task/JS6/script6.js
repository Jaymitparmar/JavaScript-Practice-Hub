let n = +prompt("Enter Any Number:");

let temp = n;
let rev = 0;

while (n != 0) {
    let rem = n % 10;

    rev = rev * 10 + rem;

    n = Math.floor(n / 10);
}

document.write("Original Number: " + temp + "<br>");
document.write("After Reverse: " + rev);
