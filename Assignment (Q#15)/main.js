"use strict";
/*  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
var guestlist = ["shahid", "abdullah", "inam", "jatt"];
exports.guestlist = guestlist;
var guestcantcome = "jatt";
console.log("this is guest list", guestlist);
console.log(" OH ! ".concat(guestcantcome, " is not joining, patt may join"));
var newguest = "patt";
//guestlist.includes(newguest)
var indexofguestcantcome = guestlist.indexOf(guestcantcome);
if (indexofguestcantcome !== -1) {
    guestlist[indexofguestcantcome] = newguest;
}
console.log("updated list ", guestlist);
guestlist.forEach(function (guest) {
    console.log(guest + "  plz join the  dinner");
});
