// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoritetransport : Array< [transport : string , brand : string]> =[];
favoritetransport.push(["motorcycle" , "Honda"]);
favoritetransport.push(["car" , "toyota"]);
favoritetransport.push(["rikshaw" , "superpower"]);
console.log(favoritetransport)
favoritetransport.forEach(([transport , brand ])  => {console.log(`i would like to own ${brand} , ${transport}`)})

// using FOR
let fav_transport:string[] =["Car","Motercycle","Bus"];
for(let i=0;i<3;i++)
{
    console.log(` i would like to own ${fav_transport[i]} Transport`)
}
