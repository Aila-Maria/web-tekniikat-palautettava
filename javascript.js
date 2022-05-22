
//seuraava ja takaisin nappuloiden toiminta
let button1= document.getElementById("next");
let button2= document.getElementById("back");

button1.addEventListener("click",seuraava );
button2.addEventListener("click",takaisin);


function seuraava(){
    location.href="kolmassivu.html";
}

function takaisin(){
    location.href="index.html";
}