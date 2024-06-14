
let  Tshirt=function make_shirt(text:string , size :  string) : string{
    return `${text}, ${size}` }
   
    console.log(Tshirt("medium","go out for falastine"))  //OR
   console.log("medium","go out for falastine")


/////////////////////////ALTERNATE -2

function make_shirt(text:string , size :  string) : string{
 return ""+ text + "" + size     //OR
 //return `${text}, ${size}`

}console.log ("medium","go out for falastine")

//////////////////////////////ALTERNATE ----3  SAME AS FIRST BUT HERE VARIABLE IS DECLARED BELOW/////////////
function make_shirt2(text:string , size :  string) : void {

    console.log(`size  : ${text} text : ${size}`)
}

let text = "go go"
let size =  "large"

make_shirt2(text,  size)