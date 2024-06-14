// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoritetransport = [];
favoritetransport.push(["motorcycle", "Honda"]);
favoritetransport.push(["car", "toyota"]);
favoritetransport.push(["rikshaw", "superpower"]);
console.log(favoritetransport);
favoritetransport.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("i would like to own ".concat(brand, " , ").concat(transport));
});
// using FOR
var fav_transport = ["Car", "Motercycle", "Bus"];
for (var i = 0; i < 3; i++) {
    console.log(" i would like to own ".concat(fav_transport[i], " Transport"));
}
