let primo = document.getElementById("primo");
let secondo = document.getElementById("secondo");

let aboutme = document.getElementById("aboutme");
function makeitbiggerAboutme() {
    aboutme.style.fontSize = "40px";
}

aboutme.addEventListener("mouseover", makeitbiggerAboutme)
aboutme.addEventListener("mouseleave", function () {
    aboutme.style.fontSize = "32px"
})

function showPrimo() {
    primo.style.visibility = "visible";
    secondo.style.visibility = "hidden";
    aboutme.removeEventListener("click", showPrimo)
}
aboutme.addEventListener("click", showPrimo)

let project = document.getElementById("project");
function makeitbiggerProject() {
    project.style.fontSize = "40px";
}
function showSecondo() {
    primo.style.visibility = "hidden";
    secondo.style.visibility = "visible";
    project.removeEventListener("click", showSecondo)
}
project.addEventListener("click", showSecondo)

project.addEventListener("mouseover", makeitbiggerProject)
project.addEventListener("mouseleave", function () {
    project.style.fontSize = "32px";

})
