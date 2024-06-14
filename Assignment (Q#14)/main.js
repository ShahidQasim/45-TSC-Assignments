// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guestlist = ["shahid", "farhan", "khurram"];
for (var i = 0; i < 3; i++) {
    // console.log(`${Guestlist[i]} is invited for dinner`)
    console.log(Guestlist[i] + "is invited for dinner");
}
var newGuestlist = ["shahid", "farhan", "khurram"];
newGuestlist.forEach(function (guest) { console.log(guest + "is invited for dinner"); });
newGuestlist.forEach(function (guest) { console.log("".concat(guest, " is invited for dinner")); });
