"use strict";
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */
Object.defineProperty(exports, "__esModule", { value: true });
exports.alien_color = void 0;
exports.alien_color = "red";
if (exports.alien_color === "green") {
    console.log("you earned 5 points");
}
if (exports.alien_color === "yellow") {
    console.log("you earned 10 points");
}
if (exports.alien_color === "red") {
    console.log("you earned 15 points");
}
// ALTERNATE 
/*if (alien_color==="green") {
    console.log("you earned 5 points") }
else if (alien_color!="green"){
    console.log("Game Over")
}  */
