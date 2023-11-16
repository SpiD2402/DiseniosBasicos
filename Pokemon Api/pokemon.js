
//atrapamos el  div en html 
const pokemonContainer = document.querySelector("#row-pokemons");


//vamois a crear una funcion para obtner los Datos 

const obtenerPokemones = async ()=>{
    try{  
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    console.log(data.results);  
    setPokemonsInView(data.results)
  }catch(error){
    console.log(error)    
  }
}


obtenerPokemones()
// vamos a realizart una funcion la cual se enacrgye de pintar los pokemones


const setPokemonsInView = (results)=>{
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

    results.map(async (results,index)=>{
        //por cada iteracion crea la variable html con el contenido div que ocupara 
      const html =`
      <div class="col-md-3 mt-3">
      <div class="card">
      <img 
      class = "card-img-top mt-2"
      width ="100"
      height ="100"
      src='${imgUrl}${index + 1}.svg'> 
      <div class = "card-body text-center">
      <h6 class = "text-title text-white">
      N.-${index + 1}</h6>
      <h4 class = "text-title">${results.name}</h4>
      </div> 
      </div>
      </div>  `;
      //despues de craea el html concatenamnos el html y el container 

      pokemonContainer.innerHTML+=html

    })
}


setPokemonsInView()