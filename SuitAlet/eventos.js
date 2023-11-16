const btnPrueba= document.querySelector("#btn-prueba")

btnPrueba.onclick= function(event){
    console.log("clik")
    console.log(event)
    Swal.fire("hola mundo")


}
//------------

const btnPregunta = document.querySelector("#btn-pregunta")

btnPregunta.onclick =function(){
    Swal.fire("Alguna pregunta","Aca el texto de la pregunta")
}



//definaos una nueva funcion para el seer alert

function showAlert(icon,title,text){

Swal.fire({

    icon,
    title,
    text,
    footer:"<a href='https//google.com'> link de footer"
})

}
const btnError= document.querySelector("#btn-error")
btnError.onclick = function(){

    showAlert("error","hubo un error","email or ")

}

const btnPeligro=document.querySelector("#btn-peligro")


btnPeligro.onclick= function(){

    showAlert("warning","peligro","estas en peligro")

}


const btnAlertBotones=document.querySelector("#btn-alert-botones")

btnAlertBotones.onclick= function(){

Swal.fire({
    title:"Alerta",
    text:"Texto de alerta",
    showDenyButton:true,
    showCancelButton:true,
    confirmButtonText :"guardar",
    DenyButtonText:"negar"
}
).then((resultado)=>{
    console.log("resultado",resultado);

    if(resultado.isConfirmed){
        showAlert("success","confirmado","se onfirmo la operacion")
        console.log("marco la confirmacion")
    }
    else if (resultado.isDenied){
        console.log("Nego la operacion")
        showAlert("error","negado","se nego la operacion")
    }
})
}


const btnAlertaImagen= document.querySelector("#btn-alerta-imagen")
let urlMarvel = "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772240_960_720.png"
btnAlertaImagen.onclick = function() {
    Swal.fire({

        title:"Marvel",
        text: "alerta con imagen",
        imageUrl: urlMarvel,
        imageWidth:200,
        imageHeight:200,
    })
}

const btnAlertaCustom = document.querySelector("#btn-alerta-custom")
btnAlertaCustom.onclick = function(){

    Swal.fire({

        title:"custm Alert",
        text:"Alerta personalizada",
        background: `url(${urlMarvel})`,
        color:"#fff",
        bacdrop:`rgb(0,0,0,0.3)
        url(https://tenor.com/bthPb.gif) left top no-repear`,

    })
}

const btnAlertaInputs= document.querySelector("#btn-alerta-inputs")

btnAlertaInputs.onclick = function(){

    Swal.fire({

        title:"input para email",
        input:"email",
        inputLabel:"ingrese su correo",
        inputPlaceholder:"el correo debe ser valido"
    }).then((resultado)=>{

        console.log(resultado.value)
    })
}



const paises = document.querySelector("#select-optiones")

//onchanged sirve para detectar si hay un cambio en mi elemento

paises.onchange = function(event){

    //de evento quiero capturar el value y el options
    const{value,options}= event.target
    console.log("valor de even",value)
    const index = options.selectedIndex;
    console.log(index)
    console.log("texto",options[index].text)
}


const usuario={
    nombre:"pepe",
    apellido:"zapata",
    edad:30,
    direccion:{
        calle:"calle siempre vivia",
        numero:123,
        ciudad:"sprinfield"
    }
}




const{nombre,apellido,edad,direccion}=usuario;

console.log(apellido)