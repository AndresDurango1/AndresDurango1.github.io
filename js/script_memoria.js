imagePaths = [
    './recursos/img/cargos_conexion.png',
    './recursos/img/contrato_hogares.png',
    './recursos/img/autorizaciones.png',
    './recursos/img/datos_titular.png'
];
let shuffledImages = [];
let flippedCards = [];
let foundPairs = 0;
let attempts = 0;
let gameStarted = false;
const gameBoard = document.getElementById('gameBoard');
// Llama a startGame() al cargar la página
window.onload = startGame;
function startGame() {
    if (gameStarted) {
        return;
    }
    gameStarted = true;
    shuffledImages = shuffle([...imagePaths, ...imagePaths]);
    flippedCards = [];
    foundPairs = 0;
    attempts = 0;
    gameBoard.innerHTML = '';
    for (let i = 0; i < shuffledImages.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = i;
        const cardImage = document.createElement('img');
        cardImage.src = shuffledImages[i];
        cardImage.classList.add('hidden');
        card.appendChild(cardImage);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }
}
function flipCard() {
    if (!gameStarted || this.classList.contains('flipped') || flippedCards.length >= 2) {
        return;
    }
    const cardImage = this.querySelector('img');
    cardImage.classList.remove('hidden');
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        attempts++;
        setTimeout(checkMatch, 1000);
    }
}
function checkMatch() {
    const [card1, card2] = flippedCards;
    const image1 = card1.querySelector('img');
    const image2 = card2.querySelector('img');
    if (image1.src === image2.src) {
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
        flippedCards = [];
        foundPairs++;
        if (foundPairs === imagePaths.length) {
            // Mostrar una alerta cuando el jugador complete el juego
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Has pasado correctamente.',
                confirmButtonColor: '#007bff',
              }).then(() => {
                const contenedorAlerta = document.querySelector('.swal2-container');
                contenedorAlerta.computedStyleMap.display = "none";
              });
        }
    } else {
        setTimeout(() => {
            const cardImages = document.querySelectorAll('.card img');
            cardImages.forEach(img => img.classList.add('hidden'));
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex, tempValue;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array;
}