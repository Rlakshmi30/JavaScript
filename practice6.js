let i = 1;

do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 30);

let n = 5;
let fact = 1;

do {
    fact *= n;
    n--;
} while (n > 0);

console.log("Factorial =", fact);

