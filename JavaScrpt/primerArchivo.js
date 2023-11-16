const valor1= prompt("Ingrese el valor 1");
const valor2= prompt("Ingrese el valor 2");
const operacion= prompt("Ingrese una operacion");

if (operacion ==="+"){
    resultadoCalculadora= +valor1 + +valor2;
    console.log("suma: ",resultadoCalculadora);
}
else if (operacion ==="-"){
    resultadoCalculadora= +valor1 - +valor2;
    console.log("resta: ",resultadoCalculadora);
}
else if (operacion ==="*"){
    resultadoCalculadora= +valor1 * +valor2;
    console.log("Multiplcar: ",resultadoCalculadora);
}
else{
    resultadoCalculadora=+valor1 / +valor2;
    console.log("Dividir: ",resultadoCalculadora);
}