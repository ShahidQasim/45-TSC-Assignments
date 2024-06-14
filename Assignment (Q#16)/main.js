/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
var guestlist = ["cheeku", "peeku", "meeku"];
guestlist.unshift("leeku");
console.log("name added at beginning  \n", guestlist); //for check
guestlist.splice(guestlist.length / 2, 0, "yooku");
console.log("name added in middle of array \n", guestlist); /// for check
guestlist.push("deeku");
console.log("name added in end using APPEND() command \n", guestlist); // for check  ,not necessary
guestlist.forEach(function (guest) { console.log("".concat(guest, " ,Listen ! now i have bigger dinner table")); });
