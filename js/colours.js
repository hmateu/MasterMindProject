let difficulty = window.sessionStorage.getItem("difficulty");
if(difficulty == "easyLvl"){
    document.getElementById("easy").classList.remove("hidden");
} else if(difficulty == "mediumLvl"){
    document.getElementById("medium").classList.remove("hidden");
} else{
    document.getElementById("hard").classList.remove("hidden");
}