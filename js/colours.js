// Muestra la elección de colores según la dificultad elegida
let difficulty = window.sessionStorage.getItem("difficulty");
if(difficulty == "easy"){
    document.getElementById("easy").classList.remove("hidden");
} else if(difficulty == "medium"){
    document.getElementById("medium").classList.remove("hidden");
} else{
    document.getElementById("hard").classList.remove("hidden");
}

//Color Picker
const colorPickers = document.querySelectorAll(`#${difficulty} .inputColours`);
const colorBall = document.querySelectorAll(`#${difficulty} .colour`);

//Guardar colores
document.getElementById("playBtn").addEventListener("click",() => {
    const arrayColorPickers = Array.from(colorPickers);
    const gameColours = arrayColorPickers.map(element => element.value);
    sessionStorage.setItem("colours",JSON.stringify(gameColours));
    window.location.href="./game.html";
})