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

