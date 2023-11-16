let buton1= document.querySelector("#buton1");
let buton2= document.querySelector("#buton2");
let respuesta = document.querySelector("#numeros");
let contador=0;

buton2.onclick = function(event){

    event.preventDefault();
    contador+=1;
    respuesta.textContent=contador;
}


buton1.onclick = function(event){

    event.preventDefault();
    contador-=1;
    respuesta.textContent=contador;
}