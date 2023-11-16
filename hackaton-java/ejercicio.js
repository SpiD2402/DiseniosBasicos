
function callMenu2(){
    let nro_ejercicio=prompt("ingrese el  ejercicio que quiere ejecutar: \r\n suma \r\n resta \r\n multiplicacion \r\n division \r\n residuo \r\n exponenciacion")
    if(nro_ejercicio !="suma" && nro_ejercicio !="resta" && nro_ejercicio !="multiplicacion" && nro_ejercicio !="division"  && nro_ejercicio !="residuo" && nro_ejercicio!="exponenciacion"){

        resultado= -1
        alert(resultado)
        
    }
    else{
        let x = parseFloat(prompt("Ingresa Num1"))
        let y = parseFloat(prompt("Ingresa Num2"))
        calculadora(nro_ejercicio,x,y)
    }

}

function calculadora(nro_ejercicio,x,y){
    let resultado=0;




        switch(nro_ejercicio){
            case "suma":
                resultado = x+y
                alert(resultado) 
                break;
             case "resta":
                resultado =x-y
                alert(resultado)  
                break;  
             case "multiplicacion":
                resultado = x*y
                alert (resultado);
                break;
            case "division":
                resultado=x/y
                alert(resultado)
                break;
            case "residuo":
                resultado=x%y
                alert(resultado)
                break;
            case "exponenciacion":
                resultado= x**y
                alert(resultado)
                break;
    
        
    }

}
