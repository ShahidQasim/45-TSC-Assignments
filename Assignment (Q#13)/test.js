/*let fvt :string[] = [];
fvt.push("bike", "honda");
fvt.push("car", "civic");
console.log(fvt) */
var fvt = [];
fvt.push(["bike", "hnda"]);
fvt.push(["car", "civic"]);
fvt.push(["public", "rikshaw"]);
console.log(fvt);
fvt.forEach(function (_a) {
    var transprt = _a[0], brand = _a[1];
    console.log("i want ".concat(brand, ", ").concat(transprt));
});
//FOR LOOP//
var fvt1 = ["car", "motorcycl", "riksha"];
for (var i = 0; i < 3; i++) {
    console.log("i want ".concat(fvt1[i], " transport"));
}
