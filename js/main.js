//Combinación ganadora
let winnerChoice = [5, 3, 1, 5];
//Combinación de cada jugada
let currentChoice = [2, 6, 1, 9];
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
winnerChoice.map((element, i) => {
    //Si la bola de winnerChoice es igual a la de currentChoice
    if (element == currentChoice[i]) {
        console.log("MATCH")
        matchBall[i] = "true";
        successBall++;
    } else {
        //Si la bola es diferente, la comparo en el resto de bolas que quedan del currentChoice
        console.log("NO MATCH")
        // for (let j = i++; j <= currentChoice.length; j++) {
        //     if (element == currentChoice[j]) {
        //         wrongPositionBall[i] = "true";
        //         unSuccessBall++;
        //     }
        // }
    }
})

//Averiguar si ha ganado la partida o continua jugando
if (successBall == 4) {
    console.log("Ha ganado la partida");
} else {
    console.log("Sigue probando");

    //Sacar la posición de las bolas que se han acerado.
    matchBall.map((element, i) => {
        if (element == "true") {
            whenMatch.push(i);
        }
    })
    //Sacar la posición de las bolas que se ha acertado el color pero no la posición

    for(i=0;i<whenMatch.length;i++){
        if(i==0){
            console.log(`La posición donde se encuentran las bolas que has acertado son:`);
            console.log(whenMatch[i]);
        }else{
            console.log(whenMatch[i]);
        }

    }
    console.log(`Hay ${whenMatch.length} bolas en la posición correcta`);
}

//Averigua cuantas bolas hay en la winnerChoice, aunque no esten en el lugar correcto