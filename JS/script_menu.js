/*LLAMADO A LOS ELEMENTOS DEL ARCHIVO menu_juego.html */
/*Modal Inicial*/
const infoModal1 = document.getElementById('infoModal1');
const closeModalButtons1 = document.querySelectorAll('.closeModal1');
/*Alerta*/
const alerta = document.getElementById('alerta');
const closeAlerta = document.getElementById('closeAlerta');
/*Cubo de  Juegos*/
const cuboJuegos = document.getElementById('cuboJuegos');
/*Video Felicitaciones*/
const videoModal = document.getElementById('videoModal');
const video = document.querySelector('video');
/*Boton Finalizar*/
const btnFinalizar = document.getElementById('btnFinalizar');
const closeModal = document.getElementById('closeModal')

/*FUNCIONALIDADES*/
//Aparicion de la primer ventana modal al cargar la pagina
window.addEventListener('load', () => {
  infoModal1.style.display = 'flex';
  infoModal1.style.zIndex = '1000'
});
//Funcionalidad para el boton cerrar modal, cierra el modal y muestra la alerta una vez se quita el modal 
closeModalButtons1.forEach(closeModalButton1 => {
  closeModalButton1.addEventListener('click', () => {
    infoModal1.style.display = 'none';
    alerta.style.display = "flex";
  });
});
// Código JS para manejar los eventos de la alerta
// Cerrar la alerta al hacer clic en el botón de cerrar
closeAlerta.addEventListener('click', () => {
  alerta.style.display = 'none';
  cuboJuegos.style.display = "block";
  btnFinalizar.style.display = "flex"
});
//Agrega un manejador de eventos al botón btnFinalizar para mostrar el modal y reproducir el video
btnFinalizar.addEventListener('click', function () {
  //Se oculta el cubo y el boton al darle clic
  cuboJuegos.style.display = "none";
  btnFinalizar.style.display = "none"
  //Se muestra el modal del video y se empieza con la reproduccion del video de felicitaciones desde el inicio 
  videoModal.style.display = 'flex';
  video.currentTime = 0;
  video.play(); // Reproduce el video automáticamente al abrir el modal
});
//Cierra el modal si el usuario hace clic en el boton closeModal, pausa el video y cierra el modal
closeModal.addEventListener('click', () => {
  //Se pausa el video y se oculta el modal
  video.pause();
  videoModal.style.display = "none";
  //Se muestra el cubo y el boton al darle clic
  cuboJuegos.style.display = "block";
  btnFinalizar.style.display = "flex"
})
//Cierra el modal si el usuario hace clic fuera de él y pausa el video
window.addEventListener('click', function (event) {
  if (event.target === videoModal) {
    videoModal.style.display = 'none';
    video.pause();
    //Se muestra el cubo y el boton al darle clic
    cuboJuegos.style.display = "block";
    btnFinalizar.style.display = "flex"
  }
});