const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const phoneImage = document.querySelector(".over")


hamburger.addEventListener("click", displayNav);
close.addEventListener("click", closeNav);

function displayNav(e) {
    nav.style.display = "flex";
    close.style.display = "block";
    hamburger.style.display = "none";
    phoneImage.style.display = "none"
    document.querySelector("main").style.opacity = "0.8"
}

function closeNav(e) {
    nav.style.display = "none";
    close.style.display = "none";
    hamburger.style.display = "block";
    phoneImage.style.display ="block";
    document.querySelector("main").style.opacity = "1.0"
}