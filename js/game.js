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
            if (element == currentChoice[j]) {
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








//Calcula los índices donde guardará los colores
let availableColours = JSON.parse(sessionStorage.getItem("colours"));
const calculateRandom = () => {
    let randomNumber = [];
    for (let i = 0; i < 4; i++) {
        randomNumber.push(Math.floor(Math.random() * availableColours.length));
    }
    return randomNumber;
}
// console.log(`******* La secuencia de números ${calculateRandom()} *********`)
// console.log(`Los colores elegidos estan en availableColours, son ${availableColours} y son ${availableColours.length}`)
const paintWinner = () => {
    // let winnerSquareColours = document.querySelectorAll(".winnerChoiceArr .colorSquare");
    // let arrWinnerSquareColours = Array.from(winnerSquareColours);
    let winnerSquareColours = document.getElementsByClassName("winnerChoiseClass");
    let arrWinnerSquareColours = Array.from(winnerSquareColours);

    console.log(`Números aleatorios = ${calculateRandom()}`)
    availableColours.forEach((element, i) => {
        console.log(`Elemento de availableColours ${element}`);
        arrWinnerSquareColours[i].style.background = availableColours[calculateRandom()[i]];
        arrWinnerSquareColours[i].style.border = ".15em solid white";
        // arrWinnerSquareColours[i].style.background = availableColours[0]; //-------------------No cojo el color random
        // arrWinnerSquareColours[i].style.backgroundColor = "#ff0000";
        // arrWinnerSquareColours[i].style.background = element[calculateRandom()];
    });
    console.log(`Array winner tiene = ${arrWinnerSquareColours}`)
}


const paintAvailable = () => {
    // let availableColours = JSON.parse(sessionStorage.getItem("colours"));

    let availableSquareColours = document.querySelectorAll(".availableChoiceArr .colorSquare");
    let arrAvailableSquareColours = Array.from(availableSquareColours);
    // console.log(arrAvailableSquareColours)
    availableColours.forEach((element, i) => {
        arrAvailableSquareColours[i].style.background = availableColours[i];
        arrAvailableSquareColours[i].style.border = ".15em solid white";
    });

    // console.log(available);
}



const createBoard = (nRows) => {
    let board = document.getElementById("board");
    let bigCircle;
    let circles;
    //Id de las celdas donde van los colores en el tablero
    // let idColours=1;
    //Id de las celdas donde van las pistas
    // let idValidate=1;
    for (let i = 0; i < nRows; i++) {
        newRow = document.createElement("div");
        newRow.className = "board";
        newRow.id = i;

        //Selecciono una fila del tablero
        // if (newRow.id == 6) {
        //     newRow.style.background = "red";
        // }

        for (let j = 0; j < 5; j++) {
            if (j < 4) {
                bigCircle = document.createElement("div");
                bigCircle.className = "bigCircle";
                bigCircle.id = j;

                //Selecciono una celda color del tablero
                // if (bigCircle.id == 3) {
                //     bigCircle.style.background = "blue"
                // }

                // idColours++;
                newRow.appendChild(bigCircle);
            } else {
                circles = document.createElement("div");
                circles.className = "circles";
                newRow.appendChild(circles);
                for (let k = 0; k < 4; k++) {
                    smallCircles = document.createElement("div");
                    smallCircles.className = "smallCircles";
                    smallCircles.id = k;

                    //Selecciono una fila del tablero
                    if (newRow.id == 7) {
                        //Selecciono una celda color del tablero
                        if (bigCircle.id == 3) {
                            //Selecciono una chincheta del tablero
                            if (smallCircles.id == 3) {
                                newRow.style.background = "red";
                                bigCircle.style.background = "blue"
                                smallCircles.style.background = "lime"
                            }
                        }
                    }

                    // idValidate++;
                    circles.appendChild(smallCircles);
                }
            }
        }
        board.appendChild(newRow);
    }
}

let nRows = sessionStorage.getItem("difficulty");
switch (nRows) {
    case "easy":
        nRows = 10;
        break;
    case "medium":
        nRows = 8;
        break;

    default:
        nRows = 6;
        break;
}
createBoard(nRows);

paintAvailable();

paintWinner();