function checkAnswer(selectedImage) {
    if (selectedImage === 1) {
        showAlert("¡Correcto!", "Has elegido la imagen correcta. La cédula de extranjería sirve para hacer el diligenciamiento :D", "success", "#20892C");
    } else if (selectedImage === 2) {
        showAlert("¡Correcto!", "Has elegido la imagen correcta. La cédula de ciudadanía sirve para hacer el diligenciamiento :D", "success", "#20892C");
    } else if (selectedImage === 3) {
        showAlert("¡Incorrecto!", "Has elegido el documento incorrecto. Recuerda que los únicos válidos son la cédula de extranjería y la cédula de ciudadanía. La tarjeta de identidad NO es válida para hacer el procedimiento. Inténtalo de nuevo", "error", "#FF0000");
    } else if (selectedImage === 4) {
        showAlert("Incorrecto", "Recuerda que las únicas válidas son la cédula de extranjería y la cédula de ciudadanía. La licencia de conducción NO es válida para hacer el procedimiento. Inténtalo de nuevo", "error","#FF0000");
    }
}
function showAlert(title, message, icon, iconColor) {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        iconColor: iconColor,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#003cff'
    });
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function showCustomAlert(message) {
    var alertBox = document.getElementById("customAlert");
    alertBox.querySelector("h2").textContent = message;
    alertBox.style.display = "flex";
  }
  function closeAlert() {
    var alertBox = document.getElementById("customAlert");
    alertBox.style.display = "none";
  }
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function checkAnswer2(selectedImage2) {
    if (selectedImage2 === 22) {
        showAlert2("¡Correcto!", "Has elegido la imagen correcta. Esta es una firma válida", "success", "#20892C");
    } else if (selectedImage2 === 11) {
        showAlert2("¡Incorrecto!", "Has elegido la imagen incorrecta. Esta firma se ve un poco extraña", "error", "#FF0000");
    }
}
function showAlert2(title, message, icon, iconColor) {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        iconColor: iconColor,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#003cff' 
    });
}
