// Elimina cualquier carácter que no sea número
function validarNumero(input) {
    input.value = input.value.replace(/\D/g, ''); 
}
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
    municipioSelect.innerHTML = "";
    // Agregar las opciones de municipios del departamento seleccionado
    municipiosPorDepartamento[departamentoSeleccionado].forEach(municipio => {
        const option = document.createElement("option");
        option.value = municipio;
        option.text = municipio;
        municipioSelect.appendChild(option);
    });
}
function cargarMunicipios2() {
    const departamentoSeleccionado = document.getElementById("departamento2").value;
    const municipioSelect = document.getElementById("municipio2");
    municipioSelect.innerHTML = "";
    // Agregar las opciones de municipios del departamento seleccionado
    municipiosPorDepartamento[departamentoSeleccionado].forEach(municipio2 => {
        const option = document.createElement("option");
        option.value = municipio2;
        option.text = municipio2;
        municipioSelect.appendChild(option);
    });
}
//VALIDAR QUE TODOS LOS CAMPOS DEL FORMULARIO ESTAN COMPLETAMENTE DILIGENCIADOS CUANDO SE DA CLIC AL BOTON ENVIAR
document.addEventListener("DOMContentLoaded", function () {
    const botonEnviar = document.getElementById("botonEnviar");
    botonEnviar.addEventListener("click", validarFormulario);
});
function validarFormulario() {
    const formulario = document.getElementById("miFormulario");
    const inputs = formulario.querySelectorAll("input, select");
    let camposIncompletos = false;
    inputs.forEach(function (input) {
        if (input.value === "" && input.hasAttribute("required")) {
            camposIncompletos = true;
        }
    });
    if (camposIncompletos) {
        // Mostrar la alerta de campos incompletos usando SweetAlert2
        Swal.fire({
            icon: 'error', // Icono de error
            title: 'Campos Incompletos',
            text: 'Debes completar todos los campos antes de continuar.',
            confirmButtonColor: '#007bff', 
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Has pasado correctamente.',
            confirmButtonColor: '#007bff',
        }).then(() => {
            // Redirigir al usuario a la página deseada
            window.location.href = "./documentos.html";
        });
    }
}
//VALIDAR QUE LOS CAMPOS DE CORREO ELECTRÓNICO EN EL FORMULARIO ESTAN COMPLETAMENTE DILIGENCIADOS CORRECTAMENTE CUANDO SE DA CLIC AL BOTON ENVIAR
document.addEventListener("DOMContentLoaded", function () {
    const botonEnviar = document.querySelector(".boton-enviar");
    const correo1 = document.getElementById("correo1");
    const correo2 = document.getElementById("correo2");
    const alertaCorreoNoCoincide = document.getElementById("alertaCorreoNoCoincide");

    botonEnviar.addEventListener("click", function () {
        const correo1Valor = correo1.value.trim();
        const correo2Valor = correo2.value.trim();
         if (!esCorreoValido(correo1Valor) || !esCorreoValido(correo2Valor)) {
            mostrarAlerta("Ingresa correos electrónicos válidos.");
            correo1.value = "";
            correo2.value = "";
        } else if (correo1Valor !== correo2Valor) {
            mostrarAlerta("Los correos electrónicos no coinciden.");
            correo1.value = "";
            correo2.value = "";
        }
    });
    //FUNCION PARA VALIDAR QUE EL CORREO INGREESADO SEA VÁLIDO (QUE SEA DE LA FORMA CORREOELECTRONICO@DOMINIO)
    function esCorreoValido(correo) {
        const correoRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return correoRegExp.test(correo);
    }
    //FUNCION PARA MOSTRAR ALERTA CUANDO EL CORREO NO SE HA DILIGENCIADO O NO ES VÁLIDO
    function mostrarAlerta(mensaje) {                                       
        alertaCorreoNoCoincide.textContent = mensaje;
        alertaCorreoNoCoincide.style.display = "flex";
        setTimeout(() => {
            alertaCorreoNoCoincide.style.display = "none"
        }, 2000); // 2000 milisegundos = 2 segundos
    }
});
//MOSTRAR MENSAJE DE ALERTA CONSULTA CENTRALES DE RIESGO: SI O NO
function verificarSeleccion2() {
    const selectConsulta = document.getElementById("consultaRiesgo2");
    const customAlert2 = document.getElementById("customAlert2");
    if (selectConsulta.value === "NO") {
        customAlert2.style.display = "block";
    } else {
        customAlert2.style.display = "none";
    }
}
