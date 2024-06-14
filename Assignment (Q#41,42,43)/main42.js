// // Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
var magiciansname = ["anthar", "manthar", "kala", "kalanthar"];
//import { magiciansname } from "./main41"   //for,  same as above ////
console.log("================================================");
console.log("using FOR-LooP");
console.log("================================================");
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log("\"The Great !!! ".concat(magician[i]));
    }
    console.log("================================================");
    console.log("using FOR- of-LooP");
    console.log("================================================");
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var magic = magician_1[_i];
        console.log("\"The Great !!! ".concat(magic));
    }
    console.log("================================================");
    console.log("using MAP ");
    console.log("================================================");
    magician.map(function (jadu) { console.log("\"The Great !!! ".concat(jadu)); });
}
make_great(magiciansname);
//ALTERNATE   FOR ABOVE///////////////////////////////////////////////////////////////////
// const magiciansname : string[] = ["anthar","manthar","kala","kalanthar"]
// let Great : string[] ;
// function make_great(magic : string[]) {
//     Great = magic.map(jadoo=>(`"Great ${jadoo}`))  //different here, not to consol because of Great = declaratio
//     return Great;
// }
//  console.log(make_great(magiciansname))
