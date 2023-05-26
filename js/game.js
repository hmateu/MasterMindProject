//Crea las filas del tablero
const createRow = () => {
    let board = document.getElementById("board");

    let row = document.createElement("div");
    row.className = "row";

    let balls = document.createElement("div");
    balls.className = "balls";

    for (let i = 0; i < 4; i++) {
        let ball = document.createElement("div");
        ball.className = "ball";
        balls.appendChild(ball)
    }

    let hintBalls = document.createElement("div");
    hintBalls.className = "hintBalls";

    for (let i = 0; i < 4; i++) {
        let hintBall = document.createElement("div");
        hintBall.className = "hintBall";
        hintBalls.appendChild(hintBall);
    }

    row.appendChild(balls);
    row.appendChild(hintBalls);
    board.appendChild(row);
}
createRow();