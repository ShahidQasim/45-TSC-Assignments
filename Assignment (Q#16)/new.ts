let guest_list : string[] = ["cheeku","peeku","meeku"];
for (let guest of guest_list) {
    console.log(`hey ${guest} listen we have found a bigger dinner table`)
}
guest_list.unshift("leeku");
console.log("name added at beginning  \n",guest_list)    //for check
guest_list.splice(guest_list.length/2, 0, "yooku");
console.log("name added in middle of array \n",guest_list)   /// for check
guest_list.push("deeku")
console.log("name added in end using APPEND() command \n",guest_list)    // for check  ,not necessary

for (let guest of guest_list) {

    console.log(`Listen ${guest} come and join our new bigger dinner table, HURRY UP!`)
}

