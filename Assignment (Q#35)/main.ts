/* Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and 
then use a for loop to print out the name of each animal.
 • Modify your program to print a statement about each animal, 
 such as A dog would make a great pet.
  • Add a line at the end of your program stating what these animals have in common. 
  You could print a sentence such as Any of these animals would make a great pet! */

  let animal_names : string[] = ["Dog","Maynah","Cat"]
  console.log("===============================")
  console.log("Names of animals")
  console.log("===============================")
for (const animal of animal_names) {
    console.log(animal)
}
console.log("===============================")
  console.log("Characteristics of animals")
  console.log("===============================")
for (const animal of animal_names) {
    if (animal==="Dog"){
                console.log(`${animal} is loyal to Humans`)
    }
    if (animal==="Maynah"){
        console.log(`${animal} is also faithful`)
}
if (animal==="Cat"){
    console.log(`${animal}s are beautiful and loyal to Humans as well`)
}  

}
console.log("===============================")
  console.log("common thing in them")
  console.log("===============================")
console.log(`the most common charateristic among ${animal_names[0]},${animal_names[1]} and ${animal_names[2]} is faithfulnes`)
console.log("===============================")
  console.log("i recommend" + animal_names[1] + "as a pet")
  console.log("===============================")
