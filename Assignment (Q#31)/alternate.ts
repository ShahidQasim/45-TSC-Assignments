
let userNames:string[] = ['he', 'she', 'you', 'we','they']
//let userNames:string[] = []
function Users(usernames:string[]): void {
    if (usernames.length === 0) {
        console.log(`we need to find some users `);
        return ;
    }
    for (const username of usernames) {
        if (username.toLowerCase() === 'he') {
            console.log(`thank you for login in again`);
        } else {
            console.log(`Hello ${username}, thank you for login in again`);
    }
}
}


//console.log(`for non empty username:\n`)
Users(userNames);   ///return for above
//Users(userNames);///  for repeating more than once

//to make array empty
userNames = [];

console.log(` for empty users names`)
Users(userNames)