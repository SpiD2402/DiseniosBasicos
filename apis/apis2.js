const formulario = document.getElementById("formulario")
const input = document.getElementById("input")
const template= document.getElementById("template")
const tareaList = document.getElementById("lista-tareas")



let tareas ={};
formulario.addEventListener('submit',(e)=>{

    e.preventDefault();
    setTareas()
  
})



const setTareas=()=>{
    if(input.value.trim()===''){
        return
    };

    const tarea ={
        id: Date.now(),
        Text:input.value,
        estado:false,
    };

    tareas[tarea.id]=tarea; 
    formulario.reset();
    input.focus();
    pintarTareas();
}

const pintarTareas=()=>{

    tareaList.innerHTML="";
    Object.values(tareas).forEach(tarea=>{
    const clone = template.cloneNode(true)
    clone.querySelector('p').textContent = tarea.texto;
    if(tarea.estado){

        clone.querySelector('.alert').classList.replace('alert-success',)
    }
    })
}

