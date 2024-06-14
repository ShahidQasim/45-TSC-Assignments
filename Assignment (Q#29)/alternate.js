/*

let favorite_fruits1 : string[] =["banana","mango","apple"]

if (favorite_fruits1.includes("banana")) {
    console.log("I know you like Banana")
}
if (favorite_fruits1.includes("mango")) {
    console.log("I know you like mango")
}
if (favorite_fruits1.includes("melon")) {
    console.log("oopz you like nothing")
}

*/
const favouriteFruit = ["apple", "banana", "mango"];
//check if the fruit in included in array or not
if (favouriteFruit.includes("apple")) {
    console.log(`Yes it is availabe in array  `);
}
if (favouriteFruit.includes("Orange")) {
    console.log(`Oh Ho it is NOT availabe in array  `);
}
if (favouriteFruit.includes("banana")) {
    console.log(`Yes it is availabe in array  `);
}
if (favouriteFruit.includes("mango")) {
    console.log(`Yes it is availabe in array  `);
}
if (favouriteFruit.includes("strabery")) {
    console.log(`it is NOT availabe in array  `);
}
