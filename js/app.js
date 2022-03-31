//Definimos el nombre del jugador
const nombre = prompt("Bienvenido a la mesa de Blackjack, como es tu nombre?");

alert(`Hola ${nombre}, te deseo mucha suerte, a jugar!!`);

let credito = 0;
let apuestaJugador = 0;
let manoUser = 0;
let manoCrupier = 0;

cargoCredito();

function cargoCredito(){
//Cargamos crédito, si el usuario quiere usar String o numeros con comas, volverá al bucle
while ((credito <= 0) | (credito != parseInt(credito))) {

    credito = prompt("¿ Cuanto saldo quieres cargar ? Ej: 1000");

    if (credito != parseInt(credito)){
        alert(`Ingresaste un valor inválido`);
    }
    
    else
        alert(`Tu saldo es de: ${credito} Dolares`);

    apuesta();
        
}
}



function apuesta(){

    if (credito <= 0){
        alert("Te quedaste sin saldo, a continuación podrás cargar salgo.")
        cargoCredito()
    }

    do {
        apuestaJugador = parseInt(prompt("¿ Cuanto saldo quieres apostar ?"));
        

    } while ((apuestaJugador > credito) | (apuestaJugador != parseInt(apuestaJugador)))

    alert(`Tengo ${credito} en credito y ${apuestaJugador} es mi apuesta`)
    manoUser = 0;
    manoCrupier = 0;
    repartoInicialUser()
};



function repartoInicialUser(){
    let cartaRandom = Math.random()* 13;
    cartaRandom = Math.round(cartaRandom);

    let puntos = 0;

    switch(cartaRandom){

        case 0:
            if ((manoUser + 11) < 22){
                puntos = 11
                break
            }
            puntos = 1;
            break

        case 1:
            puntos = 1;
            break

        case 2:
            puntos = 2;
            break

        case 3:
            puntos = 3;
            break

        case 4:
            puntos = 4;
            break

        case 5:
            puntos = 5;
            break

        case 6:
            puntos = 6;
            break

        case 7:
            puntos = 7;
            break

        case 8:
            puntos = 8;
            break

        case 9:
            puntos = 9;
            break

        case 10:
            puntos = 10;
            break

        case 11:
            puntos = 10;
            break
    
        case 12:
            puntos = 10;
            break
    
        case 13:
            puntos = 10;
            break


    }

    manoUser = manoUser + puntos;

    alert(`Obtuviste un ${puntos}, sumas ${manoUser}`)

    if (manoUser > 21){

        alert(`Superaste los 21 puntos, PERDISTE: ${apuestaJugador} Dolares`)
        credito = parseInt(credito) - parseInt(apuestaJugador)
        alert(`Tu saldo es de: ${credito} Dolares`);

        let seguirJugando = prompt("¿ Quieres seguir jugando ? (Y/n)")
        seguirJugando = seguirJugando.toLocaleLowerCase()
    
        if (seguirJugando == "y"){
            apuesta()
        }else if (seguirJugando == "n") {
            return
        }else {
            apuesta()
        }
    }

    pedirOtraCarta()

}

function pedirOtraCarta(){
let pedirOtra = prompt("¿ Quieres pedir otra carta ? (Y/n)")
    pedirOtra = pedirOtra.toLocaleLowerCase()

if (pedirOtra == "y"){
    repartoInicialUser()
} else if (pedirOtra == "n") {
    repartoCrupier()
} else{
    repartoInicialUser()
}

}

function repartoCrupier(){

    do{

        let cartaRandom = Math.random()* 13;
        cartaRandom = Math.round(cartaRandom);

        switch(cartaRandom){

            case 0:
                if ((manoUser + 11) < 22){
                    puntos = 11
                    break
                }
                puntos = 1;
                break
    
            case 1:
                puntos = 1;
                break
    
            case 2:
                puntos = 2;
                break
    
            case 3:
                puntos = 3;
                break
    
            case 4:
                puntos = 4;
                break
    
            case 5:
                puntos = 5;
                break
    
            case 6:
                puntos = 6;
                break
    
            case 7:
                puntos = 7;
                break
    
            case 8:
                puntos = 8;
                break
    
            case 9:
                puntos = 9;
                break
    
            case 10:
                puntos = 10;
                break
    
            case 11:
                puntos = 10;
                break
        
            case 12:
                puntos = 10;
                break
        
            case 13:
                puntos = 10;
                break
                
        }

        manoCrupier = manoCrupier + puntos

    }while (manoCrupier < 17)


    if ((manoCrupier > manoUser) && (manoCrupier < 22)){
        alert(`El crupier obtuvo ${manoCrupier} puntos, la casa gana!! Perdiste ${apuestaJugador} Dolares!!`)
        credito = parseInt(credito) - parseInt(apuestaJugador)
        alert(`Tu saldo es de: ${credito} Dolares`);
    }

    if ((manoCrupier < manoUser) | (manoCrupier > 21)){
        alert(`El crupier obtuvo ${manoCrupier} puntos, tu ganas, felicidades ganaste ${apuestaJugador} Dolares!!!`)
        credito = parseInt(credito) + parseInt(apuestaJugador)
        alert(`Tu saldo es de: ${credito} Dolares`);
    }

    if (manoCrupier == manoUser){
        alert(`El crupier obtuvo ${manoCrupier} puntos, tenemos un empate, se devuele el monto de ${apuestaJugador} Dolares!!!`)
        alert(`Tu saldo es de: ${credito} Dolares`);
    }

    let seguirJugando = prompt("¿ Quieres seguir jugando ? (Y/n)")
    seguirJugando = seguirJugando.toLocaleLowerCase()

if (seguirJugando == "y"){
    apuesta()
} else if (seguirJugando == "n"){
    return
} else {
    apuesta()
}
}