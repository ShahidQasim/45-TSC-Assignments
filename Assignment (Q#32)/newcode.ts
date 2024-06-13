let current_users : string[] =["Shahid","Ali","farhan","Zeeshan","Siddiq","SHAHID"];
//let new_users : string[] =[...current_users];
let new_users : string[] =["Shahid","Bilal","Farhan","shahzeb","Siddiq","SHAHID"]

const    currentoLower = current_users.map(user =>user.toLowerCase())

function userfunction (current_users , new_users) {

    for (const newuser of new_users){
    const newtoLower = newuser.toLowerCase()

    if (currentoLower.includes(newtoLower)){
        console.log(`${newuser} is already taken, enter new`)
    }

    else {
        console.log(`${newuser} is available`)

    }
    }


}
userfunction (current_users , new_users)

