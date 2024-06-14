/* Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */
let usernames = ["admin", "shahid", "ali", "farhan"];
if (usernames.includes("admin")) {
    console.log("Hello admin, would you like to see a status report?");
}
if (usernames.includes("shahid")) {
    console.log("Hello shahid, thank you for logging in again");
}
if (usernames.includes("ali")) {
    console.log(`Hello ${usernames[2]}, thank you for logging in again`);
}
if (usernames.includes("farhan")) {
    console.log(`Hello ${usernames[3]}, thank you for logging in again`);
}
