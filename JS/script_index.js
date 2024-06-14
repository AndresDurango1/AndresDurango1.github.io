const videoContainer = document.getElementById ('video-container')
const video = document.getElementById("video");
const quizModal = document.getElementById("quiz-modal");
const quizBox = document.getElementById("quiz-box");
const customPopup = document.getElementById("custom-popup");
const question = document.getElementById("question");
// Variable para controlar si ya se mostró la respuesta
let respuestaMostrada = false;
video.addEventListener("ended", () => {
    videoContainer.style.display = "none"
    quizModal.style.display = "flex";
});
const correctAnswer = true; // Cambia esto según la respuesta correcta
function checkAnswer(selectedAnswer) {
    if (!respuestaMostrada) {
        respuestaMostrada = true; // Marca la respuesta como mostrada para evitar duplicados
        if (selectedAnswer === correctAnswer) {
            // Respuesta correcta, muestra el mensaje personalizado
            customPopup.style.display = "flex";
            setTimeout(() => {
                // Redirigir después de un tiempo de espera (por ejemplo, 3 segundos)
                window.location.href = "./index_video2.html";
            }, 1500); // 1500 milisegundos = 1.5 segundos
        } else {
            // Respuesta incorrecta, muestra un mensaje para volver a intentarlo
            question.innerText = "Respuesta incorrecta. ¡Inténtalo de nuevo!";
            respuestaMostrada = false; // Reinicia la variable para permitir intentos adicionales
        }
    }
}
// Evitar que el modal se muestre antes de que termine el video
quizModal.style.display = "none";
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= video.duration) {
        quizModal.style.display = "flex";
    }
});
const infoModal1 = document.getElementById('infoModal1');
const closeModalButtons1 = document.querySelectorAll('.closeModal1');

window.addEventListener('load', () => {
    infoModal1.style.display = 'flex';
    //Inicialmente se oculta el video y solo se muestra el modal
    videoContainer.style.display = "none"
});

closeModalButtons1.forEach(closeModalButton1 => {
    closeModalButton1.addEventListener('click', () => {
        infoModal1.style.display = 'none';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Verificar la orientación del dispositivo
            if (window.orientation === 0 || window.orientation === 180) {
                Swal.fire({
                    title: 'Tener en cuenta',
                    text: 'Para tener una mejor experiencia de video, por favor rota tu dispositivo móvil',
                    icon: 'info',
                    iconColor: '#003cff',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#003cff'
                })
            }
        }
        videoContainer.style.display = "flex"
    });
});


