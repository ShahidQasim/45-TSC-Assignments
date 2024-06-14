/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favorite_fruits = ["banana", "mango", "apple"];
if (favorite_fruits[0] === "straw") {
    console.log("I know you like Banana");
}
else if (favorite_fruits[1] === "mango") {
    console.log("I know you like ".concat(favorite_fruits[1], " "));
}
else if (favorite_fruits[2] === "pear") {
    console.log("I know you like apple");
}
else {
    console.log("oopz you like nothing");
}
