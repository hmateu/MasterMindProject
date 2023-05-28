const showRow = (id) => {
  console.log(`Soy la fila ${id}`)
}
const showYou = (id) => {
  document.getElementById(id).style.background = "red";
  console.log(`Soy ${id}`)
}

// Captura l adificultad para pintar el tablero 
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
// Pinta la combinación ganadora
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
    let winnerSquareColours = document.getElementsByClassName("winnerChoiceClass");
    let arrWinnerSquareColours = Array.from(winnerSquareColours);

    //Asigna colores aleatoriamente al array de combinación ganadora
    console.log(`Números aleatorios = ${calculateRandom()}`)
    for(let i = 0; i < 4; i++){
      arrWinnerSquareColours[i].style.background = availableColours[calculateRandom()[i]];
    }

    // availableColours.forEach((element, i) => {
    //     console.log(`Elemento de availableColours ${element}`);
    //     arrWinnerSquareColours[i].style.background = availableColours[calculateRandom()[i]]
        
    //     arrWinnerSquareColours[i].style.border = ".15em solid white";
    // });
    console.log(`Array winner tiene = ${arrWinnerSquareColours}`)
}


const paintAvailable = () => {
    // let availableColours = JSON.parse(sessionStorage.getItem("colours"));

    let availableSquareColours = document.querySelectorAll(".availableChoiceArr .colorSquare");
    let arrAvailableSquareColours = Array.from(availableSquareColours);
    console.log(arrAvailableSquareColours)
    availableColours.forEach((element, i) => {
        arrAvailableSquareColours[i].style.background = availableColours[i];
        arrAvailableSquareColours[i].style.border = ".15em solid white";
    });

    // console.log(available);
}
//Validará si has ganado o sigues jugando
const checkWinner = () => { };
// Crea el tablero dinámico
let board = document.getElementById("board");
let counter = 1;
const createBoardTest = () => {
  checkWinner();
  if (nRows > 1) {
    document.getElementById(`row${counter}`).removeAttribute("onclick");
    counter++;
    // contador para las clases e id
    let idBall1 = 1;
    let idBall2 = 2;
    let idBall3 = 3;
    let idBall4 = 4;
    let idHintBall1 = 1;
    let idHintBall2 = 2;
    let idHintBall3 = 3;
    let idHintBall4 = 4;
    board.innerHTML += `
      <div id='row${counter}' class='row'>${counter}
        <div class="ball" id='ball${idBall1}' onclick='showYou(${idBall1})'>b${idBall1}</div>
        <div class="ball" id='ball${idBall2}' onclick='showYou(${idBall2})'>b${idBall2}</div>
        <div class="ball" id='ball${idBall3}' onclick='showYou(${idBall3})'>b${idBall3}</div>
        <div class="ball" id='ball${idBall4}' onclick='showYou(${idBall4})'>b${idBall4}</div>
        <div class="hintBalls">
          <div class="hintBall" id='hintBall${idHintBall1}'>${idHintBall1}</div>
          <div class="hintBall" id='hintBall${idHintBall2}'>${idHintBall2}</div>
          <div class="hintBall" id='hintBall${idHintBall3}'>${idHintBall3}</div>
          <div class="hintBall" id='hintBall${idHintBall4}'>${idHintBall4}</div>
        </div>`;
    nRows -= 1;
  } else {
    alert("Has perdido");
  }
};
paintAvailable();
paintWinner();