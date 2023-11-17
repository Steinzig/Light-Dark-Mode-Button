//Dark Mode
function toggleDarkMode() {
    const body = document.body;

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        document.getElementById("B1").style.background = "black";
        document.getElementById("B1").style.color = "white";
        document.getElementById("B1").innerHTML = "Dark";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "pink";
        document.getElementById("B1").style.background = "pink";
        document.getElementById("B1").style.color = "black";
        document.getElementById("B1").innerHTML = "Light";
    }
}
document.getElementById("B1").onclick = toggleDarkMode;