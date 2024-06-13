//without function
let usernames : string[]= ["joblawAr","shoBlawar","koklaWar","Sotawar"]
//let usernames : string[]= []
//function fnuser(usernames: string[]) : void {
    if(usernames.length===0){
        console.log("we need more users")
        
    }
for (let user of usernames)  {
    if (user.toLowerCase()==="joblawar"){
            console.log("thanks for logging in")  

}
else {
console.log(`thanks ${user} for logging in again`)

}
}

export{}