let num = +(prompt("Enter a number:"));

while (num >= 10) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    num = sum;
}

document.write("Final: " + num);
