
// function  iniciarJuego() {
//     generarVidas();
//     randomizar();
// }
function generarVidas() {
console.log("entra en la funcion");
    for(i=0;i<=20;i++) {
    document.getElementById("contenedorCorazones").innerHTML += "<img src='Imagenes proyecto juego/imagenCorazon.png'>"; 
}
}
// function randomizar() {
//     generarFondo();
//     generarEnemigo();
// }
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