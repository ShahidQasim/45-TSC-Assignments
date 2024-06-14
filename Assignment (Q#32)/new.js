"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var current_users = ["Shahid", "Ali", "farhan", "Zeeshan", "Siddiq", "SHAHID"];
var new_users = __spreadArray([], current_users, true);
new_users.push("ghazaNfer");
for (var i = 0; i < new_users.length; i++) {
    if (new_users[i] === "Shahid" || new_users[i] === "SHAHID" ||
        new_users[i] === "Ali" || new_users[i] === "ALI" ||
        new_users[i] === "farhan" || new_users[i] === "FARHAN" ||
        new_users[i] === "Zeeshan" || new_users[i] === "ZEESHAN" ||
        new_users[i] === "Siddiq" || new_users[i] === "SIDDIQ") {
        console.log("username already exist enter new one plz");
    }
    else {
        console.log("username is available");
    }
}
console.log(new_users);
