var guest_list = ["cheeku", "peeku", "meeku"];
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guest = guest_list_1[_i];
    console.log("hey ".concat(guest, " listen we have found a bigger dinner table"));
}
guest_list.unshift("leeku");
console.log("name added at beginning  \n", guest_list); //for check
guest_list.splice(guest_list.length / 2, 0, "yooku");
console.log("name added in middle of array \n", guest_list); /// for check
guest_list.push("deeku");
console.log("name added in end using APPEND() command \n", guest_list); // for check  ,not necessary
for (var _a = 0, guest_list_2 = guest_list; _a < guest_list_2.length; _a++) {
    var guest = guest_list_2[_a];
    console.log("Listen ".concat(guest, " come and join our new bigger dinner table, HURRY UP!"));
}
