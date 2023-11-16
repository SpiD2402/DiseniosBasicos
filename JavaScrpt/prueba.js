
let operacion = document.querySelector('.ejercicio1')

function datos() {
    
    let num1 = parseFloat(document.getElementById('numero1').value)
    let num2 = parseFloat(document.getElementById('numero2').value)
    let resultado = num1 + num2
    
    if (resultado == resultado) {
        operacion.innerHTML = resultado
    } else {
        operacion.innerHTML = 'Rellena los campos'
    }
};