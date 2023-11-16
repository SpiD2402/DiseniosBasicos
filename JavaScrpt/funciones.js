//funcion conjunto de soluciones o ejecuciones para
//poder realizar tareas

//funcion expresiva

function nombreFuncion(){
//una vez declara mi fucjon todo el codigo que hagamos
// dentro de este solo se ejecutara cuando la llame

    console.log("hola");

};
nombreFuncion();

//una funcion es creada para poder reutilizar codigo
//una de las misiones de la funcion es poder hacer un trabajo
//repetitivo

function sumar(numero1,numero2){
    const converNumero1= +numero1;
    const converNumero2= +numero2;
    const suma= converNumero1+converNumero2;
    console.log(suma)
}

(sumar(5,8))


const suma2 =(a,b)=>{
    return a+b
}
console.log(suma2(5,15))
