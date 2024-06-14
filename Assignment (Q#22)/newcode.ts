
function autos(name : string , brand : string , model : number )  {

    return {
        name,
        brand,
        model,
    }
}

let vehicles = [  
     autos("gaadi","suzuki",2000),
     autos("tanga","toyota",9900),
     autos("bike","nisssan",300),
     autos("vigo","changan",2300),
     autos("cruiser","kia",2001),

];

const index = 20;  ////invalid index  (total index = 5)
console.log(`car at ${index} : `, vehicles[index])

console.log( "total index ",vehicles.length)
//OR
console.log( vehicles[index])

vehicles.forEach(cars => { console.log(`name of car is ${cars.name}, brand of car is ${cars.brand}, model${cars.model}`)
    
});





