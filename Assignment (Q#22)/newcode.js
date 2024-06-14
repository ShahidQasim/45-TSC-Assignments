function autos(name, brand, model) {
    return {
        name: name,
        brand: brand,
        model: model,
    };
}
var vehicles = [
    autos("gaadi", "suzuki", 2000),
    autos("tanga", "toyota", 9900),
    autos("bike", "nisssan", 300),
    autos("vigo", "changan", 2300),
    autos("cruiser", "kia", 2001),
];
var index = 20; ////invalid index  (total index = 5)
console.log("car at ".concat(index, " : "), vehicles[index]);
console.log("total index ", vehicles.length);
//OR
console.log(vehicles[index]);
vehicles.forEach(function (cars) {
    console.log("name of car is ".concat(cars.name, ", brand of car is ").concat(cars.brand, ", model").concat(cars.model));
});
console.log(vehicles.length);
