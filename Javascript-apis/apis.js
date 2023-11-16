const buscador = document.querySelector(".buscador")
const btn = document.querySelector(".btn")
const paterno = document.querySelector(".paterno")
const materno = document.querySelector(".materno")
const nombres = document.querySelector(".nombres")
const dni = document.querySelector(".dni")
const dpto = document.querySelector(".dpto")
const provincia = document.querySelector(".provincia")
const distrito = document.querySelector(".distrito")
const direccion = document.querySelector(".direccion")
const sexo = document.querySelector(".sexo")
const fnac = document.querySelector(".fnac")
const edad = document.querySelector(".edad")
btn.addEventListener("click",()=>{
    const datos = buscador.value
    obtenerDatos(datos)
})

buscador.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        obtenerDatos(e.target.value)
    }
})


const obtenerDatos = async(username)=>{

    const response = await fetch(`http://app17.susalud.gob.pe:8081/webservices/ws_procesos/obtenerDatosReniec?numero=${username}`)
    const data = await response.json()
    
    paterno.innerHTML = data.APE_PATERNO
    materno.innerHTML = data.APE_MATERNO
    nombres.innerHTML = data.NOMBRES
    dni.innerHTML = data.NUMERO_DOC
    dpto.innerHTML = data.DPTO
    provincia.innerHTML = data.PROV
    distrito.innerHTML = data.DISTR
    direccion.innerHTML = data.DIRECCION
    if (data.SEXO == "1"){
        sexo.innerHTML = "MASCULINO"
    }
    else{
        sexo.innerHTML = "FEMENINO"
    }
    
    fnac.innerHTML = data.FECHA_NACIMIENTO
    edad.innerHTML = data.EDAD

}