const municipiosPorDepartamento = {
  antioquia: ["Medellín", "Envigado", "Bello", "Itagüí", "Sabaneta", "Rionegro", "La Ceja"],
  atlantico: ["Barranquilla", "Soledad", "Malambo", "Puerto Colombia", "Sabanagrande"],
  bogota: ["Bogotá"],
  valle: ["Cali", "Palmira", "Yumbo", "Buga", "Tuluá"],
  santander: ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barbosa"],
  caldas: ["Manizales", "Villamaría", "Chinchiná", "Palestina"],
  risaralda: ["Pereira", "Dosquebradas", "La Virginia", "Santa Rosa de Cabal"],
  quindio: ["Armenia", "Calarcá", "La Tebaida", "Montenegro"],
  bolivar: ["Cartagena", "Turbaco", "Magangué", "Arjona", "Mompós"],
  magdalena: ["Santa Marta", "Ciénaga", "Fundación", "Aracataca", "El Banco"],
  tolima: ["Ibagué", "Cajamarca", "Espinal", "Melgar", "Girardot"],
  norteSantander: ["Cúcuta", "Ocaña", "Pamplona", "Villa del Rosario", "Los Patios"]
  // Agrega más departamentos y municipios aquí
};
function cargarMunicipios() {
  const departamentoSeleccionado = document.getElementById("departamento").value;
  const municipioSelect = document.getElementById("municipio");
  // Eliminar opciones anteriores
  municipioSelect.innerHTML = "";
  // Agregar las opciones de municipios del departamento seleccionado
  municipiosPorDepartamento[departamentoSeleccionado].forEach(municipio => {
      const option = document.createElement("option");
      option.value = municipio;
      option.text = municipio;
      municipioSelect.appendChild(option);
  });
}
const infoModal1 = document.getElementById('infoModal1');
const closeModalButtons1 = document.querySelectorAll('.closeModal1');
window.addEventListener('load', () => {
  infoModal1.style.display = 'flex';
});
closeModalButtons1.forEach(closeModalButton1 => {
  closeModalButton1.addEventListener('click', () => {
    infoModal1.style.display = 'none';
  });
});
// Obtener la fecha actual
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear();
const fechaTexto = `${dia}/${mes}/${anio}`;
const fechaElemento = document.getElementById("fecha");
fechaElemento.textContent = `${fechaTexto}`;

const divArriba = document.getElementById('arriba');
const infoImages = document.querySelectorAll('.infoImage');
const infoModal = document.getElementById('infoModal');
const closeModalButtons = document.querySelectorAll('.closeModal');
const modalTitles = ["¿Cómo encuentro este formulario?", "¿Cómo se debe llenar el código del vendedor?", "¿Cómo se debe llenar el número de contrato?", "¿Qué debe ir en el formato elaborado por contingencia?"];
const modalContents = [
  "Para llegar a este formato, debes ir al menú y luego dar clic a formatos. A continuación debes buscar 5151 Hogares contrato unificado fijo y televisión (HM_CONTRATO_ UNIFICADO_TIGOUNE_6)<br><video src=./recursos/videos/info1.mp4 type=video/mp4 width=90% controls>Tu navegador no admite el elemento de video.</video>",
  "Recuerda que en este espacio la manera correcta de poner el codigo es:<br>(Código POS Tienda + Cédula del vendedor)<br><video src=./recursos/videos/info2.mp4 type=video/mp4 width=90% controls>Tu navegador no admite el elemento de video.</video>",
  "Recuerda que en este espacio la manera correcta de poner el numero de contrato es colocando el numero de oferta que nos da cyber (EJ. 1-VMX1TO32ZF)<br><video src=./recursos/videos/info3.mp4 type=video/mp4 width=90% controls>Tu navegador no admite el elemento de video.</video>",
  "Recuerda que este campo debe ir con el <b>'NO'</b> para que el formulario este diligenciado correctamente<img src=./recursos/videos/info4.png alt=Info width=90% height=auto</img>"
];

infoImages.forEach(infoImage => {
  infoImage.addEventListener('click', () => {
    const modalIndex = infoImage.getAttribute('data-modal-index');
    document.getElementById('modalTitle').textContent = modalTitles[modalIndex];
    document.getElementById('modalContent').innerHTML = modalContents[modalIndex];
    divArriba.style.zIndex = "0";
    infoModal.style.display = 'flex';
  });
});

closeModalButtons.forEach(closeModalButton => {
  closeModalButton.addEventListener('click', () => {
    // Detener la reproducción del video
    const modalContent = document.getElementById('modalContent');
    const videoElement = modalContent.querySelector('video');
    if(videoElement) {
      videoElement.pause();
    }
    infoModal.style.display = 'none';
  });
  closeModalButton.addEventListener('click', function(event) {
    event.preventDefault();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const miFormulario = document.getElementById('miFormulario');
  const submitBtn = document.getElementById('submitBtn');
  const errorModal = document.getElementById('errorModal');
  const errorMessages = document.getElementById('errorMessages');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const successMessage = document.getElementById('successMessage');
  const corre1 = miFormulario.corre1;
  const corre2 = miFormulario.corre2;
  const departamento = document.getElementById('departamento');
  const opcionesSelect = document.getElementById('opciones');

  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const errorList = [];
    if (!/^\d+$/.test(miFormulario.codpos.value)) {
      errorList.push('El codigo POS tienda debe ser un número.');
    }
    if (!/^[a-zA-Z\s]+$/.test(miFormulario.name.value)) {
      errorList.push('El nombre del vendedor solo debe contener letras y espacios.');
    }    
    if (!/^\d+$/.test(miFormulario.docven.value)) {
      errorList.push('El Documento del Vendedor debe ser un número.');
    }
    if (!/^\d+$/.test(miFormulario.codven.value)) {
      errorList.push('El Codigo del vendedor debe tener al menos algun número.');
    }
    if (!/^[a-zA-Z\d\s\W]+$/.test(miFormulario.numcon.value)) {
      errorList.push('El numero de contrato debe contener letras o números');
    }
    if (opcionesSelect.value === 'SI') {
      errorList.push('La selección de formato elaborado por contingencia debe ser "NO" para continuar.');
    }
    if (!/^[a-zA-Z\s]+$/.test(miFormulario.nomraz.value)) {
      errorList.push('El Nombre/Razon social solo debe contener letras.');
    }
    if (!/^\d+$/.test(miFormulario.numdoc.value)) {
      errorList.push('El Numero de Documento debe ser un número.');
    }
    if (!/^[a-zA-Z\d\s\W]+$/.test(miFormulario.dicser.value)) {
      errorList.push('La Direccion de servicio debe tener al menos alguna letra o números.');
    }
    if (!/^\d+$/.test(miFormulario.telmo.value)) {
      errorList.push('El Telefono/Movil debe ser un número.');
    }
    if (!/^\d+$/.test(miFormulario.est.value)) {
      errorList.push('El estrato debe contener algún numero');
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(miFormulario.corre1.value)) {
      errorList.push('El correo electrónico debe contener @ y . final');
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(miFormulario.corre2.value)) {
      errorList.push('El repetir correo electrónico debe contener @ y . final');
    }
    if (corre1.value !== corre2.value) {
      errorList.push('Los correos electrónicos no coinciden.');
    }
    if (departamento.value === '') {
      errorList.push('Debes seleccionar un departamento.');
    }
    if (!/^[a-zA-Z\d\s\W]+$/.test(miFormulario.dicsus.value)) {
      errorList.push('La Dirección de suscriptor debe contener letras o números.');
    }
    if (errorList.length > 0) {
      errorMessages.innerHTML = errorList.map(error => `<li>${error}</li>`).join('');
      errorModal.style.display = 'block';
    } else {
      // Mostrar mensaje de éxito y recargar la página
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Has pasado correctamente.',
        confirmButtonColor: '#007bff',
      }).then(() => {
        // Redirigir al usuario a la página deseada
        window.location.href = "./menu_juego.html";
      });
    }
  });
  closeModalBtn.addEventListener('click', () => {
    errorModal.style.display = 'none';
  });
});