/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.  */
var usernames = ["joblawAr", "shoBlawar", "koklaWar", "Sotawar"];
//let usernames : string[]= []
function fnuser(usernames) {
    if (usernames.length === 0) {
        console.log("we need more users");
        return;
    }
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var user = usernames_1[_i];
        if (user.toLowerCase() === "joblawar") {
            console.log("thanks for logging in");
        }
        else {
            console.log("thanks ".concat(user, " for logging in again"));
        }
    }
}
fnuser(usernames);
/*
console.log("non empty array",  usernames)
usernames= []
console.log("empty array", usernames)



//let usernames : string[]= ["joblawAr","shoBlawar","koklaWar","Sotawar"]
//let usernames : string[]= [];

console.log("TEST FOR EMPTY ARRAY")
usernames =[]
//function fnuser2(usernames: string[]) {
    if(usernames.length===0)
        console.log("we need more users")

for (let user of usernames)  {
    if (user.toLowerCase()==="joblawar"){
            console.log("thanks for logging in")

}
else {
console.log(`thanks ${user} for logging in again`)

}
}


*/ 
