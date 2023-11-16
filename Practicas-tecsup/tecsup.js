let div = document.querySelector(".color")
let boton = document.querySelector(".boton") 
let lista = ["red","blue","gray","yellow","green","orange"]




boton.addEventListener("mouseenter", ()=>{
    let colores = getRandonNumber()
    div.style.backgroundColor= lista[colores];
})





function getRandonNumber() {

    return Math.floor(Math.random()*lista.length)
}
