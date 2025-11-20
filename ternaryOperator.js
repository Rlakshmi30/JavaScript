/*Ternary operators: if we have a short conditional
 statement then we should use this otherwise we 
 should use if-else statements.*/
let weather = "Winter";
decision = weather == "Winter" || weather == "Monsoon" ?
    "Cannot eat Icecream" : "Can eat Icecream";
console.log(decision);

/* can also be written as:
decision = weather == "Winter" ||
    weather == "Monsoon" ?
    console.log("Cannot eat Icecream") :
    console.log("Can eat ice cream")*/


let age = 14;
result = age > 18 ? "Adult" : "Minor";
console.log(result);
