/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var current_users = ["Shahid", "Ali", "farHan", "Zeeshan", "Siddiq"];
var new_users = ["Shahid", "Ali", "farhan", "ZeEshan", "Siddiq", "Topak khan"];
var currentoLower = current_users.map(function (user) { return user.toLowerCase(); });
//console.log(currentoLower)
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newuser = new_users_1[_i];
    var isavailable = true;
    var newtoLower = newuser.toLowerCase();
    for (var _a = 0, currentoLower_1 = currentoLower; _a < currentoLower_1.length; _a++) {
        var current = currentoLower_1[_a];
        if (newtoLower === current) {
            isavailable = false;
            break;
        }
    }
    if (isavailable) {
        console.log("".concat(newuser, " is available"));
    }
    else {
        console.log("".concat(newuser, " is not available, enter new plz"));
    }
}
