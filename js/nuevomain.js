var botonMenu = document.getElementById("botonMenu");
var flag = false;

botonMenu.addEventListener("click", function(event) {
    event.preventDefault();
    if (botonMenu.ariaExpanded == "false"){
        botonMenu.setAttribute("aria-expanded", "true");
    } else {
        botonMenu.setAttribute("aria-expanded", "false");
    }


})


