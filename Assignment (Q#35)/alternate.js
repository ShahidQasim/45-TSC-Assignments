var animal_names = ["Dog", "Maynah", "Cat"];
console.log("===============================");
console.log("Names of animals");
console.log("===============================");
for (var i = 0; i < animal_names.length; i++) {
    console.log(animal_names[i]);
}
console.log("===============================");
console.log("Characteristics of animals");
console.log("===============================");
for (var i = 0; i < animal_names.length; i++) {
    if (animal_names[i] = "Dog") {
        console.log("".concat(animal_names[i], "  is loyal to Humans"));
    }
    if (animal_names[i] = "Maynah") {
        console.log("".concat(animal_names[i], " is a faithful"));
    }
    if (animal_names[i] = "Cat") {
        console.log("".concat(animal_names[i], "s are beautiful and loyal to Humans as well"));
    }
    //    break; 
}
console.log("===============================");
console.log("common thing in them");
console.log("===============================");
console.log("the most common charateristic among ".concat(animal_names[0], ",").concat(animal_names[1], " and ").concat(animal_names[2], " is faithfulnes"));
console.log("===============================");
console.log("i recommend" + animal_names[1] + "as a pet");
console.log("===============================");
