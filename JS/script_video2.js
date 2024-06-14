const infoModal1 = document.getElementById('infoModal1');
const videoContainer = document.getElementById('video-container')
const closeModalButtons1 = document.querySelectorAll('.closeModal1');
window.addEventListener('load', () => {
  infoModal1.style.display = 'flex';
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

/******************************************FUNCION PARA QUE SALGAN LOS BOTONES DE OPCIONES **************************************/
const video = document.getElementById("video");
const decisionContainer = document.getElementById("decision-container");

video.addEventListener("ended", () => {
  videoContainer.style.height = "90%"
  decisionContainer.style.position = "absolute"
  decisionContainer.style.top = "90%"
  decisionContainer.style.display = "flex";
});
function makeDecision(option) {
  if (option === 1) {
    window.location.href = "./formulario.html";
    decisionContainer.style.display = "none";
  }
}
