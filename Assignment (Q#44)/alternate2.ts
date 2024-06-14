let sandwich : string[] = ["mayonese","egg", "vegetable","sauce","garlic"];

// const slist = function (...list : string[]) : string [] {  ///////////////same as below/// alternate
//  return list.sort()

// }

function slist(...list : string[]) : string [] {
    return list.sort()
   
   }

console.log(` ${slist(...sandwich)}`)  ////in list form
console.log(slist(...sandwich)) ////in array form
console.log(slist("chicken","meat","tikka"))



export{}