"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, 
// return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that 
// you have one array of the original names and one array 
// with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var magiciansname = ["anthar", "manthar", "kala", "kalanthar"];
var dupmagician = __spreadArray([], magiciansname, true);
function show_magicians(prefix) {
    for (var _i = 0, dupmagician_1 = dupmagician; _i < dupmagician_1.length; _i++) {
        var item = dupmagician_1[_i];
        var Greataddition = "".concat(prefix, " ").concat(item, "\n");
        //return Greataddition;
        //console.log(`${prefix} ${item}\n`)
        console.log(Greataddition);
    }
}
;
show_magicians("Great");
console.log(magiciansname);
