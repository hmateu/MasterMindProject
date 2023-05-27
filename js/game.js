//Calcula el número de filas que tiene el tablero
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

// Calcula los índices donde guardará los colores
let availableColours = JSON.parse(sessionStorage.getItem("colours"));
const calculateRandom = () => {
    let randomNumber = [];
    for (let i = 0; i < 4; i++) {
        randomNumber.push(Math.floor(Math.random() * availableColours.length));
    }
    return randomNumber;
}

//Pinta la combinación ganadora
const paintWinner = () => {
    let winnerSquareColours = document.getElementsByClassName("winnerChoiseClass");
    let arrWinnerSquareColours = Array.from(winnerSquareColours);

    console.log(`Números aleatorios = ${calculateRandom()}`)
    availableColours.forEach((element, i) => {
        console.log(`Elemento de availableColours ${element}`);
        arrWinnerSquareColours[i].style.background = availableColours[calculateRandom()[i]];
        arrWinnerSquareColours[i].style.border = ".15em solid white";
    });
    console.log(`Array winner tiene = ${arrWinnerSquareColours}`)
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

//Captura el color que pulsa el usuario y lo guarda en la combinación que ha hecho el usuario
let currentChoice = [];
const paintSquare = (id) => {
    switch (id) {
        case "a0":
            // console.log(availableColours[0])
            if(currentChoice.length<4) currentChoice.push(availableColours[0]);
            console.log(currentChoice);
            break;
        case "a1":
            // console.log(availableColours[1])
            if(currentChoice.length<4) currentChoice.push(availableColours[1]);
            console.log(currentChoice);
            break;
        case "a2":
            // console.log(availableColours[2])
            if(currentChoice.length<4) currentChoice.push(availableColours[2]);
            console.log(currentChoice);
            break;
        case "a3":
            // console.log(availableColours[3])
            if(currentChoice.length<4) currentChoice.push(availableColours[3]);
            console.log(currentChoice);
            break;
        case "a4":
            // console.log(availableColours[4])
            if(currentChoice.length<4) currentChoice.push(availableColours[4]);
            console.log(currentChoice);
            break;
        default:
            if(currentChoice.length<4) currentChoice.push(availableColours[5]);
            console.log(currentChoice);
            break;
    }
}

//Crea las filas del tablero
const createRow = () => {
    let idRow = 0;
    let idBall = 0;
    let idHintBall = 0;
    let board = document.getElementById("board");

    let row = document.createElement("div");
    row.className = "row";
    row.id = `row${idRow}`;
    idRow++;

    let balls = document.createElement("div");
    balls.className = "balls";

    for (let i = 0; i < 4; i++) {
        let ball = document.createElement("div");
        ball.className = "ball";
        ball.id = `row${idRow}-ball${idBall}`;
        balls.appendChild(ball);
        idBall++;
    }

    let hintBalls = document.createElement("div");
    hintBalls.className = "hintBalls";

    for (let i = 0; i < 4; i++) {
        let hintBall = document.createElement("div");
        hintBall.className = "hintBall";
        hintBall.id = `row${idRow}-hintBaill${idHintBall}`
        hintBalls.appendChild(hintBall);
        idHintBall++;
    }

    row.appendChild(balls);
    row.appendChild(hintBalls);
    board.appendChild(row);

    
}

//Pinta el tablero en pantalla dependiendo de la dificultad
const paintBoard = nRows => {
    for(let i=0; i<nRows; i++){
        createRow();
    }
}

paintBoard(nRows); 

paintAvailable();

paintWinner();


