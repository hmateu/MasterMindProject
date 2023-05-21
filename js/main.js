let levelBtn = document.getElementsByClassName("levelBtn");
let arrayLevel = Array.from(levelBtn);
arrayLevel.map(element => {
    element.addEventListener("click", (e) => {
        if (e.target.id == "easyLvl") {
            // difficultyChoice("easyLvl");
            window.sessionStorage.setItem("difficulty",e.target.id);
            window.location.href="../pages/colours.html";
        } else if(e.target.id == "mediumLvl"){
            // difficultyChoice("mediumLvl");
            window.sessionStorage.setItem("difficulty",e.target.id);
            window.location.href="../pages/colours.html";
        }else{
            // difficultyChoice("hardLvl");
            window.sessionStorage.setItem("difficulty",e.target.id);
            window.location.href="../pages/colours.html";
        }
    })
});