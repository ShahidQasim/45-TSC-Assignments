/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.  */


let usernames : string[]= ["joblawAr","shoBlawar","koklaWar","Sotawar"]
//let usernames : string[]= []
function fnuser(usernames: string[]) : void {
    if(usernames.length===0){
        console.log("we need more users")
        return;
    }
for (let user of usernames)  {
    if (user.toLowerCase()==="joblawar"){
            console.log("thanks for logging in")  

}
else {
console.log(`thanks ${user} for logging in again`)

}
}
}
fnuser(usernames);
//fnuser(usernames);    /////repeatition of whole function
usernames= []

fnuser(usernames)        // for repeating function more than once with alteration