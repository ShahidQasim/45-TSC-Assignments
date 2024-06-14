/*
let fiveplaces : string[] = ["Centrum", "Broadway","Atlanta","EiffelTower","Dutch"];

function sortingalpha(location:string[] ,  order:number) : string[] {

if (order===0) {
    return [...location].sort()

} else {
    return [...location].reverse()
}
}

console.log(fiveplaces)

console.log(sortingalpha(fiveplaces,0))

console.log(fiveplaces)
//let e= sortingalpha(fiveplaces,1)          //// ALSO CORRECT
//console.log(e)                            //// ALSO CORRECT
console.log(sortingalpha(fiveplaces,1))
console.log(fiveplaces)
console.log(Object.keys(sortingalpha(fiveplaces,1)).reverse())   /// direct put without letting
//console.log(Object.keys(e).reverse())   //// ALSO CORRECT
//console.log(object.keys(e).reverse())
console.log(Object.keys(fiveplaces))
export{}   */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Karachi", "Lahore", "Islamabad", "Swat", "Kalam"];
//  form create a new array copies
//let e =Array.from(places);
//  sorted function 
function sortalphabet(location, order) {
    if (order === 0) {
        return __spreadArray([], location, true).sort();
    }
    else {
        return __spreadArray([], location, true).sort().reverse();
    }
}
// without sorting alphabet
console.log(places);
//  with sort
console.log(sortalphabet(places, 0));
//   Show that your array is still in its original order by printing it.
console.log(places);
//  reverse alphabet
var e = sortalphabet(places, 1);
console.log(e);
//  print original array 
console.log(places);
// 
console.log(Object.keys(e).reverse());
console.log(Object.keys(places));
