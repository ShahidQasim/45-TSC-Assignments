"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usernames = ["joblawAr", "shoBlawar", "koklaWar", "Sotawar"];
//let usernames : string[]= []
//function fnuser(usernames: string[]) : void {
if (usernames.length === 0) {
    console.log("we need more users");
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
