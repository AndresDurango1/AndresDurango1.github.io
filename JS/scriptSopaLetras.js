var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10,
    b10, c6, c11, d6, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11,
    f6, g6, h6, i3, i4, i5, i6, i7, i8, i9, j6;

function verificarGanador() {
    var celdas = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, b10, c6, c11, d6, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, f6, g6, h6, i3, i4, i5, i6, i7, i8, i9, j6];

    var todasLlenas = celdas.every(function (celda) {
        return celda && celda.innerText !== "";
    });

    if (todasLlenas) {
        alert("¡Felicidades! Has completado el juego.");
    }
}

function comprobar1() {
    a1 = document.getElementById('celda1').style.color = "gold";
    verificarGanador();
}

function comprobar2(){
	a2 = document.getElementById('celda2').style.color="gold";
}
function comprobar3(){
	a3 = document.getElementById('celda3').style.color="gold";
}
function comprobar4(){
	a4 = document.getElementById('celda4').style.color="gold";
}

function comprobar5(){
	a5 = document.getElementById('celda5').style.color="gold";
}

function comprobar6(){
	a6 = document.getElementById('celda6').style.color="gold";
}

function comprobar7(){
	a7 = document.getElementById('celda7').style.color="gold";
}
function comprobar8(){
	a8 = document.getElementById('celda8').style.color="gold";
}
function comprobar9(){
	a9 = document.getElementById('celda9').style.color="gold";
}
function comprobar10(){
	a10 = document.getElementById('celda10').style.color="gold";
}
//palabra lenguaje color cafe
function comprobarC6(){
	c6 = document.getElementById('celdaC6').style.color="brown";
}
function comprobarD6(){
	d6 = document.getElementById('celdaD6').style.color="brown";
}

function comprobarE6(){
	e6 = document.getElementById('celdaE6').style.color="brown";
}

function comprobarF6(){
	f6 = document.getElementById('celdaF6').style.color="brown";
}
function comprobarG6(){
	g6 = document.getElementById('celdaG6').style.color="brown";
}

function comprobarH6(){
	h6 = document.getElementById('celdaH6').style.color="brown";
}
function comprobarI6(){
	i6 = document.getElementById('celdaI6').style.color="yellow";
}
function comprobarJ6(){
	j6 = document.getElementById('celdaJ6').style.color="brown";
}

//palabra laboratoria
function comprobarE1(){
	e1 = document.getElementById('celdaE1').style.color="yellow";
}
function comprobarE2(){
	e2 = document.getElementById('celdaE2').style.color="yellow";
}
function comprobarE3(){
	e3 = document.getElementById('celdaE3').style.color="yellow";
}
function comprobarE4(){
	e4 = document.getElementById('celdaE4').style.color="yellow";
}
function comprobarE5(){
	e5 = document.getElementById('celdaE5').style.color="yellow";
}
function comprobarE7(){
	e7 = document.getElementById('celdaE7').style.color="yellow";
}
function comprobarE8(){
	e8 = document.getElementById('celdaE8').style.color="yellow";
}
function comprobarE9(){
	e9 = document.getElementById('celdaE9').style.color="yellow";
}
function comprobarE10(){
	e10 = document.getElementById('celdaE10').style.color="yellow";
}
function comprobarE11(){
	e11 = document.getElementById('celdaE11').style.color="yellow";
}
//palabra aprendo color orange
function comprobarI3(){
	i3 = document.getElementById('celdaI3').style.color="orange";
}
function comprobarI4(){
	i4 = document.getElementById('celdaI4').style.color="orange";
}
function comprobarI5(){
	i5 = document.getElementById('celdaI5').style.color="orange";
}
function comprobarI7(){
	i7 = document.getElementById('celdaI7').style.color="orange";
}
function comprobarI8(){
	i8 = document.getElementById('celdaI8').style.color="orange";
}
function comprobarI9(){
	i9 = document.getElementById('celdaI9').style.color="orange";
}
function comprobarE(){
	E = document.getElementById('celdaE').style.color="brown";
}