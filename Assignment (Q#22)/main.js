// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var randomlists = ["ravi", "jehlum", "chenab"];
console.log(randomlists.indexOf("sutlej"));
console.log("".concat(randomlists[3]));
//// ERROR CORRECTION /////
randomlists.push("sutlej");
console.log(randomlists.indexOf("sutlej"));
console.log("".concat(randomlists[3]));
