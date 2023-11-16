let circulo= document.querySelector(".circulo")
let contenedor= document.querySelector(".contenedor")
let rectangulo = document.querySelector(".rectangulo")
let letras = document.querySelector(".letras")
let mode = "light"

function lightMode(){
    circulo.className="circulo";
    contenedor.className="contenedor";
    rectangulo.className="rectangulo";
    letras.className="letras";
}

function darkMode(){
    circulo.className="darkCirculo";
    contenedor.className="darkContenedor";
    rectangulo.className="darkRectangulo";
    letras.className="darkLetras";
}


circulo.addEventListener("click",()=>{

    if(mode =="light"){
        darkMode();
        mode="dark"
    }
    else{
        lightMode()
        mode="light"
    }

})