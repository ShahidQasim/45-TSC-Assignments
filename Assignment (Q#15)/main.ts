/*  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let guestlist :  string [] = ["shahid","abdullah","inam","jatt"];
let guestcantcome ="jatt";
console.log("this is guest list", guestlist);
console.log(` OH ! ${guestcantcome} is not joining, patt may join`);
let newguest = "patt";
//guestlist.includes(newguest)
let indexofguestcantcome  = guestlist.indexOf(guestcantcome);
if (indexofguestcantcome!==-1) {
    guestlist[indexofguestcantcome] = newguest 
}
console.log("updated list " ,guestlist)

guestlist.forEach(guest => {  console.log(guest + "  plz join the  dinner")
    
});

export {guestlist}



