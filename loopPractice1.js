//Print numbers 1 to 10 using a for loop:
for (let i = 1; i <= 10; i++) {
    console.log(i)

}
console.log("");

//Even Numbers:
for (let evenNum = 2; evenNum <= 50; evenNum += 2) {
    console.log(evenNum)
}
console.log("");

//Odd Numbers:
for (let oddNum = 1; oddNum <= 50; oddNum += 2) {
    console.log(oddNum)
}
console.log("");

//Sum of Digits:
let num = 0;
for (let sum = 1; sum <= 10; sum++) {
    num = sum + num;
}
console.log(num);
console.log("");


//Table of 5:
let num2 = 0;
for (let prod = 1; prod <= 10; prod++) {
    num2 = 5 * prod;
    console.log(num2);
}
console.log("");


//Reverse 10 to 1:
for (let x = 10; x >= 1; x--) {
    console.log(x);
}
console.log("");

//Num divisible by 3

for (let div = 1; div <= 50; div++) {
    if (div % 3 == 0) {
        console.log(div);

    }
}
console.log(" ");

// reverse a number:
let digits = 4567;
let rev = 0;
for (i = 1; i <= 4; i++) {
    let num4 = digits % 10;
    rev = rev * 10 + num4;
    digits = (digits - num4) / 10;
}
console.log(rev);

//Square of nums:
//let num5;
for (i = 1; i <= 10; i++) {
    // num5 = i ** i;

    console.log(i * i);
}

//Length of a number:
let num6 = 917832441;
if (num6 == 0) {
    console.log(1);

} else {
    for (let i = 0; num6 > 0; i++) {
        num6 = (num6 - (num6 % 10)) / 10;
        if (num6 == 1) {
            console.log(i + 1);

        }
    }
}




