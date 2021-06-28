function  iniciarJuego() {
    generarVidas();
    randomizar();
}
function randomizar() {
    generarFondo();
    generarEnemigo();
}
generarCombate();
function generarCombate(){
    mostrarLayoutAtaques();

}
function generarLayoutAtaques(){
    compararCombate();
}
function compararCombate(ataqueEscogido) {
    //aqui se comparara el los ataques como si fuera un piedra papel y tijeras
    quitarVidaHumano();
    quitarVidaEnemigo();
    restarMp();
}
function generarEnemigo(){
    generarAtaquesEnemigo();
}