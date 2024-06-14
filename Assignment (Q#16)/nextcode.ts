let guestlist : string[] = ["cheeku","peeku","meeku"];

    guestlist.splice(0,0,"leeku");
    guestlist.splice(2,0,"deeku")
    console.log(guestlist, "at centre deeku")
    guestlist.splice(6,0,"yooku")

    console.log(guestlist, "for check")

    for (let i = 0; i < guestlist.length; i++) {
       
        //console.log("oye ! !" +guestlist[i] + "join our bigger dinner" ) //alternate
        console.log(`"oye !!!!!!!!!!! ! ${guestlist[i]} join our bigger dinner"` )   

    }













export{}   //to avoid declaration of blockedscope