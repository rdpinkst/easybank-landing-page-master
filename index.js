const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", displayNav)

function displayNav(e) {
    let nav = document.querySelector("nav ul");
    nav.setAttribute("display", "flex");
    nav.setAttribute("flex-direction", "column");
    nav.setAttribute("height", "300px");
    nav.setAttribute("Width", "300px")
}