// //Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call 
//  provides, and it should print a summary of the sandwich that is being ordered. 
//  Call the function three times, using a different number of arguments each time.
function sandwich() {
    var itemlist = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itemlist[_i] = arguments[_i];
    }
    console.log("sandwitch ordered with following items:");
    if (itemlist.length === 0) {
        console.log(" you odered khaali Duoble roti ");
    }
    else {
        itemlist.forEach(function (value, index) { console.log("".concat(index + 1, " ").concat(value)); }); ///0 is assigned to khaali sandwitch
        //console.log(` ${itemlist}`)
    }
}
// sandwich();
// sandwich("cheese","ketchup","mayonese");
// sandwich("chilli","garlic","mayonese")
sandwich("egg", "sauce", "mayonese");
