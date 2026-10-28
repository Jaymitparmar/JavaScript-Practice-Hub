
let num = +(prompt("Enter a number:"));
let  count = 0;

while (num > 0) {
    num = Math.floor(num / 10);
    count++;
}

document.write("Number ni length = " + count);