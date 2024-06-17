// Lista de palabras para el juego
const palabras = [
    {word :"tratamiento de datos", hint: "El primer formato que se debe diligenciar para un contrato hogar"}, 
    {word: "contrato hogar", hint:"Contrato que se debe diligenciar para brindar servicio en los hogares"}, 
    {word: "datos del usuario", hint: "Tercera etapa de la ruta del conocimiento mostrada en el primer video"},
    {word: "legalizacion de oferta", hint: "Cuarta etapa de la ruta del conocimiento mostrada en el primer video"} 

];
//para el teclado flotante
document.addEventListener("DOMContentLoaded", function() {
    const letterButtons = document.querySelectorAll('.letter-button');
    letterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const letra = this.getAttribute('data-letter'); // Obtiene la letra del botón
            manejarAdivinanza(letra);
        });
    });
    mostrarPalabra();
    mostrarLetrasAdivinadas();
});
// Elegir una palabra al azar del objeto palabras
let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
// Inicializar las variables del juego
let letrasAdivinadas = [];
let intentosRestantes = 6;
// Elementos del DOM
const wordElement = document.getElementById("word");
const lettersElement = document.getElementById("letters");
const messageElement = document.getElementById("message");
const hintElement = document.querySelector(".subtitulo");
// Mostrar la ayuda (hint) en el elemento h4
hintElement.textContent = "Pista: "+palabraSeleccionada.hint;
// Función para reiniciar el juego
function reiniciarJuego() {
    // Restablecer el juego a su estado inicial
    letrasAdivinadas = [];
    intentosRestantes = 6;
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    hintElement.textContent = palabraSeleccionada.hint;
    mostrarPalabra();
    mostrarLetrasAdivinadas();
    limpiarAhorcado();
    mostrarMensaje(".");
    // Ocultar los botones
    document.getElementById("message").style.color = "rgba(255, 255, 255, 0)";
    document.getElementById("message").style.background = "rgba(255, 255, 255, 0)";
    // document.getElementById("play-again").style.display = "none";
}
// Función para mostrar la palabra oculta
function mostrarPalabra() {
    let palabraMostrada = "";
    for (const letra of palabraSeleccionada.word) {
        if (letrasAdivinadas.includes(letra)) {
            palabraMostrada += letra;
        }
        else if (letra === ' ') {
            palabraMostrada += ' '; // Muestra los espacios directamente
        }
         else {
            palabraMostrada += " _ ";
        }
    }
    wordElement.textContent = palabraMostrada;
}
// Función para mostrar las letras adivinadas
function mostrarLetrasAdivinadas() {
    lettersElement.textContent = `Letras Marcadas: ${letrasAdivinadas.join(", ")}`;
}
// Función para mostrar el mensaje del juego
function mostrarMensaje(mensaje) {
    messageElement.textContent = mensaje;
    m
    messageElement.style.backgroundColor = "white";
}
// Función para dibujar las partes del ahorcado
function dibujarAhorcado() {
    const partesAhorcado = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"];
    for (let i = 0; i < 6 - intentosRestantes; i++) {
        const parte = partesAhorcado[i];
        const elemento = document.getElementById(parte);
        elemento.style.display = "block";
    }
}
// Función para verificar si el jugador ganó
function verificarVictoria() {
    if (!wordElement.textContent.includes(" _ ")) {
        mostrarMensaje("¡Ganaste! La palabra era: " + palabraSeleccionada.word);
    }
}
// Función para verificar si el jugador perdió
function verificarDerrota() {
    if (intentosRestantes === 0) {
        mostrarMensaje("¡Perdiste! La palabra era: " + palabraSeleccionada.word);
    }
}
// Evento al presionar una tecla
document.addEventListener("keydown", function (event) {
    const letra = event.key.toLowerCase();
    if (/[a-z\s]/.test(letra) && !letrasAdivinadas.includes(letra)) {
        letrasAdivinadas.push(letra);
        if (!palabraSeleccionada.word.includes(letra)) {
            intentosRestantes--;
            dibujarAhorcado();
        }
        mostrarPalabra();
        mostrarLetrasAdivinadas();
        verificarVictoria();
        verificarDerrota();
    }
});
function limpiarAhorcado() {
    const partesAhorcado = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"];
    for (const parte of partesAhorcado) {
        const elemento = document.getElementById(parte);
        elemento.style.display = "none";
    }
}
// Evento al hacer clic en el botón "Jugar de nuevo"
document.getElementById("play-again").addEventListener("click", reiniciarJuego);
// Evento al hacer clic en el botón "Ir a otra ruta"

function manejarAdivinanza(letra) {
    if (/[a-z\s]/.test(letra) && !letrasAdivinadas.includes(letra)) {
        letrasAdivinadas.push(letra);
        if (!palabraSeleccionada.word.includes(letra)) {
            intentosRestantes--;
            dibujarAhorcado();
        }
        mostrarPalabra();
        mostrarLetrasAdivinadas();
        verificarVictoria();
        verificarDerrota();
    }
}
// Inicialización del juego
mostrarPalabra();
mostrarLetrasAdivinadas();


