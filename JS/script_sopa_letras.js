var a4, a5, a6, c6, d6, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, f6, g6, h6, i3, i4, i5, i6, i7, i8, i9, j6;
function verificarGanador() {
    var celdas = [a4, a5, a6, c6, d6, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, f6, g6, h6, i3, i4, i5, i6, i7, i8, i9, j6];
    var todasLlenas = celdas.every(function (celda) {
        return celda && celda.style.color !== "";
    });
    if (todasLlenas) {
		Swal.fire({
			title: '¡¡¡FELICITACIONES!!!',
			text: 'Has completado correctamente el juego',
			icon: 'success',
			iconColor: '#003cff',
			confirmButtonText: 'Aceptar',
			confirmButtonColor: '#003cff'
		})
    }
}
function comprobar4() {
    a4 = document.getElementById('celda4');
    a4.style.color = "black";
	a4.style.backgroundColor = "white";
    verificarGanador();
}
function comprobar5() {
    a5 = document.getElementById('celda5');
    a5.style.color = "black";
	a5.style.backgroundColor = "white";

    verificarGanador();
}
function comprobar6() {
    a6 = document.getElementById('celda6');
    a6.style.color = "black";
	a6.style.backgroundColor = "white";

    verificarGanador();
}
function comprobarC6() {
    c6 = document.getElementById('celdaC6');
    c6.style.color = "black";
    c6.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarD6() {
    d6 = document.getElementById('celdaD6');
    d6.style.color = "black";
    d6.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE1() {
    e1 = document.getElementById('celdaE1');
    e1.style.color = "black";
    e1.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE2() {
    e2 = document.getElementById('celdaE2');
    e2.style.color = "black";
    e2.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE3() {
    e3 = document.getElementById('celdaE3');
    e3.style.color = "black";
    e3.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE4() {
    e4 = document.getElementById('celdaE4');
    e4.style.color = "black";
    e4.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE5() {
    e5 = document.getElementById('celdaE5');
    e5.style.color = "black";
    e5.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE6() {
    e6 = document.getElementById('celdaE6');
    e6.style.color = "black";
    e6.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE7() {
    e7 = document.getElementById('celdaE7');
    e7.style.color = "black";
    e7.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE8() {
    e8 = document.getElementById('celdaE8');
    e8.style.color = "black";
    e8.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE9() {
    e9 = document.getElementById('celdaE9');
    e9.style.color = "black";
    e9.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE10() {
    e10 = document.getElementById('celdaE10');
    e10.style.color = "black";
    e10.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarF6() {
    f6 = document.getElementById('celdaF6');
    f6.style.color = "black";
    f6.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarG6() {
    g6 = document.getElementById('celdaG6');
    g6.style.color = "black";
    g6.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarH6() {
    h6 = document.getElementById('celdaH6');
    h6.style.color = "black";
    h6.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarI3() {
    i3 = document.getElementById('celdaI3');
    i3.style.color = "black";
    i3.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarI4() {
    i4 = document.getElementById('celdaI4');
    i4.style.color = "black";
    i4.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarI5() {
    i5 = document.getElementById('celdaI5');
    i5.style.color = "black";
    i5.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarI6() {
    i6 = document.getElementById('celdaI6');
    i6.style.color = "black";
    i6.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarI7() {
    i7 = document.getElementById('celdaI7');
    i7.style.color = "black";
    i7.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarI8() {
    i8 = document.getElementById('celdaI8');
    i8.style.color = "black";
    i8.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarI9() {
    i9 = document.getElementById('celdaI9');
    i9.style.color = "black";
    i9.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarJ6() {
    j6 = document.getElementById('celdaJ6');
    j6.style.color = "black";
    j6.style.backgroundColor = "white";
    verificarGanador();
}
function comprobarE() {
    e = document.getElementById('celdaE');
    e.style.color = "black";
    e.style.backgroundColor = "white";
    verificarGanador();
}
