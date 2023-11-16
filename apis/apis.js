
//https://api.github.com/users/guillermosifu


const githubName = document.querySelector("#github-name")
const imgProfile= document.querySelector("#img-profile")
const githubJoined = document.querySelector("#github-joined")
const githubUserName= document.querySelector("#github-username")
const githubBio = document.querySelector("#github-joined")
const githubRepos = document.querySelector("#github-repos")
const githubFollowers=document.querySelector("#github-followers")
const githubFollowing = document.querySelector("#github-following")
const githubLocation= document.querySelector("#github-location")
const githubTwitter = document.querySelector("#github-twitter")

const githubActionSeach = document.querySelector("#github-action-search")
const githubInputSeach = document.querySelector("#github-search")

githubActionSeach.onclick=()=>{
    const username = githubInputSeach.value
    githubInputSeach.value = "";
    if (username ===""){

        Swal.fire({
            title:"error",
            text:"debes llenar el campo",
            icon:"error"
        })
        return;
    }
    obtenerDatosGithub(username);
}


/*const obtenerDatosGithub = async()=>{

    //como ejemploawait esta haciendo lo sgte
    //ejecuta fetch con la ulr y una vez que sabe la ejecucion fetch
    //recien hara el console log  osea mostrar
    const response= await fetch("https://api.github.com/users/")

// es decir que hasta que la ejecucion no termine no mostrara la sgte linea

    const data= await response.json();
    imgProfile.src = data.avatar_url

}
*/

githubInputSeach.addEventListener("keyup",function(event){

    if(event.key==="Enter"){

        obtenerDatosGithub(event.target.value)
    }

})








const obtenerDatosGithub = async(username="SpiD2402")=>{
    
    const response = await fetch(`https://api.github.com/users/${username}`)

    const data = await response.json();
    
    if(data.message ==="Not Found"){
        Swal.fire({
            title:"Error",
            text:"No se encontro el usuario",
            icon:"error"
        }) ;
        return;
    }

    setDataUser(data)
}
const formatDate= (fecha)=>{
    let date = new Date(fecha)
    return date.toISOString().split("T")[0];
}

const setDataUser= (data)=>{
    githubName.innerHTML= data.name 
    githubRepos.innerHTML=data.public_repos
    githubFollowers.innerHTML=data.followers
    githubFollowing.innerHTML=data.following
    githubJoined.innerHTML= formatDate(data.created_at)
    githubUserName.innerHTML=  `@${data.login}`
    
    imgProfile.src = data.avatar_url

}

obtenerDatosGithub()