/* Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
var Pizzas = ["fatija", "tikka", "peproni"];
console.log("========================================");
for (var i = 0; i < Pizzas.length; i++) {
    console.log(Pizzas[i], "flaver");
}
console.log("========================================");
for (var i = 0; i < Pizzas.length; i++) {
    console.log("i like ".concat(Pizzas[i], " pizza"));
}
console.log("========================================");
for (var _i = 0, Pizzas_1 = Pizzas; _i < Pizzas_1.length; _i++) {
    var pizza = Pizzas_1[_i];
    console.log("i like ".concat(pizza, " pizza")); //case sensitive
}
console.log("========================================");
//using MAP function
console.log("using MAP function");
console.log("========================================");
Pizzas.map(function (pizza) { console.log(pizza); });
console.log("========================================");
Pizzas.map(function (pizza) { console.log("i like ".concat(pizza, " pizza")); });
console.log("========================================");
var piza = Pizzas.map(function (poza) { return (poza === "fatija" ? "i like ".concat(poza, " pizza") : poza); });
console.log(piza);
console.log("========================================");
console.log("i relly love pizza");
console.log("========================================");
var pizza_names = ["Greek Pizza", "Detroit Pizza", "Neapolitan Pizza"];
//  print names of pizza list
//pizza_names.map((value)=>(console.log(value)))
var pizza_list = pizza_names.map(function (value) { return (value == "Greek Pizza" ? "i like ".concat(value) : value); });
//console.log(pizza_list);
