
let arrFondos=["fondoCastillo1.gif","fondoMontaña1.gif","fondoRioDia.gif","fondoRioDia2.gif"];
let arrAtaques=["Ataque","Ataque","Ataque","Vida","Defensa"];
let arrImgAtaques=["espada4.png","espada2.png","espada10.gif","pocionVida.png","shield.png"];
let numeroAleatorioEnemigo;
let numeroAleatorioFondo;
let numeroAletorioAtaque;
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
    //alert(numeroAleatorioEnemigo);
    document.getElementById("enemigo").innerHTML = "<img class='sprites' src='Imagenes enemigos/" + numeroAleatorioEnemigo + ".gif'>";
    //class spriteEnemigo para despues modificarlo en el css
    generarVidasEnemigo();
    generarCombate();
    generarAtaquesEnemigo();
    
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


//5 botones de ataque del usuario (3 ataques, 1 defensa y 1 pocima de recuperación)
function generarCombate(){
    for (i=0;i<5;i++){
        document.getElementById("botonesAtaques").innerHTML+=
        "<br> <a href='#' id='botonesAtaques"+i+"' onclick='generarLayoutTotales("+i+")'> "+arrAtaques[i]+
        "<img src='Imagenes objetos/"+arrImgAtaques[i]+"' width='25px' height='25px' >"+" </a><br> ";
        compararCombate();
    }
}

//aletorio de los ataques que realiza el enemigo
function generarAtaquesEnemigo(){
    numeroAletorioAtaque=Math.floor(Math.random () *3);
    //console.log("ataque enemigo "+numeroAletorioAtaque)
}

/*function compararCombate(ataqueEscogido) {
    //ataque escogido es 0 (ataque 1)
   if (ataqueEscogido==0){
        //document.getElementById("").innerHTML="Ha infligido 100 de daño"
    }

  
//     
 

     //aqui se comparara el los ataques como si fuera un piedra papel y tijeras
 //    quitarVidaHumano();
//     quitarVidaEnemigo();
//     restarMp();*/

