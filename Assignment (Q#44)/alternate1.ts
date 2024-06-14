// //Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call 
//  provides, and it should print a summary of the sandwich that is being ordered. 
//  Call the function three times, using a different number of arguments each time.

function sandwich(...itemlist : string[])    {    ///geting items in array form  so   ...
    console.log("sandwitch ordered with following items:")
    if (itemlist.length===0) {
        console.log(" you odered khaali Duoble roti ")
    }
 else {
    itemlist.forEach((value,index)=> {console.log(`${index + 1} ${value}`)}); ///0 is assigned to khaali sandwitch
    //console.log(` ${itemlist}`)

}
}
// sandwich();
// sandwich("cheese","ketchup","mayonese");
// sandwich("chilli","garlic","mayonese")
 sandwich("egg","sauce","mayonese")

