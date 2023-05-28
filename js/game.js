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

    for(let i = 0; i < 4; i++){
            // console.log(`Elemento de availableColours ${availableColours[i]}`);
        arrWinnerSquareColours[i].style.background = availableColours[calculateRandom()[i]];
        arrWinnerSquareColours[i].style.border = ".15em solid white";
    }
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
// Valida la fila que se ha completado en el tablero y cambia a la siguiente
const rowValidate = () => {
    // for(let i = 1; i<=nRows; i++){
        //     console.log("---------------------------------------- Esta es la i",i);
        // }
        
        if(idDeLaRow < nRows){
            return idDeLaRow;
            idDeLaRow++;
        }
    }
    let idDeLaRow = 0;
rowValidate();
//Captura el color que pulsa el usuario y lo guarda en la combinación que ha hecho el usuario
let currentChoice = [];
let bolaPintada;
const createCurrentChoice = (id) => {
    switch (id) {
        case "a0":
            if(currentChoice.length<4){
                currentChoice.push(availableColours[0])
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                // console.log(idDeLaRow)
                bolaPintada.forEach((element,i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice)
                        element.style.background = currentChoice[i];
                    // }
                });
            }else{
                return currentChoice;
            } 
            break;
        case "a1":
            if(currentChoice.length<4){
                currentChoice.push(availableColours[1]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element,i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice)
                        element.style.background = currentChoice[i];
                    // }
                });
            } else{
                return currentChoice;
            }
            break;
        case "a2":
            if(currentChoice.length<4){
                currentChoice.push(availableColours[2]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element,i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice)
                        element.style.background = currentChoice[i];
                    // }
                });
            } else{
                return currentChoice;
            }
            break;
        case "a3":
            if(currentChoice.length<4){
                currentChoice.push(availableColours[3]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element,i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice)
                        element.style.background = currentChoice[i];
                    // }
                });
            } else{
                return currentChoice;
            }
            break;
        case "a4":
            if(currentChoice.length<4){
                currentChoice.push(availableColours[4]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element,i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice)
                        element.style.background = currentChoice[i];
                    // }
                });
            } else{
                return currentChoice;
            }
            break;
        default:
            if(currentChoice.length<4){
                currentChoice.push(availableColours[5]);
                bolaPintada = Array.from(document.querySelectorAll(`#row${idDeLaRow} .ball`));
                bolaPintada.forEach((element,i) => {
                    // element.style.background ="blue";
                    // if(currentChoice[i] != undefined){
                    //     console.log(currentChoice)
                        element.style.background = currentChoice[i];
                    // }
                });
            } else{
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
        hintBall.id = `row${idRow}-hintBaill${idHintBall}`
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
    for(let i=0; i<nRows; i++){
        createRow();
    }
}

//Pinta la fila del tablero
// const pintaCurrentRow = (row) => {
    // if(row.id == 'row1'){
    //     // row.style.background="red";
    //     let arrBalls = Array.from(document.querySelectorAll('#row1 .ball'));
    //     console.log(arrBalls)
    //     arrBalls.forEach((element,i) => {
            // element.style.background ="blue";
            // if(currentChoice[i] != undefined){
            //     console.log(currentChoice)
            //     element.style.background = currentChoice[i];
            // }
        // });
    // }
// }
paintWinner();
paintBoard(nRows); 
paintAvailable();