

let rspt= document.getElementsByClassName("name")
function operacion(){
    let numero= document.getElementsByTagName("input")
    let suma = parseFloat(+numero[0].value+ +numero[1].value)
    rspt[0].innerHTML=suma;
}
let numero= document.getElementsByTagName("input")
console.log(numero[0])


const ls= ["pollo", "carne","chancho","pescado"]

let listas=document.querySelector("ul")
for (let index = 0; index < ls.length; index++) {
    
        let li = document.createElement("li")
        li.textContent=ls[index]
        listas.appendChild(li)
}


