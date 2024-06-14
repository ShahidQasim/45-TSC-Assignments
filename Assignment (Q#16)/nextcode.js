"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestlist = ["cheeku", "peeku", "meeku"];
guestlist.splice(0, 0, "leeku");
guestlist.splice(2, 0, "deeku");
console.log(guestlist, "at centre deeku");
guestlist.splice(6, 0, "yooku");
console.log(guestlist, "for check");
for (var i = 0; i < guestlist.length; i++) {
    // const element = array[i];
    //console.log("oye ! !" +guestlist[i] + "join our bigger dinner" )
    console.log("\"oye !!!!!!!!!!! ! ".concat(guestlist[i], " join our bigger dinner\""));
}
