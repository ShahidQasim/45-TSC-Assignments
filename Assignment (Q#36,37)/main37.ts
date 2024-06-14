/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message. */

function make_shirt(size : string = "large" , text :  string= "I love typescript") :void {
    console.log(`${text}, if size is ${size}`)
}

make_shirt()
make_shirt("medium")   // you can also change its message same as below or else default
make_shirt("small","oooopz i dont need this");

/// ALTERNATE FUNCTION METHOD


(function (medium=130, large=50, text="i love type script"){
console.log(`shirt size ${medium} so ${text}`)
console.log(`sirt size is ${large} so ${text}`)
})()


