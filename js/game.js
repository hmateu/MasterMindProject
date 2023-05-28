//Calcula el número de filas que tiene el tablero
let nRows = sessionStorage.getItem("difficulty");
const checkButton = document.querySelector(".checkBtn");
let winnerChoice = [];
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

// Calcula los índices donde guardará los colores
let availableColours = JSON.parse(sessionStorage.getItem("colours"));
const calculateRandom = () => {
    let randomNumber = [];
    for (let i = 0; i < 4; i++) {
        randomNumber.push(Math.floor(Math.random() * availableColours.length));
    }
    return randomNumber;
}
//Pasar de RGB a Hexadecimal
const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
//Pinta la combinación ganadora
const paintWinner = () => {
    let winnerSquareColours = document.getElementsByClassName("winnerChoiceClass");
    let arrWinnerSquareColours = Array.from(winnerSquareColours);

    // console.log(`Números aleatorios = ${calculateRandom()}`);
    // console.log("___________")
    // console.log(`Elemento de availableColours ${availableColours}`);
    // console.log("___________")
    for (let i = 0; i < 4; i++) {
        arrWinnerSquareColours[i].style.background = availableColours[calculateRandom()[i]];
        // console.log(arrWinnerSquareColours,"------------------------------");
        // winnerChoice[i] = arrWinnerSquareColours[i];
        arrWinnerSquareColours[i].style.border = ".15em solid white";
    }
    let rgbSinParentesis;
    // Cada color del RGB pasado a Hexadecimal para después rellenar el array winnerChoice
    let rgbToHexadecimal;
    //Los argumentos para la función que pasa de RGB a Hex
    let argR;
    let argG;
    let argB;
    arrWinnerSquareColours.forEach((element, i) => {
        // console.log(`winnerChoice = ${element.style.background}`);
        rgbSinParentesis = element.style.background;
        // console.log(rgbSinParentesis);
        // console.log(rgbSinParentesis.slice(4,-1).split(","));
        argR = parseInt(rgbSinParentesis.slice(4, -1).split(",")[0]);
        argG = parseInt(rgbSinParentesis.slice(4, -1).split(",")[1]);
        argB = parseInt(rgbSinParentesis.slice(4, -1).split(",")[2]);
        // console.log("winnerChoice = ",argR,argG,argB)
        // console.log("");
        rgbToHexadecimal = rgbToHex(argR, argG, argB);
        // console.log("tipo de winnerChoice cuando lo transformo a Hexadecimal",rgbToHexadecimal);
        winnerChoice.push(rgbToHexadecimal);
        // console.log(`winnerChoice = ${rgbToHex(argR,argG,argB)}`);
        // console.log("")
        // console.log(`Colores de winner${rgbToHex(rgbSinParentesis.slice(4,-1).split(",")[0],rgbSinParentesis.slice(4,-1).split(",")[1],rgbSinParentesis.slice(4,-1).split(",")[2])}`);
    });
}

//Pinta la selección de colores que ha hecho el usuario
const paintAvailable = () => {
    let availableSquareColours = document.querySelectorAll(".availableChoiceArr .colorSquare");
    let arrAvailableSquareColours = Array.from(availableSquareColours);
    availableColours.forEach((element, i) => {
        arrAvailableSquareColours[i].style.background = availableColours[i];
        arrAvailableSquareColours[i].style.border = ".15em solid white";
    });
}

let victoria = false;
const rowValidate = () => {
    console.log(idDeLaRow < nRows);

    if (idDeLaRow < nRows) {
        console.log("----------------");
        console.log(`Winner = ${winnerChoice}`);
        console.log(`Current = ${currentChoice}`);
        console.log("----------------");

        const hintBalls = Array.from(document.querySelectorAll(`#row${idDeLaRow} .hintBalls .hintBall`));
        winnerChoice.forEach((winner, i) => {
            if (winner === currentChoice[i]) {
                hintBalls[i].style.background = "black";
                victoria = true;
            }
        });
        idDeLaRow += 1;
        currentChoice = [];
        checkButton.classList.add("disabled");
        if (idDeLaRow == nRows) {
            if (victoria) {
                alert("¡Has ganado!");
            } else {
                alert("Has perdido...");
            }
        } else {
            if (victoria) {
                alert("¡Has ganado!");
            }
        }

        return idDeLaRow;
    }
};
let idDeLaRow = 0;
// rowValidate();
//Captura el color que pulsa el usuario y lo guarda en la combinación que ha hecho el usuario
let currentChoice = [];
let bolaPintada;
const createCurrentChoice = (id) => {
    // console.log("***",currentChoice);
    if (currentChoice.length < 3) {
        checkButton.classList.add("disabled");

    } else {
        checkButton.classList.remove("disabled");

    }
    switch (id) {
        case "a0":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[0]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                // console.log(idDeLaRow);
                bolaPintada.forEach((element, i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    // console.log(currentChoice);
                    element.style.background = currentChoice[i];
                    // }
                });
            } else {
                return currentChoice;
            }
            break;
        case "a1":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[1]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element, i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice);
                    element.style.background = currentChoice[i];
                    // }
                });
            } else {
                return currentChoice;
            }
            break;
        case "a2":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[2]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element, i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice);
                    element.style.background = currentChoice[i];
                    // }
                });
            } else {
                return currentChoice;
            }
            break;
        case "a3":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[3]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element, i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice);
                    element.style.background = currentChoice[i];
                    // }
                });
            } else {
                return currentChoice;
            }
            break;
        case "a4":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[4]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element, i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice);
                    element.style.background = currentChoice[i];
                    // }
                });
            } else {
                return currentChoice;
            }
            break;
        default:
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[5]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element, i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice);
                    element.style.background = currentChoice[i];
                    // }
                });
            } else {
                return currentChoice;
            }
            break;
    }
}
//Crea las filas del tablero
let board;
let row;
let idRow = 0;
let ball;
let balls;
let idBall = 0;
let hintBall;
let hintBalls;
let idHintBall = 0;
const createRow = () => {
    board = document.getElementById("board");

    row = document.createElement("div");
    row.className = "row";
    row.id = `row${idRow}`;
    idRow++;

    balls = document.createElement("div");
    balls.className = "balls";

    for (let i = 0; i < 4; i++) {
        ball = document.createElement("div");
        ball.className = "ball";
        ball.id = `row${idRow}-ball${idBall}`;
        balls.appendChild(ball);
        idBall++;
    }

    hintBalls = document.createElement("div");
    hintBalls.className = "hintBalls";

    for (let i = 0; i < 4; i++) {
        hintBall = document.createElement("div");
        hintBall.className = "hintBall";
        hintBall.id = `row${idRow}-hintBaill${idHintBall}`;
        hintBalls.appendChild(hintBall);
        idHintBall++;
    }

    row.appendChild(balls);
    row.appendChild(hintBalls);
    board.appendChild(row);
    // pintaCurrentRow(row);


}

//Pinta el tablero en pantalla dependiendo de la dificultad
const paintBoard = nRows => {
    for (let i = 0; i < nRows; i++) {
        createRow();
    }
}

//Pinta la fila del tablero
// const pintaCurrentRow = (row) => {
// if(row.id == 'row1'){
//     // row.style.background="red";
//     let arrBalls = Array.from(document.querySelectorAll('#row1 .ball'));
//     console.log(arrBalls);
//     arrBalls.forEach((element,i) => {
// element.style.background ="blue";
// if(currentChoice[i] != undefined){
//     console.log(currentChoice);
//     element.style.background = currentChoice[i];
// }
// });
// }
// }

paintBoard(nRows);
paintAvailable();
paintWinner();