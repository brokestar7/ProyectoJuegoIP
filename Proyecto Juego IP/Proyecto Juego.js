
function  iniciarJuego() {
     generarVidas();
     randomizar();
}
function generarVidas() {
console.log("entra en la funcion");
    for(i=0;i<=20;i++) {
    document.getElementById("contenedorCorazones").innerHTML += "<img id='imgCorazon' src='Imagenes proyecto juego/imagenCorazon.png'>"; 
    }
}
function randomizar() {
    generarFondo();
    generarEnemigo();
} 
function generarFondo() {
    numeroAleatorioFondo= Math.floor(Math.random () *10);
    document.getElementById("fondoJuego").innerHTML = "<img id='fondo'src='Imagenes proyecto juego/fondoPraderaDia.jpg'>";

}
function generarEnemigo() {
    numeroAleatorioEnemigo = Math.floor(Math.random () *3)+1;
    alert(numeroAleatorioEnemigo);
    document.getElementById("enemigo").innerHTML = "<img class='spriteEnemigo' src='Imagenes enemigos/" + numeroAleatorioEnemigo + ".gif'>";
    //class spriteEnemigo para despues modificarlo en el css
}



// generarCombate();
// function generarCombate(){
//     mostrarLayoutAtaques();

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