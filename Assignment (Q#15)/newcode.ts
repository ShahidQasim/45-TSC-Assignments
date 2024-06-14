
let flist : string[]= ["jatt","patt","katt"];
for (let i = 0; i < flist.length; i++) {
    if (flist[i]=="katt") {
        console.log("katt is not joining")
        flist.splice(3,0,"shut") //shut added at 3 psition// jatt patt katt shut
    } else {
        console.log( "plz  \t "   +    flist[i]   +  "join the dinner") 
  
    }
    
} 
console.log(flist)

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)*/
