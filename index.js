const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", displayNav);
close.addEventListener("click", closeNav);

function displayNav(e) {
    nav.style.display = "flex";
    close.style.display = "block";
    hamburger.style.display = "none";
}

function closeNav(e) {
    nav.style.display = "none";
    close.style.display = "none";
    hamburger.style.display = "block";
}