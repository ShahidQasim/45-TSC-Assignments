//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//let lists : Array<typeof list> =  []
//let lists : any[] =  []   //also works
var lists = []; //also works with type list
lists.push({
    name: "sohail",
    class: "MS",
    "roll number": 6
}, {
    name: "syed",
    class: "MSc",
    "roll number": 9
}, {
    name: "sawwra",
    class: "Mphl",
    "roll number": 99
});
// console.log(lists)
/*function getList(lists : Array<typeof list>){
   // function getList(lists : any[]){     //also works
 return lists[0] } */
for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
    var detail = lists_1[_i];
    console.log("name : ".concat(detail.name, ", class : ").concat(detail.class, ", roll :").concat(detail["roll number"]));
}
console.log(lists[2]);
