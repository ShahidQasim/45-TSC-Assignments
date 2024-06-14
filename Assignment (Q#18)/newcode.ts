
let fiveplaces : string[] = ["Centrum", "Broadway","Atlanta","EiffelTower","Dutch"];

function sortingalpha(location:string[] ,  order:number) : string[] {

if (order===0) {
    return [...location].sort()

} else {
    return [...location].sort().reverse()  ///for reverse alphabetical order///use reverse for just reverse
} 
}

console.log(fiveplaces)

console.log(sortingalpha(fiveplaces,0))

console.log(fiveplaces)
//let e= sortingalpha(fiveplaces,1)          //// ALSO CORRECT
//console.log(e)                            //// ALSO CORRECT
console.log(sortingalpha(fiveplaces,1))
console.log(fiveplaces)
console.log(Object.keys(sortingalpha(fiveplaces,1)).reverse())   /// direct put without letting
//console.log(Object.keys(e).reverse())   //// ALSO CORRECT
//console.log(object.keys(e).reverse())
console.log(Object.keys(fiveplaces))
export{}   

