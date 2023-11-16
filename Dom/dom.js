// existe dentro de js el documento ... este archivo
//me permite obtener elementos de html

//obtener elementos segun el nombre de su etiquetas

const inputs= document.getElementsByTagName("input")
console.log("input",inputs)

const newInputs = Array.from(inputs);
console.log(newInputs)

newInputs.map((newInputs) =>{

console.log("nueva forma", newInputs.value)

})


for (let i=0;i<inputs.length;i++){
    console.log("input",inputs[i].value)
}




const password= document.getElementById('input_password')
console.log("password",password)



password.style.backgroundColor="#000";
password.style.color="white"


//por clases
const inputsName = document.getElementsByClassName("last_name");
console.log(inputsName)

//con est convertimos
const inputName= Array.from(inputsName)
console.log(inputName)


inputName.forEach((element)=>{
    console.log(element.value)
})


//otro ejemplo

const form = document.querySelector('form')
console.log(form)