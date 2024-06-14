var Tshirt = function make_shirt(text, size) {
    return "".concat(text, ", ").concat(size);
};
console.log(Tshirt("medium", "go out for falastine")); //OR
console.log("medium", "go out for falastine");
/////////////////////////ALTERNATE -2
function make_shirt(text, size) {
    return "" + text + "" + size; //OR
    //return `${text}, ${size}`
}
console.log("medium", "go out for falastine");
//////////////////////////////ALTERNATE ----3
function make_shirt2(text, size) {
    console.log("size  : ".concat(text, " text : ").concat(size));
}
var text = "go go";
var size = "large";
make_shirt2(text, size);
