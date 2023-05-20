//Combinación ganadora
let winnerChoice = [2,4,1,5];
//Combinación de cada jugada
let currentChoice = [2,4,1,5];
//Aciertos en cada jugada
let matchBall = [];
//Cada acierto de bola en su ubicación correcta suma 1. Si llega a 4 es porque ha ganado en modo fácil
let successBall = 0;

//Cada vez que haya una coincidencia sumo 1 a successBall
winnerChoice.map(
    (element,i) => {
        if(element == currentChoice[i]){
           successBall++;
        }
})

//Averiguar si ha ganado la partida o continua jugando
successBall == 4 ? alert("Ha ganado la partida") : alert("Sigue probando");