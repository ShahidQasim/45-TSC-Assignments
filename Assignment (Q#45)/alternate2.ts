
function makecar(manufacturer : string, model  : string, ...properties :[string , any][]) : any {

    const car :  any ={
        manufacturer,
        model,
        properties
 }
    for (const [key,value] of properties) {
        car[key]=value
    }
    return car
}




console.log(makecar("suzuki","mehran  VX", ["color", "red"],["speed", "120 km/hr"],["tyre", "black"]))

//console.log(makecar("jksjk","s;djsk;"))


///////////////////////////////////
//////////////////////////////////without FOR loop

// function makecar(manufacturer : string, model  : string, ...properties :[string , any][]) : any {

//     const car :  any ={
//         manufacturer,
//         model,
//         properties
//  }
//     return car
// }

// console.log(makecar("suzuki","mehran  VX", ["color", "red"],["speed", "120 km/hr"],["tyre", "black"]))