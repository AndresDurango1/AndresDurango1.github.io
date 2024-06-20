window.addEventListener('load', () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //Verificar la orientación del dispositivo
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
});
//Contendor principal-contendor video tienda y video tienda
var contenedorVideoInicial = document.getElementById("contenedorVideoInicial");
var contenedorVideo = document.getElementById("contenedorVideoRigo");
var videoTiendaRigo = document.getElementById("videoTiendaRigo");
//Imagen de transicion entre video tienda y videos. Nuevo contendor principal
var contenedorImagenTransicion = document.getElementById("contenedorImagenTransicion");
var contenedorPrincipal = document.getElementById("contenedorPrincipal");
var contenedorPrincipalGrid = document.getElementById("contenedorPrincipalGrid");
var btnVerVideos = document.getElementById("btnVerVideos")
//Se añade la funcionalidad de que cuando el video de la tienda se termina, los respectivos contendores desaparecen y se reemplazaran con otros. Para esto se usa el addEventListener que "escucha" el evento de finalizaciòn del video para ejectutar la función
videoTiendaRigo.addEventListener("ended", function () {
    contenedorVideo.style.display = "none";
    contenedorImagenTransicion.style.display = "flex";
    contenedorImagenTransicion.style.justifyContent = "center";
    contenedorImagenTransicion.style.alignItems = "center"
    btnVerVideos.style.display = "block";
});
// A continuación está la funcion para que cuando se le de clic al btn Ver Videos cambie el fondo y muestre los videos, solo debe aparecer disponible el video y la imagen de INTRO, las demás deben estar ocultas
var contenedorVideosPostVenta = document.getElementById("contenedorVideosPostVenta");
var videoInmersion;
var imagenTransicion;
var btnVerVideos;
function verVideos() {
    //Se oculta la imagen de transicion y el boton
    imagenTransicion = document.getElementById("imagenTransicion");
    imagenTransicion.style.display = "none";
    btnVerVideos = document.getElementById("btnVerVideos");
    btnVerVideos.style.display = "none";
    //Se reproduce video de inmersion
    videoInmersion = document.getElementById("videoInmersion");
    videoInmersion.style.display = "block"
    videoInmersion.play();
    //Una vez se termina el video y se dispara el evento "ended" se depliega la cascada de acciones con los otros contenedores
    videoInmersion.addEventListener("ended", () => {
        window.location.href = "../indexVideos.html";
    });
}
