let levelBtn = document.getElementsByClassName("levelBtn");
let arrayLevel = Array.from(levelBtn);
arrayLevel.map(element => {
    element.addEventListener("click", (e) => {
        if (e.target.id == "easyLvl") {
            difficultyChoice("easyLvl");
            window.sessionStorage.setItem("difficulty",e.target.id);
            window.location.href="../pages/colours.html";
        } else if(e.target.id == "mediumLvl"){
            difficultyChoice("mediumLvl");
            window.sessionStorage.setItem("difficulty",e.target.id);
            window.location.href="../pages/colours.html";
        }else{
            difficultyChoice("hardLvl");
            window.sessionStorage.setItem("difficulty",e.target.id);
            window.location.href="../pages/colours.html";
        }
    })
});


const difficultyChoice = (difficulty) => {
    if(difficulty == "easyLvl"){
        alert(difficulty);
        // let level = document.getElementById("easy");
        // level.classList.remove("hidden");
    }else if(difficulty == "mediumLvl"){
        alert(difficulty);
        // let level = document.getElementById("medium");
        // level.classList.remove("hidden");
    }else{
        alert(difficulty);
        // let level = document.getElementById("hard");
        // level.classList.remove("hidden");
    }
}