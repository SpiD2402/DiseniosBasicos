let boton = document.querySelector("#buscar")
let nombre = document.querySelector("#name")
let inps = document.querySelector("#inps")
let imagen = document.querySelector("#imagen")


 const obtpokemon = async()=>{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    const data = await response.json();

    for (let index = 0; index < data.results.length; index++) {
            console.log(data.results[index].name)
        
    }
 } 

 obtpokemon()

