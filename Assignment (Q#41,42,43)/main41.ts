// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

const magiciansname : string[] = ["anthar","manthar","kala","kalanthar"]

    console.log("================================================")
    console.log(" print using FUNCTIONS")
    console.log("================================================")

function show_magicians(magicians) {

    console.log("================================================")
    console.log("using FOR-LooP")
    console.log("================================================")
 for (let i = 0; i < magicians.length; i++) {
    console.log(`he name of this magician is ${magicians[i]}`)
}
    console.log("================================================")
    console.log("using FOR-OF with sentence")
    console.log("================================================")
    for (const magic of magicians) {
        console.log("he name of this magician is", magic)
    }
    console.log("================================================")
    console.log("using FOR-OF with only names")
    console.log("================================================")
    for (const magic of magicians) {
        console.log(magic)
    }
    console.log("================================================")
    console.log("using MAP ")
    console.log("================================================")

    magicians.map(magic =>{console.log("he name of this magician is", magic) })
}
show_magicians(magiciansname)

    console.log("================================================")
    console.log(" print WIHOUT using FUNCTIONS with FOR-OF ")
    console.log("================================================")
for (const magic of magiciansname) {
    console.log("he name of this magician is", magic)
}


// /////////////print using FUNCTIONS without assigining separate variable///////////////////////////////////////////////////

//     console.log("================================================")
//     console.log(" print using FUNCTIONS without assigining separate variable")
//     console.log("================================================")

// function show_magicians(magicians) {

//     console.log("================================================")
//     console.log("using FOR-LooP")
//     console.log("================================================")
//  for (let i = 0; i < magicians.length; i++) {
//     console.log(`he name of this magician is ${magicians[i]}`)
// }
//     console.log("================================================")
//     console.log("using FOR-OF with sentence")
//     console.log("================================================")
//     for (const magic of magicians) {
//         console.log("he name of this magician is", magic)
//     }
//     console.log("================================================")
//     console.log("using FOR-OF with only names")
//     console.log("================================================")
//     for (const magic of magicians) {
//         console.log(magic)
//     }
// }
// show_magicians(["anthar","manthar","kala","kalanthar"])


///////////// ALTERNATE---print using FUNCTIONS without assigining separate variable///////////////////////////////////////////////////

// console.log("================================================")
// console.log(" print using FUNCTIONS without assigining separate variable")
// console.log("================================================")

// function show_magicians(magicians1 : string ,magicians2 :string ,magicians3 : string): void {

// console.log("the name of this magician is", magicians1)
// console.log("the name of this magician is", magicians2)
// console.log("the name of this magician is",magicians3)

// }
// show_magicians("anthar","manthar","kala") 



export{magiciansname}