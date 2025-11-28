// do while:
let num = 1;

do {
    if (num % 2 === 0) {
        console.log(num, "Even");
    } else {
        console.log(num, "Odd");
    }
    num++;
} while (num <= 10);


let num2 = 1234;

do {
    console.log(num2 % 10);
    num2 = Math.floor(num2 / 10);
} while (num2 > 0);


let i4 = 1;

do {
    console.log(`5 x ${i4} = ${5 * i4}`);
    i4++;
} while (i4 <= 10);
