"use strict";

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

let nm = document.getElementById("nm");

function nightMode() {
    let b = document.querySelector("body");
    console.log(b);
    if (b.style.background == "black"){
        b.style.background = "white";
        b.style.color = "black";
    } else {
    b.style.background = "black";
    b.style.color = "white";
    }
}

nm.addEventListener("click", nightMode);

let img = document.querySelector('#img1');

function carousel() {
    let is=img.getAttribute('src');
    console.log(is);
    if(is=="img/hello.jpg"){
        img.setAttribute('src',"img/mymelo.jpg");
    }
    if(is=="img/mymelo.jpg"){
        img.setAttribute('src',"img/kuromi.jpg");
    }
    if(is=="img/kuromi.jpg"){
        img.setAttribute('src',"img/cinna.jpg");
    }
    if(is=="img/cinna.jpg"){
        img.setAttribute('src',"img/pompom.jpg");
    }
    if(is=="img/pompom.jpg"){
        img.setAttribute('src',"img/pocha.jpg");
    }
    if(is=="img/pocha.jpg"){
        img.setAttribute('src',"img/kerro.jpg");
    }
    if(is=="img/kerro.jpg"){
        img.setAttribute('src',"img/sam.jpg");
    }
    if(is=="img/sam.jpg"){
        img.setAttribute('src',"img/kila.jpg");
    }
    if(is=="img/kila.jpg"){
        img.setAttribute('src',"img/hello.jpg");
    }
}

img.addEventListener('click',carousel)
