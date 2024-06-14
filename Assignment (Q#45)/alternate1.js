/* Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly. */
var carobject = {
    carname: "suzuki",
    carnumber: 893
};
function makecar(carobject) {
    return " car colour: ".concat(carobject.color, " ,car brand: ").concat(carobject.brand);
}
console.log("================================================================");
console.log("specific object print");
console.log("================================================================");
console.log(carobject.carname, carobject.carnumber); ///////specific print
console.log("================================================================");
console.log("general object print");
console.log("================================================================");
console.log(carobject); ////general object print
console.log("================================================================");
console.log(makecar({ color: "blue", brand: "mehran" }));
console.log("================================================================");
/////////////////////////////////////////////////////////////////////////
///using simple function//////////////////////////////////
//  function makecar1(color : string,  brand : string) :string {
//     return  ` car colour: ${color} ,car brand: ${brand}`
//  }
//  console.log(carobject)  ////general object print
//  //console.log(carobject.carname, carobject.carnumber)   ///////specific print
//  console.log(makecar1( "blue","mehran"))
