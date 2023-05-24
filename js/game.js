//Combinación ganadora
let winnerChoice = [4, 6, 1, 5];
//Combinación de cada jugada
let currentChoice = [4, 1, 6, 5];
//Aciertos en cada jugada
let matchBall = [];
//Bola acertada en ubicación incorrecta
let wrongPositionBall = [];
//Cada acierto de bola en su ubicación correcta suma 1. Si llega a 4 es porque ha ganado en modo fácil
let successBall = 0;
//Cada acierto de bola que no este en su ubicación correcta suma 1.
let unSuccessBall = 0;
//Guarda la posición de la bola que se ha acertado
let whenMatch = [];
//Guarda la posición de la bola que se ha acertado el color pero no la posición
let whenUnMatch = [];

//Cada vez que haya una coincidencia sumo 1 a successBall
console.log(`>> EMPIEZAN las comparaciones <<`);
console.log(`winnerChoice = [${winnerChoice}]`);
console.log(`currentChoice = [${currentChoice}]`);
console.log("");
winnerChoice.map((element, i) => {
    //Si la bola de winnerChoice es igual a la de currentChoice
    if (element == currentChoice[i]) {
        console.log(`WinnerChoice[${i}] = ${element}`);
        console.log(`CurrentChoice[${i}] = ${currentChoice[i]}`);
        console.log("¡¡ MATCH !!");
        console.log("");
        matchBall[i] = "true";
        successBall++;
    } else {
        //Si la bola es diferente, la comparo en el resto de bolas que quedan del currentChoice
        console.log(`WinnerChoice[${i}] = ${element}`);
        console.log(`CurrentChoice[${i}] = ${currentChoice[i]}`);
        console.log("NO MATCH");
        for (let j = 0; j < winnerChoice.length; j++) {
            console.log(`Comparo ${element} de winnerChoice con posición ${j} del currentChoice, que es ${currentChoice[j]}`);
            if(element == currentChoice[j]){
                console.log(`Element (${element}) es igual a posición ${j} del currentChoice ${currentChoice[j]}`);
                unSuccessBall++;
            }
        }
        console.log("");
    }
})
console.log(`>> TERMINAN las comparaciones <<`);
console.log("");

//Averiguar si ha ganado la partida o continua jugando
if (successBall == 4) {
    console.log("¡¡ENHORABUENA!! Ha ganado la partida.");
} else {
    console.log("No has acertado la combinación ganadora");
    console.log("Sigue jugando");
    console.log("");
    //Sacar la posición de las bolas que se han acerado.
    matchBall.map((element, i) => {
        if (element == "true") {
            whenMatch.push(i);
        }
    })

    console.log(`Hay ${whenMatch.length} bola/s en la posición correcta`);
    console.log(`Hay ${unSuccessBall} bola/s en una posición diferente`);
    // console.log(`Hay ${wrongPositionBall.length} bolas en la posición correcta`);
}

//Averigua cuantas bolas hay en la winnerChoice, aunque no esten en el lugar correcto





let board = document.getElementById("board");
let bigCircle;
let circles;

const createBoard = (nRows) => {
    for(let i = 1; i <= nRows; i++){
        newRow = document.createElement("div");
        newRow.className = "board";
        for(let j = 0; j < 5; j++){
            if(j < 4) {
                bigCircle = document.createElement("div");
                bigCircle.className = "bigCircle";
                newRow.appendChild(bigCircle);
            } else {
                circles = document.createElement("div");
                circles.className = "circles";
                newRow.appendChild(circles);
                for(let k = 0; k < 4; k++){
                    smallCircles = document.createElement("div");
                    smallCircles.className = "smallCircles";
                    circles.appendChild(smallCircles);
                }
            }
        }
    }
    board.appendChild(newRow);
}
createBoard(3);