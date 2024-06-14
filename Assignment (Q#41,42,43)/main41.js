"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.magiciansname = void 0;
var magiciansname = ["anthar", "manthar", "kala", "kalanthar"];
exports.magiciansname = magiciansname;
console.log("================================================");
console.log(" print using FUNCTIONS");
console.log("================================================");
function show_magicians(magicians) {
    console.log("================================================");
    console.log("using FOR-LooP");
    console.log("================================================");
    for (var i = 0; i < magicians.length; i++) {
        console.log("he name of this magician is ".concat(magicians[i]));
    }
    console.log("================================================");
    console.log("using FOR-OF with sentence");
    console.log("================================================");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magic = magicians_1[_i];
        console.log("he name of this magician is", magic);
    }
    console.log("================================================");
    console.log("using FOR-OF with only names");
    console.log("================================================");
    for (var _a = 0, magicians_2 = magicians; _a < magicians_2.length; _a++) {
        var magic = magicians_2[_a];
        console.log(magic);
    }
    console.log("================================================");
    console.log("using MAP ");
    console.log("================================================");
    magicians.map(function (magic) { console.log("he name of this magician is", magic); });
}
show_magicians(magiciansname);
console.log("================================================");
console.log(" print WIHOUT using FUNCTIONS with FOR-OF ");
console.log("================================================");
for (var _i = 0, magiciansname_1 = magiciansname; _i < magiciansname_1.length; _i++) {
    var magic = magiciansname_1[_i];
    console.log("he name of this magician is", magic);
}
