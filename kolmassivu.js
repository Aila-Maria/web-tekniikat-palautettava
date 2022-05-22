//tekstin ja värin vaihto
document.querySelector("h4").textContent=" Hanbok korean kansallispuku";
let h4= document.querySelector("h4");
h4.style.color= "pink";

//Tekstin värinvaihto kun hiiri on tekstin päällä
let p= document.querySelector("p");
p.addEventListener("mouseenter",changeColor);
p.addEventListener("mouseleave",changeColor);

function changeColor(){
    p.classList.toggle("textcolor");
}

//tekstin värin vaihto
let m = document.getElementById("clearfix");
m.style.color = "teal";

//taustan värin vaihto
let n=document.getElementById("clearfix");
n.style.backgroundColor = "beige";

//Alkuun ja takaisin nappuloiden toiminta
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

fetch('https://yesno.wtf/api/')
.then(response => response.json())
.then(
    data => {document.getElementById('print-here').innerHTML = "<h5>" +
    data.answer +"<h5>";
    document.getElementById('print-here').innerHTML +=
    '<Img src="' + data.image +'"/>';
}
);

