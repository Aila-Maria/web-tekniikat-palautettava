//tekstin vaihto
document.querySelector("h4").textContent=" Hanbok korean perinneasu";

let m = document.getElementById("clearfix");
m.style.color = "teal";

let n=document.getElementById("clearfix");
n.style.backgroundColor = "beige";

//seuraava ja takaisin nappuloiden toiminta
let button1= document.getElementById("home");
let button2= document.getElementById("back");

button1.addEventListener("click",alkuun );
button2.addEventListener("click",takaisin);


function alkuun(){
    location.href="index.html";
}

function takaisin(){
    location.href="toinensivu.html";
}