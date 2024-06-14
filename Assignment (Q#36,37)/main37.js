/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message. */
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("".concat(text, ", if size is ").concat(size));
}
make_shirt();
make_shirt("medium"); // you can also change its message same as below or else default
make_shirt("small", "oooopz i dont need this");
/// ALTERNATE FUNCTION METHOD
(function (medium, large, text) {
    if (medium === void 0) { medium = 130; }
    if (large === void 0) { large = 50; }
    if (text === void 0) { text = "i love type script"; }
    console.log("shirt size ".concat(medium, " so ").concat(text));
    console.log("sirt size is ".concat(large, " so ").concat(text));
})();
