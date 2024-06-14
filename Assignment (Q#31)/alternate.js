var userNames = ['he', 'she', 'you', 'we', 'they'];
//let userNames:string[] = []
function Users(usernames) {
    if (usernames.length === 0) {
        console.log("we need to find some users ");
        return;
    }
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === 'he') {
            console.log("thank you for login in again");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for login in again"));
        }
    }
}
//console.log(`for non empty username:\n`)
Users(userNames); ///return for above
//Users(userNames);///  for repeating more than once
//to make array empty
userNames = [];
console.log(" for empty users names");
Users(userNames);
