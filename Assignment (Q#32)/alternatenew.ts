
let current_users12 : string[] =["shahid","ali","farhan","zeeshan","siddiq","SHAHID"];
let new_users12 : string[] =[...current_users12];
new_users12.push("ghazaNfer")
//new_users1.push("")

for (let i = 0; i < new_users12.length; i++) {
    if (new_users12[i].includes(new_users12[i].toLowerCase() )|| new_users12[i].includes(new_users12[i].toUpperCase())|| new_users12[i].includes(new_users12[i].toUpperCase()))
 

        
        {

        console.log("username already exist enter new one plz")
    }
    
    else {
        console.log("username unavailable")

    }
    
}

