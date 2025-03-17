let questionIndex = 0;
let dialogIndex = 0;
let dialogStep = 0;
let currentVideo = null;
const dialogos = [dialogos_1, dialogos_2];

//Definicion y Carga global de los elementos del DOM par usarlos dentro de las funciones 
const guestsContainer = document.querySelector('.guests-container');
const guestsDialog = document.getElementById("guests-dialog");
const guestsAudio = document.getElementById("guests-audio-player");

const presenterContainer = document.querySelector('.presenter-container');
const presenterDialogContainer = document.getElementById("presenter-dialog-container");
const presenterDialog = document.getElementById("presenter-dialog");
const presenterAudio = document.getElementById("presenter-audio-player");

const videoContainer = document.getElementById("video-container");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.querySelector('.options-container');

const btnContinue = document.getElementById("btn-continue");
const btnBack = document.getElementById("btn-back");
const loader = document.getElementById("loader");

btnContinue.addEventListener("click", function () {
    if (dialogStep < dialogos[dialogIndex].length) {
        showDialog(dialogos[dialogIndex], dialogStep);
        dialogStep++;
    } else {
        if (questionIndex < questions.length) {
            loadQuestion(questionIndex);
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Felicidades, has completado todas las preguntas!',
                showCancelButton: true,
                cancelButtonColor: '#FFC107',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0D6EFD',
                cancelButtonText: 'Ir a Créditos',
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.cancel) {
                    window.location.href = '../pages/credits.html';
                }
            });
        }
    }
});
btnBack.addEventListener("click", function () {
    // Detener cualquier audio que esté sonando antes de reproducir uno nuevo
    presenterAudio.pause();
    presenterAudio.currentTime = 0;
    guestsAudio.pause();
    guestsAudio.currentTime = 0;
    //Si se está viendo una pregunta, se debe ocultar antes de regresar al diálogo anterior
    questionContainer.style.display = "none";
    presenterDialogContainer.style.display = "flex";
    if (dialogStep > 1) {
        dialogStep -= 2;
        showDialog(dialogos[dialogIndex], dialogStep);
        dialogStep++;
    } else if (dialogIndex > 0) {
        dialogIndex--;
        dialogStep = dialogos[dialogIndex].length - 1;
        showDialog(dialogos[dialogIndex], dialogStep);
        dialogStep++;
    } else {
        console.log("No hay diálogos anteriores.");
    }
});
function showDialog(dialogArray, index) {
    if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
        currentVideo = null;
        videoContainer.innerHTML = '';
    }
    if (index < dialogArray.length) {
        const dialog = dialogArray[index];
        //Si el tipo es "texto" se muestra el dialogo y se reproduce el audio si existe
        if (dialog.tipo === "texto") {
            if (dialog.personaje === "presenter") {
                console.log("Dialogo del presentador");
                if (presenterContainer.style.display === "none") {
                    presenterContainer.style.display = "flex";
                }
                presenterDialog.style.display = "flex";
                presenterDialog.style.backgroundColor = "#faebd780";
                presenterDialog.innerHTML = dialog.texto;
                guestsContainer.style.display = "none";
            }
            else if (dialog.personaje === "guests") {
                console.log("Dialogo de invitados");
                if (guestsContainer.style.display === "none") {
                    guestsContainer.style.display = "flex";
                }
                guestsDialog.style.display = "flex";
                guestsDialog.style.backgroundColor = "#faebd780";
                guestsDialog.innerHTML = dialog.texto;
                presenterContainer.style.display = "none";
                presenterDialog.style.display = "none";

            }
            else if (dialog.personaje === "both") {
                console.log("Dialogo de ambos");
                if (presenterContainer.style.display === "none") {
                    presenterContainer.style.display = "flex";
                    presenterDialog.style.display = "flex";
                    presenterDialog.style.backgroundColor = "#faebd780";
                }
                presenterDialog.innerHTML = dialog.texto;
            
                if (guestsContainer.style.display === "none") {
                    guestsContainer.style.display = "flex";
                    guestsDialog.style.display = "flex";
                    guestsDialog.style.backgroundColor = "transparent";
                }
            }
        }
        if (dialog.audio) {
            let audioPlayer = dialog.personaje === "presenter" ? presenterAudio : guestsAudio;
            audioPlayer.src = dialog.audio;
            btnContinue.disabled = true;
            audioPlayer.play();
            audioPlayer.onended = function () {
                btnContinue.disabled = false;
            };
        }
        //Si el tipo es "video" se reproduce el video
        else if (dialog.tipo === "video") {
            if (dialog.personaje === "presenter") {
                console.log("Dialogo del presentador");
                if (presenterContainer.style.display === "none") {
                    presenterContainer.style.display = "flex";
                }
                guestsContainer.style.display = "none";
            }
            presenterDialog.style.display = "none";
            guestsDialog.style.display = "none";
            videoContainer.style.display = "flex";
            btnContinue.disabled = true;
            btnBack.disabled = true;

            if (dialog.src) {
                videoContainer.innerHTML = `
                <video class="current-video" id="current-video" autoplay controls width="90%">
                    <source src="${dialog.src}" type="video/mp4">
                    Tu navegador no soporta el elemento de video.
                </video>
                `;
            }
            setTimeout(() => {
                currentVideo = document.getElementById('current-video');
                if (currentVideo) {
                    currentVideo.onended = function () {
                        btnContinue.disabled = false;
                        btnBack.disabled = false;
                        videoContainer.style.display = "none";
                        presenterDialog.style.display = "flex";
                        presenterDialog.innerHTML = '. . .';
                        guestsDialog.style.display = "flex";
                        guestsDialog.style.backgroundColor = "Transparent";
                        guestsDialog.innerHTML = '';
                    };
                }
            }, 100);
        }
    }
}
function loadQuestion(index) {
    const currentQuestion = questions[index];
    presenterDialogContainer.style.display = "none";
    questionContainer.style.display = "flex";
    questionText.textContent = currentQuestion.text;
    optionsContainer.innerHTML = '';

    let backgroundSound = document.getElementById('background-sound');
    let questionBackgroundSound = document.getElementById('question-background-sound');
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
    questionBackgroundSound.volume = 0.5;
    questionBackgroundSound.play();
    
    currentQuestion.options.forEach((optionText, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = `option${i + 1}`;
        optionElement.innerHTML = `
            <div class="card-content">
                <p class="option-text">${optionText}</p>
            </div>
        `;
        optionElement.addEventListener('click', () => {
            questionContainer.style.display = "none";
            loader.style.display = "flex";
            setTimeout(() => {
                loader.style.display = "none";
                let swalOptions = {
                    showConfirmButton: true,
                };
                let correctSound = document.createElement('audio');
                correctSound.src = "../resources/audios/questions/correct-answer.mp3";
                let incorrectSound = document.createElement('audio');
                incorrectSound.src = "../resources/audios/questions/incorrect-answer.mp3";
                if (i === currentQuestion.answer) {
                    swalOptions.icon = 'success';
                    swalOptions.title = '¡Correcto!';
                    swalOptions.text = "Felicitaciones, has respondido correctamente";
                    correctSound.play();
                } else {
                    swalOptions.icon = 'error';
                    swalOptions.title = '¡Incorrecto!';
                    swalOptions.text = "Lo siento, has respondido incorrectamente.";
                    incorrectSound.play();
                }
                Swal.fire(swalOptions).then(() => {
                    presenterDialogContainer.style.display = "flex";
                    questionBackgroundSound.pause();
                    backgroundSound.currentTime = 0;
                    backgroundSound.play();
                    startNextDialog();
                });
            }, 5000);
        });
        optionsContainer.appendChild(optionElement);
    });
    questionIndex++;
}
function startNextDialog() {
    if (dialogIndex + 1 < dialogos.length) {
        dialogIndex++;
        dialogStep = 0;
        showDialog(dialogos[dialogIndex], dialogStep);
        dialogStep++;
    } else {
        presenterDialog.innerHTML = "";
        console.log("No hay más preguntas.");
        console.log("No hay más diálogos.");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let backgroundSound = document.getElementById('background-sound');
    backgroundSound.volume = 0.2; //Volumen al 20% del volumen total del sonido, ya que es un sonido de fondo
    backgroundSound.loop = true;

    document.addEventListener('click', () => {
        backgroundSound.play().catch(error => console.error("Error al reproducir audio:", error));
    }, { once: true });
});