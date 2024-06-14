// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, 
// return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that 
// you have one array of the original names and one array 
// with the Great added to each magician’s name.

const magiciansname : string[] = ["anthar","manthar","kala","kalanthar"]
const dupmagician : string[]  =[...magiciansname]

function show_magicians(prefix : string) {
    for (const item of dupmagician) {
        let Greataddition : string = `${prefix} ${item}\n`
        //return Greataddition;
        //console.log(`${prefix} ${item}\n`)
        console.log(Greataddition)
    }
    
};
show_magicians("Great")
console.log(magiciansname)




// let magiciansname : string[] = ["anthar","manthar","kala","kalanthar"];
// let dupmagician : string[]  =[...magiciansname];

// function show_magicians(prefix : string) {
//     let gr = "";
//     for (const item of dupmagician) {
//          gr += `${prefix} ${item}`;   //use += with \ in loos
//     }
//         return gr;
    
// };

// let withg : string  =  show_magicians("  Great");
// let mayarr  = withg.split("\n")
// console.log(mayarr)
//console.log(magiciansname)



////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let magiciansname : string[] = ["anthar","manthar","kala","kalanthar"];
// let dupmagician : string[]  =[...magiciansname];

// function show_magicians(prefix : string[]) {
//     let gr = "";
//     for (const item of dupmagician) {
//          gr += `${prefix} ${item} \n`;   //use += with \ in loos
//     }
//         return gr;
    
// };

// let withg : string  =  show_magicians(["Great"]);
// let mayarr  = withg.split("\n")
// console.log(mayarr)
// //console.log(show_magicians("great"))
// console.log(magiciansname)
export{}

