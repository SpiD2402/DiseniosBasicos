const carro={
    color:"azul",
    motor:"1.6",
    modelo:"mustang",
    marca:"changan",
    nuevo:false,

};
console.table(carro)



//objetos persona

const persona={
    edad:34,
    nombre:"panfilo",
    texto:"masculino",
    talla:1.78,
    estadoCivil:"casado",
    mayorEdad:true,
    donacionOrganos:true,
};

console.log(persona.estadoCivil);
persona.nombre="pablo";
console.log(persona)


//agregando key y value

persona["profesion"]="ingeniero";

//otra forma

persona.nacionalidad="ucraniana";

