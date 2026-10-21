let a = +(prompt("Enter a value of the first number:"))
let b = +(prompt("Enter a value of the second number:"))
let c = +(prompt("Enter a value of the third  number:"))

if (a < b) {
    if (a < c) {
        console.log("The minimum value is :", a);

    } else {
        console.log("The minimum value is :", c);
    }

} else {
    if (b < c) {
        console.log("The minimum value is :", b);
    }
    else {
        console.log("The minimum value is :", c);
    }
}