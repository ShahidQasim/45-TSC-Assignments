"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sandwich = ["mayonese", "egg", "vegetable", "sauce", "garlic"];
// const slist = function (...list : string[]) : string [] {
//  return list.sort()
// }
function slist() {
    var list = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
    }
    return list.sort();
}
console.log(" ".concat(slist.apply(void 0, sandwich))); ////in list form
console.log(slist.apply(void 0, sandwich)); ////in array form
console.log(slist("chicken", "meat", "tikka"));
