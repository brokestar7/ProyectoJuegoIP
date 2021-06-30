let arrFondos=["fondoCastillo1.gif","fondoMontaña1.gif","fondoRioDia.gif","fondoRioDia2.gif"];
function  iniciarJuego() {
    inicializar();
    generarVidas();
    randomizar();
}
function randomizar() {
    generarFondo();
    // generarEnemigo();
} 
function generarVidas() {
    for(i=0;i<=20;i++) {
    document.getElementById("contenedorCorazones").innerHTML += "<img id='imgCorazon' src='Imagenes proyecto juego/imagenCorazon.png'>"; 
    }
}
function generarFondo() {
    numeroAleatorioFondo= Math.floor(Math.random () *4);
    document.getElementById("fondoJuego").innerHTML = "<img id='imagenFondo' src='Imagenes proyecto juego/"+arrFondos[numeroAleatorioFondo]+"'>"

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
function inicializar() {
    document.getElementById("contenedorCorazones").innerHTML = "";
}