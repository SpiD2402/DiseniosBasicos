 let boton = document.querySelector(".circulo");

 let body = document.querySelector("body")
 boton.addEventListener("click",()=>{

    document.documentElement.classList.toggle("dark")
    /*document.body.classList.toggle("dark")*/
 })