let questionIndex = 0;
let dialogIndex = 0;
let dialogStep = 0;
const dialogos = [dialogos_1, dialogos_2];

//Definicion y Carga global de los elementos del DOM par usarlos dentro de las funciones 
const btnContinue = document.getElementById("btn-continue");
const presenterDialog = document.getElementById("presenter-dialog");
const guestsDialog = document.getElementById("guests-dialog");
const presenterAudio = document.getElementById("presenter-audio-player");
const guestsAudio = document.getElementById("guests-audio-player");
const videoContainer = document.getElementById("video-container");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.querySelector('.options-container');
const presenterDialogContainer = document.getElementById("presenter-dialog-container");
const loader = document.getElementById("loader");

btnContinue.addEventListener("click", function () {
    if (dialogStep < dialogos[dialogIndex].length) {
        showDialog(dialogos[dialogIndex], dialogStep);
        dialogStep++;
    } else {
        if (questionIndex < questions.length) {
            loadQuestion(questionIndex);
        } else {
            console.log("No hay más preguntas.");
        }
    }
});
function showDialog(dialogArray, index) {
    if (index < dialogArray.length) {
        const dialog = dialogArray[index];
        //Si el tipo es "texto" se muestra el dialogo y se reproduce el audio si existe
        if (dialog.tipo === "texto") {
            if (dialog.personaje === "presenter") {
                presenterDialog.style.display = "flex";
                presenterDialog.style.backgroundColor = "#faebd780";
                presenterDialog.innerHTML = dialog.texto;
                guestsDialog.style.display = "none";
                //Reproducir audio si exite
                if (dialog.audio) {
                    presenterAudio.src = dialog.audio;
                    btnContinue.disabled = true;
                    presenterAudio.play();
                    presenterAudio.onended = function () {
                        btnContinue.disabled = false;
                    };
                }
            } else {
                guestsDialog.style.display = "flex";
                guestsDialog.style.display = "flex";
                guestsDialog.innerHTML = dialog.texto;
                presenterDialog.style.backgroundColor = "transparent";
                presenterDialog.innerHTML = '';
                //Reproducir audio si exite
                if (dialog.audio) {
                    guestsAudio.src = dialog.audio;
                    btnContinue.disabled = true;
                    guestsAudio.play();
                    guestsAudio.onended = function () {
                        btnContinue.disabled = false;
                        guestsDialog.style.display = "none";
                    };
                }
            }
        }
        //Si el tipo es "video" se reproduce el video
        else if (dialog.tipo === "video") {
            presenterDialog.style.display = "none";
            videoContainer.style.display = "flex";
            btnContinue.disabled = true;
            if (dialog.src) {
                console.log("dialog.src=" + dialog.src);
                videoContainer.innerHTML = `
                <video id="current-video" controls autoplay width="80%">
                    <source src="${dialog.src}" type="video/mp4">
                    Tu navegador no soporta el elemento de video.
                </video>
                `;
            }
            setTimeout(() => {
                const videoElement = document.getElementById('current-video');
                if (videoElement) {
                    videoElement.onended = function () {
                        btnContinue.disabled = false;
                        videoContainer.style.display = "none";
                        presenterDialog.style.display = "flex";
                        presenterDialog.innerHTML = '. . .';
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
                presenterDialogContainer.style.display = "flex";
                startNextDialog();
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
