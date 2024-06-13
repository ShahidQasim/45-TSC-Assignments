
let current_users : string[] =["Shahid","Ali","farhan","Zeeshan","Siddiq","SHAHID"];
let new_users : string[] =[...current_users];

new_users.push("ghazaNfer")

for (let i = 0; i < new_users.length; i++) {
    if (new_users[i]==="Shahid" || new_users[i]==="SHAHID" ||
     new_users[i]==="Ali" || new_users[i]==="ALI" ||
     new_users[i]==="farhan" || new_users[i]==="FARHAN"  ||
     new_users[i]==="Zeeshan" || new_users[i]==="ZEESHAN" ||
     new_users[i]==="Siddiq" || new_users[i]==="SIDDIQ")
    
    {
        console.log("username already exist enter new one plz")
    }
    
    else {
        console.log("username is available")
    }
}

console.log(new_users)

export{}