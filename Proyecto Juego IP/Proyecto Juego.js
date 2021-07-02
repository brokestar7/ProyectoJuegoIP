
let arrFondos=["fondoCastillo1.gif","fondoMontaña1.gif","fondoRioDia.gif","fondoRioDia2.gif"];
let numeroAleatorioEnemigo;
let numeroAleatorioFondo;
let contadorCorazones = 0;
let contadorCorazonesEnemigo = 0;   

function  iniciarJuego() {
    inicializar();
    generarVidas();
    randomizar();
}
 
function generarVidas() {
    for(i=0;i<20;i++) {
    document.getElementById("contenedorCorazones").innerHTML += "<img class='imgCorazon' src='Imagenes proyecto juego/imagenCorazon.png'>"; 
    }
}
function randomizar() {
    generarFondo();
    generarEnemigo();
} 

function generarFondo() {
    numeroAleatorioFondo= Math.floor(Math.random () *4);
    document.getElementById("fondoJuego").innerHTML = "<img id='imagenFondo' src='Imagenes proyecto juego/"+arrFondos[numeroAleatorioFondo]+"'>"

}

function generarEnemigo() {
    numeroAleatorioEnemigo = Math.floor(Math.random () *10)+1;
    alert(numeroAleatorioEnemigo);
    document.getElementById("enemigo").innerHTML = "<img class='spriteEnemigo' src='Imagenes enemigos/" + numeroAleatorioEnemigo + ".gif'>";
    //class spriteEnemigo para despues modificarlo en el css
    generarVidasEnemigo();
    generarCombate();
}

function generarVidasEnemigo(){
    for(i=0;i<20;i++) {
        document.getElementById("contenedorCorazonesEnemigo").innerHTML += "<img class='imgCorazon' src='Imagenes proyecto juego/imagenCorazonEnemigo.png'>"; 
        }
}

function inicializar(){
    document.getElementById("contenedorCorazones").innerHTML ="";
    document.getElementById("contenedorCorazonesEnemigo").innerHTML ="";
}

function inicializar(){

    document.getElementById("contenedorCorazones").innerHTML ="";
    document.getElementById("contenedorCorazonesEnemigo").innerHTML ="";

}


// }
// function generarLayoutAtaques(){
//     compararCombate();
// }
// function compararCombate(ataqueEscogido) {
//     //aqui se comparara el los ataques como si fuera un piedra papel y tijeras
//     quitarVidaHumano();
//     quitarVidaEnemigo();
//     restarMp();
// }
// function generarEnemigo(){
//     generarAtaquesEnemigo();
// }
function inicializar() {
    document.getElementById("contenedorCorazones").innerHTML = "";
    document.getElementById("contenedorCorazonesEnemigo").innerHTML = "";
    
}