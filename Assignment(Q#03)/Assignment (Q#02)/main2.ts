
let str: string= "my name is shahid"
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.toLocaleUpperCase())

// USING FOR LOOP///////////////////////////////

/*function titlecase(str) {
    str=str.split(" ");
    for (let i=0 ; i < str.length ; i++){
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join (" ")
}
console.log(titlecase(str))  

/// MAP CASE/////////////////////////////////////////////

function titlecase(str) {
    return str.split(" ").map(function(word){
    return(word.charAt(0).toUpperCase() +  word.slice(1));
    }).join ("  ");
    
}
console.log(titlecase(str))   */

/////// by using replace ////////////////////////////

function titlecase(str) {
    return str.split("  ").map(function(word) {
        return word.replace(word[0],word[0].toUpperCase());
    }).join(" ");

}
console.log(titlecase(str))












//reference; https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/




