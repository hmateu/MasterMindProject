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
    for (let i = 0; i < 4; i++) {
        arrWinnerSquareColours[i].style.background = availableColours[calculateRandom()[i]];
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
        rgbSinParentesis = element.style.background;
        // Los tres argumentos para la función que pasa de RGB a Hexadecimal
        argR = parseInt(rgbSinParentesis.slice(4, -1).split(",")[0]);
        argG = parseInt(rgbSinParentesis.slice(4, -1).split(",")[1]);
        argB = parseInt(rgbSinParentesis.slice(4, -1).split(",")[2]);
        rgbToHexadecimal = rgbToHex(argR, argG, argB);
        winnerChoice.push(rgbToHexadecimal);
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

let victory = false;
let successBall = 0;
const rowValidate = () => {
    if (idOfRow < nRows) {
        const hintBalls = Array.from(document.querySelectorAll(`#row${idOfRow} .hintBalls .hintBall`));
        successBall = 0;
        winnerChoice.forEach((winner, i) => {
            if (winner === currentChoice[i]) {
                hintBalls[i].style.background = "black";
                successBall++;
                victory = true;
            } else {
                const firstIndex = winnerChoice.findIndex((item) => item === currentChoice[i]);
                if (firstIndex !== -1 && firstIndex !== i) {
                    hintBalls[i].style.background = "white";
                    victory = false;
                }
            }
        });
        idOfRow += 1;
        currentChoice = [];
        checkButton.classList.add("disabled");
        if (idOfRow == nRows) {
            if (victory && successBall == 4) {
                window.location.href="../pages/winner.html"
            } else {
                window.location.href="../pages/gameOver.html"
            }
        } else {
            if (victory && successBall == 4) {
                window.location.href="../pages/winner.html"
            }
        }
        return idOfRow;
    }
};

let idOfRow = 0;
let currentChoice = [];
let paintBall;
const createCurrentChoice = (id) => {
    if (currentChoice.length < 3) {
        checkButton.classList.add("disabled");

    } else {
        checkButton.classList.remove("disabled");

    }
    switch (id) {
        case "a0":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[0]);
                paintBall = Array.from(document.querySelectorAll(`#row${idOfRow} .ball`));
                paintBall.forEach((element, i) => {
                    element.style.background = currentChoice[i];
                });
            } else {
                return currentChoice;
            }
            break;
        case "a1":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[1]);
                paintBall = Array.from(document.querySelectorAll(`#row${idOfRow} .ball`));
                paintBall.forEach((element, i) => {
                    element.style.background = currentChoice[i];
                });
            } else {
                return currentChoice;
            }
            break;
        case "a2":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[2]);
                paintBall = Array.from(document.querySelectorAll(`#row${idOfRow} .ball`));
                paintBall.forEach((element, i) => {
                    element.style.background = currentChoice[i];
                });
            } else {
                return currentChoice;
            }
            break;
        case "a3":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[3]);
                paintBall = Array.from(document.querySelectorAll(`#row${idOfRow} .ball`));
                paintBall.forEach((element, i) => {
                    element.style.background = currentChoice[i];
                });
            } else {
                return currentChoice;
            }
            break;
        case "a4":
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[4]);
                paintBall = Array.from(document.querySelectorAll(`#row${idOfRow} .ball`));
                paintBall.forEach((element, i) => {
                    element.style.background = currentChoice[i];
                });
            } else {
                return currentChoice;
            }
            break;
        default:
            if (currentChoice.length < 4) {
                currentChoice.push(availableColours[5]);
                paintBall = Array.from(document.querySelectorAll(`#row${idOfRow} .ball`));
                paintBall.forEach((element, i) => {
                    element.style.background = currentChoice[i];
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
}

//Pinta el tablero en pantalla dependiendo de la dificultad
const paintBoard = nRows => {
    for (let i = 0; i < nRows; i++) {
        createRow();
    }
}

paintBoard(nRows);
paintAvailable();
paintWinner();