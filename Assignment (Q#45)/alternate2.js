function makecar(manufacturer, model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        properties: properties
    };
    // for (const [key,value] of properties) {
    //     car[key]=value
    // }
    return car;
}
console.log(makecar("suzuki", "mehran  VX", ["color", "red"], ["speed", "120 km/hr"], ["tyre", "black"]));
//console.log(makecar("jksjk","s;djsk;"))
