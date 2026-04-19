let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
let maxIntentos = 3; // modo desafío


function verificarNumero() {

    let campo = document.getElementById("numeroUsuario");
    let numero = campo.value;

    if (numero === "") {
        alert("Debe ingresar un número");
        return;
    }

if (numero < 1 || numero > 10) {
    document.getElementById("mensaje").innerHTML =
    "⚠️ Solo puedes usar números del 1 al 10";
    return;
}

    
    if (numero < 1) {
        numero = 1;
    } else if (numero > 10) {
        numero = 10;
    }

    intentos++;

    // 🔹 Verificar si ganó
    if (numero === numeroSecreto) {

        document.getElementById("mensaje").innerHTML =
        "🎉 Felicitaciones, acertaste el número secreto";

        document.getElementById("intentos").innerHTML =
        "Adivinaste en " + intentos + " intento(s)";

        return; // termina la función

    }

    // 🔹 Si no acertó pero aún tiene intentos
    if (intentos < maxIntentos) {

        if (numero < numeroSecreto) {
            document.getElementById("mensaje").innerHTML =
            "El número secreto es mayor";
        } else {
            document.getElementById("mensaje").innerHTML =
            "El número secreto es menor";
        }

        document.getElementById("intentos").innerHTML =
        "Intento " + intentos + " de " + maxIntentos;

    } 
    
    // 🔹 Si se quedó sin intentos
    else {

        document.getElementById("mensaje").innerHTML =
        "❌ Perdiste. El número era " + numeroSecreto;

        document.getElementById("intentos").innerHTML =
        "Usaste los " + maxIntentos + " intentos";
    }

    campo.value = "";
    campo.focus();
}


function nuevoJuego() {

    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;

    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("intentos").innerHTML = "";
    document.getElementById("numeroUsuario").value = "";
}
