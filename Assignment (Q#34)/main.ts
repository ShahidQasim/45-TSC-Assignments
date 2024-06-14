/* Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

let Pizzas : string[]  = ["fatija","tikka","peproni"];
console.log("========================================")
for (let i = 0; i < Pizzas.length; i++) {
    console.log(Pizzas[i],"flaver")
    
}

console.log("========================================")
for (let i = 0; i < Pizzas.length; i++)  {

    console.log(`i like ${Pizzas[i]} pizza`) 
}
console.log("========================================")
for (const pizza of Pizzas) {

    console.log(`i like ${pizza} pizza`)   //case sensitive
}

console.log("========================================")

//using MAP function
console.log("using MAP function")
console.log("========================================")
Pizzas.map(pizza =>  {console.log(pizza)})
console.log("========================================")
Pizzas.map(pizza =>  {console.log(`i like ${pizza} pizza`)})
console.log("========================================")

const piza = Pizzas.map((poza)=> (poza==="fatija"? `i like ${poza} pizza` : poza))  //ALTERNATE

console.log(piza)
console.log("========================================")

console.log("i relly love pizza")

console.log("========================================")



