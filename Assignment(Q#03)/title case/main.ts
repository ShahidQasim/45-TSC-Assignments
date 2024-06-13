let tc = "my name is shahid qasim";
function tic(tc) {
    tc = tc.split(" ");
    for (let i=0 ; i < tc.length ; i++) {
        tc[i] = tc[i].charAt(0).toUpperCase() + tc[i].slice(1);

    }
    return tc.join( " ")
    }
    //tic(tc)
    console.log(tic(tc))

//console.log(tic("my name is shahid qasim"))   

