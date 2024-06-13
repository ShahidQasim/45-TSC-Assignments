function titlecase(str) {
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
 
titlecase("my naMe is shahId qasiM")
console.log(titlecase(str))


