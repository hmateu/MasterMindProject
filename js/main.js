//Combinación ganadora
let winnerChoice = [2, 4, 1, 5];
//Combinación de cada jugada
let currentChoice = [2, 3, 1, 5];
//Aciertos en cada jugada
let matchBall = [];
//Cada acierto de bola en su ubicación correcta suma 1. Si llega a 4 es porque ha ganado en modo fácil
let successBall = 0;
//Guarda la posición de la bola que se ha acertado
let whenMatch = [];

//Cada vez que haya una coincidencia sumo 1 a successBall
winnerChoice.map(
    (element, i) => {
        if (element == currentChoice[i]) {
            matchBall[i] = "true";
            successBall++;
        }
    })

//Averiguar si ha ganado la partida o continua jugando
if (successBall == 4) {
    alert("Ha ganado la partida");
} else {
    alert("Sigue probando");

    //Sacar la posición de las bolas que se han acerado.
    matchBall.map((element, i) => {
        if (element == "true") {
            whenMatch.push(i);
        }
    })
    alert(`Hay ${whenMatch.length} bolas en la posición correcta`);
}