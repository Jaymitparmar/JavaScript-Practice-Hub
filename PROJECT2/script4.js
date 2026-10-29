let num = +(prompt("Enter any number:"));
let a = 0;

if (num === 0) {
    a = 1;
} else {
    while (num !== 0) {
        num = Math.floor(num / 10);
        a++;
    }
}

document.write("Total number of digits: " + a);
// lenth find karvi