function makeAlbum(artist, title, tracks) {
    var album = {
        artist: "artist",
        title: "title"
        ///tracks : tracks,   //optional to below "if"
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function to create three different album objects
var album1 = makeAlbum("anas yunus", "naat");
var album2 = makeAlbum("abu bakr", "nazams", 12);
var album3 = makeAlbum("sudais", "tilawat");
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
//Alternate ////////////////////////////////////////
// let album1={
//     artist_name:"anas yunus",
//     album_title:"naats"
// }
// let album2={
//     artist_name:"Sudais",
//     album_title:"Tilawat ",
// }
// function make_album(obj:{artist_name:string,album_title:string},track_number:any){
//    track(track_number)
//     return `${obj.artist_name}\t${obj.album_title}`;
// }
// // another function 
// function track(n:number){
//     console.log(`number of tracks ${n}`)
// }
// console.log(make_album(album1,22))
//  console.log(make_album(album2,79))
///TEST FOR RECORD FUNCTION  ////////
// interface roleinfo  {    //Or use type with "="  instead of interface
//     image : string;
//     icon : String;
// }
// type role = "admin" | "user"
// const roleinfo :Record<role, roleinfo> ={
//    admin : { 
//     image : "image",
//     icon : "icon"
//     },
//     user : {
//         image : "image",
//         icon :  "icon"
//     }
// }
// console.log(roleinfo)
//alternate FOR RECORD FUNCTION
// const info :Record<any, any> ={
//    admin : { 
//     image : "image",
//     icon : "icon"
//     },
//     user : {
//         image : "image",
//         icon :  "icon"
//     }
// }
// console.log(info)
