// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guestlist  :string [] = ["shahid","farhan", "khurram"];
for (let i = 0; i < 3; i++) {
   // console.log(`${Guestlist[i]} is invited for dinner`)  //alternate correct
    console.log(Guestlist[i]+ "is invited for dinner")
}

let newGuestlist  :string [] = ["shahid","farhan", "khurram"];
newGuestlist.forEach((guest : string) => {console.log(guest+ "is invited for dinner")})
newGuestlist.forEach((guest : string) => {console.log(`${guest} is invited for dinner`)})

