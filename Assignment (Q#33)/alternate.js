var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] = 1) {
        console.log("".concat(numbers[i], "st"));
        // break;
    }
    // continue;
    if (numbers[i] = 2) {
        console.log("".concat(numbers[i], "nd"));
    }
    if (numbers[i] = 3) {
        console.log("".concat(numbers[i], "rd"));
    }
    break;
}
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3 && numbers[i] < 10) {
        console.log("".concat(numbers[i], "th"));
    }
}
/*
//let suffix  :  string[] = Array(9).fill("th")
console.log( numbers.join("th"))
console.log("--------------------")

//ALL TH
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]> 0 && numbers[i]<10) {
        console.log(`${numbers[i]}th`)

    }
    
}
console.log("--------------------")

*/ 
