//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


/*let list = {      // its just a type definition  [1]
    name : "shahid",
    class : "MS",
    "roll number" : 5 
} */

type list = {
    name : string
    class : string
    "roll number" : number
}



//let lists : Array<typeof list> =  []   //also works with type [1]
//let lists : any[] =  []   //also works
let lists  : list[] =  []    //also works with type list
lists.push(
    {
        name : "sohail",
        class : "MS",
        "roll number" : 6
    },
    {
        name : "syed",
        class : "MSc",
        "roll number" : 9 },
        {
            name : "sawwra",
            class : "Mphl",
            "roll number" : 99
        }
    )

   // console.log(lists)

    /*function getList(lists : Array<typeof list>){
       // function getList(lists : any[]){     //also works
     return lists[0] } */
      for (let detail of lists) {
        console.log(`name : ${detail.name}, class : ${detail.class}, roll :${detail["roll number"]}`)
      }

      console.log(lists[2])


