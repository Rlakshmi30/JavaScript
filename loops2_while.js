let n = 786;
let count = 0;

while (n > 0) {
    n = Math.floor(n / 10);
    count++;
}

console.log("Digits:", count);
console.log("");


let i = 1;
let sum = 0;

while (sum <= 20) {
    console.log(i);
    sum += i;
    i++;
}
console.log("");


let i2 = 1;

while (i2 <= 20) {
    if (i2 % 3 === 0) {
        console.log(i2, "Divisible by 3");
    } else {
        console.log(i2, "Not divisible");
    }
    i2++;
}


