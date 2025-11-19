// Arithmetic Operators:
let a = 5;
let b = 30;
let c = 9;
console.log("a =", a, " & b =", b);

console.log("a + b =", a + b);// + (increment/Sum):
console.log("b - a =", b - a);// - (decrement/substraction): 
console.log("a * b =", a * b);// * (multiplication):
console.log("b / a =", b / a);// / (division):
console.log("b % c =", b % c);// % (modulus (remainder)):
console.log("a to the power c", a ** c);// **(exponential)

//Unary Operators:
a = a + 1;
b++;//b is incremented by 1
/* Here if we write b=b++ then the b resturns the actuall value
to it self then assigns the value which will be same of
the value assined by us so we need yo write b=++b
or only b++ to get the incremented value,*/
b = ++b;//The incremented value adds up 1 more then assigns the value back to b.
c = c - 1;//c is decremented by 1
c--;//c becomes 7 from c-1 output
console.log("a = ", a);
console.log("b = ", b);
console.log("b = ", b);
console.log("c = ", c);
console.log("c = ", c);
/* so bsically the post-increment(a++) tells that 
first it will return the actuall value the increments 
it so if we print it in another line then it will be 
an incremeted value. Whereas Pre-increment return the 
incremented value first then it assign to the var so 
only incre,ented value will be printed.  */

// Assignment Operators:
let x = 5;
let y = 6;
let z = 7;
let s = 8;
let i = 18;
let g = 5;
x += 4;
y -= 3;
z *= 5;
y /= 3;
s /= 4;
i %= 8;
g **= 2;
console.log("x += ", x);//No space b/w +=;
console.log("y -= ", y);
console.log("z -= ", z);
console.log("y -= ", y);// here it is dividing by the value that is assigned to y after decrement.
console.log("s /=", s);
console.log("i %=", i);
console.log("g **=", g);

// Comparison Operators:
let p = 5;// number
let q = 7;
let r = "6";// string
console.log("5==7", p == q);
console.log("5!=7", p != q);
console.log("p===r", p === r);
console.log("p!==r", p !== r);
console.log("q>p", q > p);

//Logical Operators:
let cond1 = p < r;// In && if both is true then output is true
let cond2 = r > q;//In || if one is true then output is true
console.log("cond1 && cond2:", cond1 && cond2);
console.log("cond1 && cond2:", cond1 || cond2);
console.log("!(q<p)", !(q < p));






















