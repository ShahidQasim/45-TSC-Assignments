/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.  */
var marks = 20;
console.log(marks >= 90 ? "A+" : "see next time");
console.log(marks >= 85 && marks == 90 ? "A+" : false);
console.log(marks >= 75 && marks <= 84 ? "A" : "nil");
console.log(marks >= 65 && marks <= 74 ? "B" : "nil");
console.log(marks >= 55 && marks <= 64 ? "C" : "nil");
console.log(marks >= 45 && marks <= 54 ? "D" : "nil");
console.log(marks >= 35 && marks <= 44 ? "E" : "nil");
console.log(marks < 35 ? "F" : "nil");
console.log(marks != 90 ? true : false);
var fruit = "Banana";
console.log(fruit === "Banana" || fruit === "mango" ? true : false);
