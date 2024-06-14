
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
