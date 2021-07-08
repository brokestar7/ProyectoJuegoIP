let arrFondos=["fondoCastillo1.gif","fondoMontaña1.gif","fondoRioDia.gif","fondoRioDia2.gif"];
let arrAtaques=["Ataque 1","Ataque 2","Ataque 3","Vida","Defensa"];
let arrImgAtaques=["espada4.png","espada11.gif","espada12.gif","pocionVida.png","shield.png"];
let numeroAleatorioEnemigo;
let numeroAleatorioFondo;
let numeroAletorioAtaque;
let contadorCorazones = 0;
let contadorCorazonesEnemigo = 0; 

function iniciarJuego() {
    inicializar();
    generarVidas();
    generarSpriteUsuario();
    randomizar();
}

function generarSpriteUsuario() {
    document.getElementById("spriteUsuario").innerHTML = "<img class='sprites' src='Imagenes personajes/personaje3.gif' alt='spriteUsuario'>";
}

function generarVidas() {
    for (i = 0; i < 20; i++) {
        document.getElementById("contenedorCorazones").innerHTML += "<img class='imgCorazon' src='Imagenes proyecto juego/imagenCorazon.png'>";
    }
}

function generarSpriteUsuario() {
    document.getElementById("spriteUsuario").innerHTML = "<img class='sprites' src='Imagenes personajes/personaje3.gif' alt='spriteUsuario'>";
}

function randomizar() {
    generarFondo();
    generarEnemigo();
}

function generarFondo() {
    numeroAleatorioFondo = Math.floor(Math.random() * 4);
    document.getElementById("fondoJuego").innerHTML = "<img class='imagenFondo' src='Imagenes proyecto juego/" + arrFondos[numeroAleatorioFondo] + "'>";
}

function generarEnemigo() {
    numeroAleatorioEnemigo = Math.floor(Math.random() * 10) + 1;
    document.getElementById("enemigo").innerHTML = "<img class='sprites' src='Imagenes enemigos/" + numeroAleatorioEnemigo + ".gif'>";
    generarVidasEnemigo();
    generarCombate();
    generarAtaquesEnemigo();
}

function generarVidasEnemigo() {
    for (i = 0; i < 20; i++) {
        document.getElementById("contenedorCorazonesEnemigo").innerHTML += "<img class='imgCorazon' src='Imagenes proyecto juego/imagenCorazonEnemigo.png'>";
    }
}

function inicializar() {
    document.getElementById("contenedorCorazones").innerHTML = "";
    document.getElementById("contenedorCorazonesEnemigo").innerHTML = "";
}

//5 botones de ataque del usuario (3 ataques, 1 defensa y 1 pocima de recuperación)
function generarCombate(){
    mostrarLaoutAtaques();
  /* for (i=0;i<5;i++){
        document.getElementById("botonesAtaques").innerHTML
        "<a href='#' id='botonesAtaques"+i+"' onclick='generarLayoutAtaques("+i+")'> "+"<img src='Imagenes objetos/"+arrImgAtaques[i]+"' width='50px' height='50px' >"+" </a> ";
        compararCombate();
    }*/
}
 function mostrarLaoutAtaques(){
    document.getElementById("botonesAtaques").innerHTML=
    "<br><a href='#' onclick='compararCombate(0)'> "+arrAtaques[0]+" <img src='Imagenes objetos/"+arrImgAtaques[0]+"'  >"+" </a> <br>"+
    "<a href='#'  onclick='compararCombate(1)'> "+arrAtaques[1]+" <img src='Imagenes objetos/"+arrImgAtaques[1]+"'  >"+" </a> <br>"+
    "<a href='#'  onclick='compararCombate(2)'> "+arrAtaques[2]+" <img src='Imagenes objetos/"+arrImgAtaques[2]+"'  >"+" </a> <br>"+
    "<a href='#'  onclick='compararCombate(3)'> "+arrAtaques[3]+" <img src='Imagenes objetos/"+arrImgAtaques[3]+"' >"+" </a> <br>"+
    "<a href='#'  onclick='compararCombate(4)'> "+arrAtaques[4]+" <img src='Imagenes objetos/"+arrImgAtaques[4]+"' >"+" </a> <br>";
    
   
}

function generarAtaquesEnemigo(){
    numeroAletorioAtaque=Math.floor(Math.random() * 3);
}

function calcularSkillDefense(){

    let defensa=Math.floor(Math.random() * 2);
    console.log("defensa "+defensa);
   
    if (defensa==0){
        document.getElementById("tipoDefensa").innerHTML="Se ha activado la defensa";
       
    }else{
        document.getElementById("tipoDefensa").innerHTML="Recibes 100 de daño"
        vidaUsuario=vidaUsuario-1;
    
    }
}

function restarVida(perdedor){
    if (perdedor =="hum") {
        vidaUsuario--;
        mostrarCorazones(vidaUsuario, "marcadorHum"); 
    }
    if (perdedor =="com") {
        vidaEnemigo--;
        mostrarCorazones(vidaEnemigo, "marcadorCom"); 
    }
}
/*calcularSkillDefense
Dentro de calcularBatalla()
///
1 bloquea el golpe
2 recibe daño
contador vida restarle.






*/
// function compararCombate(ataqueEscogido) {
//     //aqui se comparara el los ataques como si fuera un piedra papel y tijeras
//     quitarVidaHumano();
//     quitarVidaEnemigo();
//     restarMp();
// }
