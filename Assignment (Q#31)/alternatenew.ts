
let usernames : string[]= ["joblawAr","shoBlawar","koklaWar","Sotawar"] ///OR
//let usernames : string[]= []
if (!usernames.length) {
    console.log("we need more users")
}
else {
    let i=usernames.length;
    while(i>0) {
    usernames.pop();
    i--;
}
}
console.log(`username doesnot exist in array ${usernames}`)   //OR
//console.log("username doesnot exist in array" + usernames)  


    export{}  
   