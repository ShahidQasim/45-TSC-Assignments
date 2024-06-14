//  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains : string[]  = ["K-2","Everest", "parbat"];
console.log(mountains)

// IN DIFFERENT LOOPS FORM //
for (let hills in mountains){
console.log(mountains[hills])
}

for (let hills of mountains){
    console.log(hills)
    console.log(`famous mountain is ${hills}`)
    } 


    /*  ALTERNATE 
    mountains : Array<string>  = ["K-2","Everest", "parbat"];   
    console.log(mountains)*/

