//Contendor principal-contendor video tienda y video tienda
var contenedorVideoInicial = document.getElementById("contenedorVideoInicial");
var contenedorVideo = document.getElementById("contenedorVideoRigo");
var videoTiendaRigo = document.getElementById("videoTiendaRigo");
//Imagen de transicion entre video tienda y videos. Nuevo contendor principal
var contenedorImagenTransicion = document.getElementById("contenedorImagenTransicion");
var contenedorPrincipal = document.getElementById("contenedorPrincipal");
var contenedorPrincipalGrid = document.getElementById("contenedorPrincipalGrid");
var btnVerVideos = document.getElementById("btnVerVideos")
/* IMAGENES PORTADA DE LOS VIDEOS POST VENTA*/
var imgIntro = document.getElementById("imgIntro");
var imgReposicionSim = document.getElementById("imgReposicionSim");
var imgProcesoBiometrico = document.getElementById("imgProcesoBiometrico");
var imgCesionPrepago = document.getElementById("imgCesionPrepago");
var imgProcesoReposicion = document.getElementById("imgProcesoReposicion");
var imgCambioPlan = document.getElementById("imgCambioPlan");
var imgNumeroPrivado = document.getElementById("imgNumeroPrivado");
var imgCambioNumero = document.getElementById("imgCambioNumero");
var imgRegistroEquipos = document.getElementById("imgRegistroEquipos");
/* IMAGENES DE LOS ICONOS DE VIDEO */
var imgIconoVideo0 = document.getElementById("imgIconoVideo0");
var imgIconoVideo1 = document.getElementById("imgIconoVideo1");
var imgIconoVideo2 = document.getElementById("imgIconoVideo2");
var imgIconoVideo3 = document.getElementById("imgIconoVideo3");
var imgIconoVideo4 = document.getElementById("imgIconoVideo4");
var imgIconoVideo5 = document.getElementById("imgIconoVideo5");
var imgIconoVideo6 = document.getElementById("imgIconoVideo6");
var imgIconoVideo7 = document.getElementById("imgIconoVideo7");
var imgIconoVideo8 = document.getElementById("imgIconoVideo8");
/* VIDEOS POST VENTA */
// Se debe esperar que el DOM haya cargado completamente para poder llenar el arreglo videos con los videos post venta
var videos;
document.addEventListener('DOMContentLoaded', function () {
    var vidIntro = document.getElementById("video0");
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var video4 = document.getElementById("video4");
    var video5 = document.getElementById("video5");
    var video6 = document.getElementById("video6");
    var video7 = document.getElementById("video7");
    var video8 = document.getElementById("video8");
    //Después de traer todos los videos de post-venta desde el DOM, se asignan los elementos en orden dentro del arreglo para luego poderlos usar
    videos = [vidIntro, video1, video2, video3, video4, video5, video6, video7, video8];
});
//CONTENEDORE DE CADA UNO DE LOS VIDEOS
var contenedoresVideos;
document.addEventListener('DOMContentLoaded', function () {
    var contenedorVideo0 = document.getElementById("contenedorVideo0");
    var contenedorVideo1 = document.getElementById("contenedorVideo1");
    var contenedorVideo2 = document.getElementById("contenedorVideo2");
    var contenedorVideo3 = document.getElementById("contenedorVideo3");
    var contenedorVideo4 = document.getElementById("contenedorVideo4");
    var contenedorVideo5 = document.getElementById("contenedorVideo5");
    var contenedorVideo6 = document.getElementById("contenedorVideo6");
    var contenedorVideo7 = document.getElementById("contenedorVideo7");
    var contenedorVideo8 = document.getElementById("contenedorVideo8");
    //Después de traer todos los videos de post-venta desde el DOM, se asignan los elementos en orden dentro del arreglo para luego poderlos usar
    contenedoresVideos = [contenedorVideo0, contenedorVideo1, contenedorVideo2, contenedorVideo3, contenedorVideo4, contenedorVideo5, contenedorVideo6, contenedorVideo7, contenedorVideo8];
});
//BOTONES CERRAR DE CADA VIDEO
var botonesCerrar;
document.addEventListener('DOMContentLoaded', function () {
    var btnCerrar0 = document.getElementById("btnCerrar0");
    var btnCerrar1 = document.getElementById("btnCerrar1");
    var btnCerrar2 = document.getElementById("btnCerrar2");
    var btnCerrar3 = document.getElementById("btnCerrar3");
    var btnCerrar4 = document.getElementById("btnCerrar4");
    var btnCerrar5 = document.getElementById("btnCerrar5");
    var btnCerrar6 = document.getElementById("btnCerrar6");
    var btnCerrar7 = document.getElementById("btnCerrar7");
    var btnCerrar8 = document.getElementById("btnCerrar8");
    //Después de traer todos los videos de post-venta desde el DOM, se asignan los elementos en orden dentro del arreglo para luego poderlos usar
    botonesCerrar = [btnCerrar0, btnCerrar1, btnCerrar2, btnCerrar3, btnCerrar4, btnCerrar5, btnCerrar6, btnCerrar7, btnCerrar8];
});
//BOTON PARA REDIRIGIR AL MENU DE JUEGOS
const btnJuegos = document.getElementById('btnJuegos');

//Despues de obtener todos los elementos del INDEX.HTML se almacenan en arreglos para que mas adelante se puedan recorrer de una mejor manera (con funciones)
var imagenesVideos = [imgIntro, imgReposicionSim, imgProcesoBiometrico, imgCesionPrepago, imgProcesoReposicion, imgCambioPlan, imgNumeroPrivado, imgCambioNumero, imgRegistroEquipos];
var imagenesIconosVideos = [imgIconoVideo0, imgIconoVideo1, imgIconoVideo2, imgIconoVideo3, imgIconoVideo4, imgIconoVideo5, imgIconoVideo6, imgIconoVideo7, imgIconoVideo8];
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
        contenedorImagenTransicion.style.display = "none";
        /*Se le cambia el atributo DISPLAY al contenedor principal a FLEX para poder ubicar en el centro el recuadro donde se vera la informaciòn Se oculta el contenedor principal 
        donde se encuentra el video promocional de Rigo*/
        contenedorPrincipal.style.display = "flex";
        contenedorVideoInicial.style.display = "none";
        /*Se muestra la imagen de icono de video en todos los recuadros excepto en el de intro ya que en esta por defecto debe aparecer habilitado para ver el video
         Se oculta la imagen de cada uno de los vìdeos para controlar su aparicion a medida que el usuario ve el video inmediatamente anterior*/
        imagenesIconosVideos[0].style.display = "none";
        imagenesIconosVideos.slice(1).forEach(function (imagenIcono) {
            imagenIcono.style.display = "block"; //Aquì se cambia el display de las imagenes de IconosVideos para que se muestren en la pagina
        });
        imagenesVideos[0].style.display = "block";
        imagenesVideos.slice(1).forEach(function (imagenVideo) {
            imagenVideo.style.display = "none" //Aquì se cambia el display de las imagenes de IconosVideos para que se oculten en la pagina
        })
    });
}
//A continuacion está la funcion para controlar el orden de reproducción de los videos.
function reproducirVideo(indice) {
    imagenesVideos[indice].style.display = "block";
    //Para empezar se ocultan todos los botones y/o los contenedores individuales de cada video que puedan estar abiertos. Para que luego se muestre unicamente el respectivo boton y contenedor.
    botonesCerrar.forEach(boton => boton.style.display = "none")
    contenedoresVideos.forEach(contenedorVideo => contenedorVideo.style.display = "none");
    //Se configura un condicional que controle el orden en el cual se muestran los videos. En este condicional se cambia la propiedad display de varios contenedores para mostrar y ocultar los videos en el orden deseado. Tambien se controla el evento que ocurre cuando el video que está en reproducción termina
    if (indice <= 8) {
        contenedorVideosPostVenta.style.display = "flex";
        contenedoresVideos[indice].style.display = "flex";
        botonesCerrar[indice].style.display = "flex";
        videos[indice].style.display = "block";
        videos[indice].play();
        //Evento para cerrar el contenedorVideosPostVenta una vez finaliza el video que se está reproduciendo. Ademas se pausa el video y se devueve al segundo cero para que se reproduzca desde el inicio cuando se vuelva a abrir.
        videos[indice].addEventListener("ended", () => {
            detenerVideo(indice);
            if (indice <= 7) {
            imagenesIconosVideos[indice + 1].style.display = "none";
            imagenesVideos[indice + 1].style.display = "block"
            contenedorVideosPostVenta.style.display = "none";
            }
            else {
                contenedorVideosPostVenta.style.display = "none";
                btnJuegos.style.display = "flex";
            }
        })
    }
}
function detenerVideo (indice) {
    videos[indice].pause();
    videos[indice].currentTime = 0;
    videos[indice].style.display = "none";
    contenedorVideosPostVenta.style.display = "none";
}
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