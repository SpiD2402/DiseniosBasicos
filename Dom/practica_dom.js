let fr=  document.getElementById("input_em")
console.log(fr)


let cl= document.getElementsByClassName("input_cl")


const lista= Array.from(cl)
console.log(lista[0].formAction)


let fom= document.querySelectorAll("form")
console.log(fom)



for (let index = 0; index < fom.length; index++) {
    
    console.log(fom[index])
}

let fom4= document.querySelector("form")
console.log(fom)