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
        console.log(hintBall.id)
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