/*let Guestlist : string[] = ["shahid","adil","umais","rabeet"];
let index =  Guestlist.length
console.log(index)

for (let i = 0; i < Guestlist.length; i++) ;{
    if (index>2) {
        console.log(`sorry ${Guestlist[0]} is not invited`)
        Guestlist.splice(0,1)

    }
    
}
console.log(`you are invited to dinner ${Guestlist}`)






export{} */
var friend_ne = ["Mohsin", "nazir", "tahun", "rizwan"];
var index = friend_ne.length;
console.log(index);
console.log("you can invite only two people for dinner");
for (var i = 0; i < friend_ne.length; i++) {
    if (index > 2) {
        console.log(" you\u2019re sorry you can\u2019t invite them to dinner. ".concat(friend_ne[0]));
        friend_ne.splice(0, 1);
    }
}
console.log(" you are invite them to dinner. ".concat(friend_ne));
///friend_ne.pop()
//friend_ne.pop()
//console.log(friend_ne)
//console.log("Biger Dinner Table total people "+friend_ne.length)
