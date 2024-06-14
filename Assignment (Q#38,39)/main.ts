/* Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value.
 Call your function for three different cities, 
 at least one of which is not in the default country. */

 function describe_city (city, country="pakistan") : void {

    console.log(`${city} is in ${country}`)
 }

 describe_city("karachi")
 describe_city("lahore")
 describe_city("islamabad")

 describe_city("delhi", "india")

////ALTERNATE METHOD

function describe_city1(city1,city2,city3,country1,country2="Pakistan"){
console.log(`${city1} is in ${country2}`)
console.log(`${city2} is in ${country2}`)
console.log(`${city3} is in ${country1}`)

}

describe_city1("karachi","lahore","jeddah","Saudia");

