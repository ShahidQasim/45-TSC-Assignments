/*let fvt :string[] = [];
fvt.push("bike", "honda");
fvt.push("car", "civic");
console.log(fvt) */

let fvt : Array<[transprt : string , brand : string]> = [];
fvt.push(["bike", "hnda"]);
fvt.push(["car", "civic"]);
fvt.push(["public", "rikshaw"]);
console.log(fvt);
fvt.forEach(([transprt , brand]) => {console.log(`i want ${brand}, ${transprt}`)    
});
//FOR LOOP//
let fvt1 : string[] =["car" , "motorcycl","riksha"];
for (let i = 0; i < 3 ; i++) {
    console.log(`i want ${fvt1[i]} transport`);
    
}