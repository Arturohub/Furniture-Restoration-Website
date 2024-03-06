
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fotos_proyectos img").forEach(image => {
        image.onclick = () => {
            document.querySelector(".zoom").style.display = "flex";
            document.querySelector(".zoom img").src = image.getAttribute("src");
        }
    });

    document.querySelector('.zoom span').onclick = () => {
        document.querySelector(".zoom").style.display = "none";
    }
});

document.querySelector(".dropdownIcon").addEventListener("click", dropdownMenu)

function dropdownMenu() {
    let x = document.getElementById("dropdownClick");
    if (x.className === "topnav"){                 //change topnav to topnav.responsive
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }

}


/* ################### UNA VEZ CLICKEAS EL ENLACE DE CONTACTAME  ###################### */
document.querySelector(".linkcontact").addEventListener("click", thankYou)

function thankYou(){
    document.querySelector(".linkcontact").innerHTML = "Gracias por clickear!";
}


/* ################### PERMITE CAMBIAR DE IMAGENES ###################### */

let image = document.querySelector(".myImage1")
let images = ["portada1.jpg", "portada3.jpg", "portada4.jpg"]

setInterval( function () {
    let random = Math.floor(Math.random() * 3);
    image.src = images[random]
}, 7000)
