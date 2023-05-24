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
colorPickers.forEach((picker, i) => {
    picker.addEventListener("input", (e) => {
        const color = e.target.value;
        colorBall[i].style.background = color;
    })
})

//Guardar colores
document.getElementById("playBtn").addEventListener("click",() => {
    const arrayColorPickers = Array.from(colorPickers);
    const gameColours = arrayColorPickers.map(element => element.value);
    sessionStorage.setItem("colours",JSON.stringify(gameColours));
    window.location.href="./game.html";
})