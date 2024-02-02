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