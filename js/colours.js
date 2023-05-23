let difficulty = window.sessionStorage.getItem("difficulty");
if(difficulty == "easyLvl"){
    document.getElementById("easy").classList.remove("hidden");
    window.sessionStorage.setItem("difficulty",difficulty);
} else if(difficulty == "mediumLvl"){
    document.getElementById("medium").classList.remove("hidden");
    window.sessionStorage.setItem("difficulty",difficulty);
} else{
    document.getElementById("hard").classList.remove("hidden");
    window.sessionStorage.setItem("difficulty",difficulty);
}

const colorPickers = document.querySelectorAll("#easy .inputColours");
const colorBall = document.querySelectorAll("#easy .colour");
colorPickers.forEach((picker, i) => {
    picker.addEventListener("input", (e) => {
        const color = e.target.value;
        colorBall[i].style.background = color;
    })
})