/* Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

console.log("FOR GREEN")

let alien_color : string = "green"
if (alien_color==="green") {
    console.log("you just earned 5 points")
}
else if (alien_color==="red") {
    console.log("you just earned 10 points")
} else if (alien_color ==="white") {
    console.log("you just earned 15 points")
}
else {
    console.log("game over")
}


console.log("FOR RED")

alien_color = 'red'
if (alien_color==="green") {
    console.log("you just earned 5 points")
}
else if (alien_color==="red") {
    console.log("you just earned 10 points")
} else if (alien_color ==="white") {
    console.log("you just earned 15 points")
}
else {
    console.log("game over")
}


console.log("FOR WHITE")
alien_color = 'white'
if (alien_color==="green") {
    console.log("you just earned 5 points")
}
else if (alien_color==="red") {
    console.log("you just earned 10 points")
} else if (alien_color ==="white") {
    console.log("you just earned 15 points")
}
else {
    console.log("game over")
}


console.log("FOR GREY")
alien_color = 'grey'
if (alien_color==="green") {
    console.log("you just earned 5 points")
}
else if (alien_color==="red") {
    console.log("you just earned 10 points")
} else if (alien_color ==="white") {
    console.log("you just earned 15 points")
}
else {
    console.log("game over")
}
