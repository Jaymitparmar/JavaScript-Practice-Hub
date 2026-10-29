let a = +prompt("Enter Any Number:");

let b = a;
let c = 0;
let sum = 0;
let d = a;

// Count digits
while (d > 0) {
    c++;
    d = Math.floor(d / 10);
}

let p = c;

while (b > 0) {
    let e = b % 10;
    let power = 1;
    let i = 0;

    while (i < p) {
        power = power * e;
        i++;
    }

    sum = sum + power;
    b = Math.floor(b / 10);
    p--;
}

if (sum === a) {
    document.write(a + " is a Disarium number.");
} else {
    document.write(a + " is not a Disarium number.");
}

// Disarium number nested loop no upyoug 