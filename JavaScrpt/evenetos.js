const button = document.querySelector(".switch");
const circle = document.querySelector(".circle")
let mode = "light"
const title= document.querySelector("h1");
const container= document.querySelector(".container")

function lightMode(){

        button.className="switch";
        container.className="container";
        circle.className="circle";
        title.textContent="light mode";
}

function darkMode(){
    button.className="darkButton";
    container.className="darkContainer";
    circle.className="darkCircle";
    title.textContent="Dark Mode"
}

circle.addEventListener("click",()=>{
        if(mode=="light"){
            darkMode();
            mode="dark"
        }
        else{
            lightMode();
            mode="light"
        }
})