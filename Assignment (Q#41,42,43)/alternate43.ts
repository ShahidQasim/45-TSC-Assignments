

// const comment : string[] =  ["great"," Loser", "great","lappu"]


// let magiciansname1 : string[] = ["anthar","manthar","kala","kalanthar"]

// function showfunction() 
// {
//     const combine =   magiciansname1.map((value, index)=>(`${value} ${comment[index]}`))
//     return combine;
// }

// console.log(showfunction())

/////////////////////////////// alternate shortcut if filling same///////////////////////////////////
console.log("================================================")
console.log(" print using FUNCTIONS")
console.log("================================================")

const comment : string[] =  Array(4)
comment.fill("Great")

let magiciansname1 : string[] = ["anthar","manthar","kala","kalanthar"]

function showfunction() 
{
    const combine =   magiciansname1.map((value, index)=>(`${value} ${comment[index]}`))
    return combine;
}

console.log(showfunction())
console.log(magiciansname1)


// console.log("================================================")
// console.log(" print without FUNCTIONS")
// console.log("================================================")


// const comment : string[] =  Array(4)
// comment.fill("Great")

// let magiciansname1 : string[] = ["anthar","manthar","kala","kalanthar"]

//     const combine =   magiciansname1.map((value, index)=>(`${value} ${comment[index]}`))
    


// console.log(combine)
