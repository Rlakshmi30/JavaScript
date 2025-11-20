/*else-if statement: it will check the first
satatemnt first if its true then it will print it
but if its false it will check the second statement
and check the condition multiple time until the 
statemnt becomes true anf if never becomes true
then it will print the else statement*/
//let alpha = "a,e,i,o,u";
//let value = "5";
let value = "eye";
//let value = "P"
if (
    value === "a" ||
    value === "e" ||
    value === "i" ||
    value === "o" ||
    value === "u") {

    console.log("Vowels");
}

else if (value >= 0 && value <= 100) {
    console.log("Number");
}

/* If we want to input a string we have add
     on a condition i.e.:*/
else if (value.length > 1) {
    console.log("Word");

}

else {
    console.log("Consonant");

}
