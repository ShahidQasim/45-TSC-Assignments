//  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var mountains = ["K-2", "Everest", "parbat"];
console.log(mountains);
for (var hills in mountains) {
    console.log(mountains[hills]);
}
for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
    var hills = mountains_1[_i];
    console.log(hills);
    console.log("famous mountains are ".concat(hills));
}
/*  ALTERNATE
mountains : Array<string>  = ["K-2","Everest", "parbat"];
console.log(mountains)*/
