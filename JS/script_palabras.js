const words = [
    { word: "contrato", hint: "Acuerdo que se diligenciará para hacer el proceso para los hogares"},
    { word: "cedula", hint: "¿Qué documento es indispensable para hacer el diligenciamiento por parte del cliente?"},
    { word: "tigo", hint: "La mejor empresa en la que vas a estar ;D" },
    { word: "residencia", hint: "Lugar donde brindaremos solución a la persona que desea adquirir nuestros servicios"}
];
let currentWordIndex = 0;
const wordContainer = document.getElementById('word-container')
const scrambledWordElement = document.getElementById("scrambled-word");
const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-button");
const resultElement = document.getElementById("result");

function scrambleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}
function displayNextWord() {
    if (currentWordIndex < words.length) {
        const currentWord = words[currentWordIndex];
        const scrambledWord = scrambleWord(currentWord.word);
        scrambledWordElement.textContent = scrambledWord;
        userInput.value = "";
        resultElement.textContent = "";
    } else {
        wordContainer.textContent = "";
        scrambledWordElement.textContent = "";
        resultElement.textContent = "¡FELICIDADES GUERRERO! ¡Has ordenado correctamente todas las palabras!";
        userInput.value = "";
        userInput.disabled = true;
        checkButton.disabled = true;
    }
}
checkButton.addEventListener("click", () => {
    const userGuess = userInput.value.toLowerCase();
    const currentWord = words[currentWordIndex];

    if (userGuess === currentWord.word) {
        resultElement.textContent = "¡Correcto!";
        currentWordIndex++;
        displayNextWord();
    } else {
        resultElement.textContent = `Pista: ${currentWord.hint}`;
    }
});
displayNextWord();
