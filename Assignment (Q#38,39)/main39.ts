/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

function city_country(city,  country) : void {
    console.log(`${city},${country}`)
}

city_country("karachi","pakistan")
city_country("lahore","pakistan")
city_country("ghaza","falasteen")

//////ALTERNATE
console.log("============================")
console.log("ALTERNATE 1")
console.log("============================") 

function city_country1(city1,city2,city3,city4,country1,country2,country3) {

    console.log(`${city1},${country1}`)
    console.log(`${city2},${country2}`) 
    console.log(`${city3},${country3}`)
    console.log(`${city4},${country1}`)
}

city_country1("karachi","ghaza","delhi","lahore","pakistan","falasteen","india");

/////////////ALTERNATE  
console.log("============================")
console.log("ALTERNATE 2")
console.log("============================")

function city_country2(city,country) : string {

    return `${city}, ${country}`;   
}

let location1 = city_country2("khi","pk")
let location2 = city_country2("jeddah","Saudia")
let location3 = city_country2("quetta","pk")

console.log(location1)
console.log(location2)
console.log(location3)

////ALTERNATE 3
console.log("============================")
console.log("ALTERNATE 3")
console.log("============================")
function city_country3(city,country) : string {

    return `${city}, ${country}`;
}
console.log(city_country3("khi","pk"))
console.log(city_country3("jeddah","Saudia"))
console.log( city_country3("quetta","pk"))