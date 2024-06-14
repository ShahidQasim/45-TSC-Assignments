/*
let usernames1 : string[] = ["admin","shahid","ali","farhan"]

for (let user of usernames1) {

    if (user==="admin") {
       // console.log("Hello admin, would you like to see a status report?")  //also correct
        console.log(`Hello ${user}, would you like to see a status report?`)
      //  break;
    }
    else {
      //  continue;
        console.log(`Hello ${user} thank you for logging in again`)
    }
}
*/
var usernames1 = ["guest", "administrator", "user", "root", "admin"];
//  for of loops return values  => for in loops return indexes
for (var _i = 0, usernames1_1 = usernames1; _i < usernames1_1.length; _i++) {
    var i = usernames1_1[_i];
    if (i === "admin") {
        console.log("Hello ".concat(i, ", would you like to see a status report?"));
        break;
    }
    else {
        continue; // not print this message
        console.log("Hello ".concat(i, ", thank you for logging in again."));
    }
}
