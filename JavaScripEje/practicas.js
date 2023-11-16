let btn = document.querySelector(".btn")
let resultado = document.querySelector(".resultado")

btn.addEventListener("click",function () {
    

    var github = new XMLHttpRequest();
    
    github.addEventListener("readystatechange",function(){

switch(github.readyState){

       case 1 :
        console.log("OPEN",github.readyState)
       break;
       case 2 :
        console.log("SEND",github.readyState)
        break;
        case 3 :
        console.log("Data",github.readyState)
        break;
        case 4 :
        console.log("La respuesta esta aqui",github.readyState)
        let objRespuesta= JSON.parse(github.responseText);
        console.log(objRespuesta)
        resultado.innerHTML = objRespuesta.login
        break;
}       
       
    })
    github.open("GET","https://api.github.com/users/SpiD2402")
    github.send(null)
})