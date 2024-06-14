//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendlist = ["shahid", "ali", "khan"];
console.log("helo", friendlist[0], "how are you");
console.log("helo", friendlist[1], "where are you");
console.log("helo", friendlist[2], "what the hell are you");
//////OR
var msg1 = "helo ".concat(friendlist[0], " ,hey how are you?");
console.log(msg1);
///OR
console.log("helo ".concat(friendlist[0], " ,hey how are you?"));
///OR
var msg2 = "helo" + friendlist[0] + ",hey how are you? fine??";
console.log(msg2);
///OR
console.log("helo" + friendlist[0] + ",hey how are you? ");
console.log("helo" + friendlist[0]);
