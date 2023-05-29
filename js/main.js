// Captura el nivel elegido por el usuario y redirige a la página de colores
let levelBtn = document.getElementsByClassName("levelBtn");
let arrayLevel = Array.from(levelBtn);
arrayLevel.map(element => {
    element.addEventListener("click", (e) => {
        if (e.target.id == "easyLvl") {
            window.sessionStorage.setItem("difficulty","easy");
            window.location.href="../pages/colours.html";
        } else if(e.target.id == "mediumLvl"){
            window.sessionStorage.setItem("difficulty","medium");
            window.location.href="../pages/colours.html";
        }else{
            window.sessionStorage.setItem("difficulty","hard");
            window.location.href="../pages/colours.html";
        }
    })
});