const contenedor = document.querySelector(".contenedor")

const pokemonName=document.querySelector("#pokemon-name")
const pokemonImg = document.querySelector("#pokemon-img")
const pokemonPeso = document.querySelector("#pokemon_peso")
const pokemonHabilidad1 = document.querySelector("#pokemon_habilidad1")
const pokemonHabilidad2 = document.querySelector("#pokemon_habilidad2")
const pokemonTipo= document.querySelector("#pokemon_tipo")
const fondo =document.querySelector(".fondo")
const fetchPokemon = async()=>{
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    cardTillas( data.results);
    
}

const cardTillas = (poke)=> {
    const  imagesLink= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    poke.map(async(pk,cod) =>{
        const bgcolor = await getColorPokemon(cod+1)
        const row = document.createElement('div');
        row.classList.add("pokemon-grid")
        row.innerHTML=`
        <div class="div-grid" style="background-color:${bgcolor}">
        <img src = '${imagesLink}${cod+1}.svg'>
        <span class="color-span">N-${cod+1}</span>
        <p class="nombre-pokemon">${pk.name}</p> 
        <btn class="btn btn-danger w-100 py-2" onclick='obtenerDetailPokemon("${pk.url}")' data-bs-toggle='modal' data-bs-target="#modalPokemon">VER DETALLE</btn>
        </div>

        `;
        contenedor.appendChild(row);
    }
    )
    
}
fetchPokemon()
const obtenerDetailPokemon = async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    pokemonImg.src = data.sprites.other.dream_world.front_default;
    pokemonName.innerHTML= data.name;
    pokemonPeso.innerHTML =data.weight +" KG " 
    pokemonHabilidad1.innerHTML = data.abilities[0].ability.name;
    pokemonHabilidad2.innerHTML = data.abilities[1].ability.name;
    pokemonTipo.innerHTML = data.types[0].type.name;
 
console.log(data)

}

const color ={
    red: "rgba(255, 48, 50, 0.7)",
    green: "rgba(83, 180, 50, 0.7)",
    blue: "rgba(113, 104, 226, 0.7)",
    brown: "rgba(113, 104, 226, 0.7)",
    purple: "rgba(113, 104, 226, 0.7)",
    pink: "rgba(255, 48, 50, 0.7)",
    yellow: "rgba(229, 216, 0, 0.6)",
  };

const getColorPokemon = async (id) =>{

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const data = await response.json();
    //el propblema del api es que nos da colores que no son tan boinitos 
    //para pdoer crea o utilizar un color alternativio
    //creamo un diccioanario de color conde el key ser el color base 
    // si data.color.name = red
    // va buscar dentro del objeto el color por key 
    //conel key es rojo nos retornara el rgba 

    console.log(data.color.name);
    return color [data.color.name];

  }

