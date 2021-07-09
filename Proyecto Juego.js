let arrFondos = ["fondoCastillo1.gif", "fondoMontaña1.gif", "fondoRioDia.gif", "fondoRioDia2.gif"];
let arrAtaques = ["Ataque 1", "Ataque 2", "Ataque 3", "Vida", "Defensa"];
let arrImgAtaques = ["espada4.png", "espada11.gif", "espada12.gif", "pocionVida.png", "shield.png"];
let numeroAleatorioEnemigo;
let numeroAleatorioFondo;
let numeroAletorioAtaque;
let contadorCorazones = 0;
let contadorCorazonesEnemigo = 0;
let contadorMana= 100;

function iniciarJuego() {
    inicializar();
    randomizar();
    generarVidas();
    
}


function inicializar() {
    document.getElementsByClassName("layoutSkills").innerHTML = "";
    document.getElementById("contenedorCorazonesEnemigo").innerHTML = "";

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
    //document.getElementById("fondo juego").innerHTML='<img class="imagenFondo" src="Imagenes proyecto juego/' + arrFondos[numeroAleatorioFondo];
}

function generarEnemigo() {
    numeroAleatorioEnemigo = Math.floor(Math.random() * 10) + 1;
    document.getElementById("enemigo").innerHTML = "<img class='sprites' src='Imagenes enemigos/" + numeroAleatorioEnemigo + ".gif'>";
    //class spriteEnemigo para despues modificarlo en el css
    generarVidasEnemigo();
    generarCombate();
}

function generarVidasEnemigo() {
    for (i = 0; i < 20; i++) {
        document.getElementById("contenedorCorazonesEnemigo").innerHTML += "<img class='imgCorazon' src='Imagenes proyecto juego/imagenCorazonEnemigo.png'>";
    }
}

//5 botones de ataque del usuario (3 ataques, 1 defensa y 1 pocima de recuperación)
function generarCombate() {
    /* for (i=0;i<5;i++){
          document.getElementById("botonesAtaques").innerHTML
          "<a href='#' id='botonesAtaques"+i+"' onclick='generarLayoutAtaques("+i+")'> "+"<img src='Imagenes objetos/"+arrImgAtaques[i]+"' width='50px' height='50px' >"+" </a> ";
          compararCombate();
      }*/
    
    document.getElementById("musicaFondo").src = "musica/8 bit I.mp3";
    //document que cambia el src del audio
    mostrarLayoutAtaques();
    
}

function mostrarLayoutAtaques() {
    document.getElementById("skill1").innerHTML = "<div class='layoutSkills'>Salud Usuario</div>";
    document.getElementById("skill2").innerHTML = "<div id='contenedorCorazones' class='layoutSkills'></div>"
    document.getElementById("skill3").innerHTML = "<div class='layoutSkills' onclick='compararCombate(0)'> " + arrAtaques[0] + " <img src='Imagenes objetos/" + arrImgAtaques[0] + "'>" + " </div>";
    document.getElementById("skill4").innerHTML = "<div class='layoutSkills' onclick='compararCombate(1)'> " + arrAtaques[1] + " <img src='Imagenes objetos/" + arrImgAtaques[1] + "'>" + " </div>";
    document.getElementById("skill5").innerHTML = "<div class='layoutSkills' onclick='compararCombate(2)'> " + arrAtaques[2] + " <img src='Imagenes objetos/" + arrImgAtaques[2] + "'>" + " </div>";
    document.getElementById("skill6").innerHTML = "<div class='layoutSkills' onclick='compararCombate(3)'> " + arrAtaques[3] + " <img src='Imagenes objetos/" + arrImgAtaques[3] + "'>" + " </div>";
    document.getElementById("skill7").innerHTML = "<div class='layoutSkills' onclick='compararCombate(4)'> " + arrAtaques[4] + " <img src='Imagenes objetos/" + arrImgAtaques[4] + "'>" + " </div>";
} 

function compararCombate(opcionElegida){

    switch(opcionElegida) {
        case 0,1,2:
          calcularDaño();
          break;
        case 3:
          calcularSkillHeal();//añadir vida, añadir fx sonido
          break;
        case 4:
          calcularSkillDefense();
          break;
      } 
}

function calcularSkillHeal(){

    contadorCorazones;// vidas aumentan 3
    contadorMana;// mana disminuye 20
    document.getElementById("fxSounds").innerHTML= '<audio autoplay src="musica/vidasFx1.wav" type="audio/mp3"></audio>';//genera el audio con el fx de sonido de la vida
    alert("llega");
}

function mutearMusica(){
    let backgroundMusic = document.getElementById("musicaFondo");

    backgroundMusic.muted = true;
    document.getElementById("botonMusica").innerHTML= '<button type="button" onclick="desmutearMusica()"><img class="imgAltavoz" src="Imagenes objetos/mute.png"></button>'
}

function desmutearMusica(){

    let backgroundMusic = document.getElementById("musicaFondo");

    backgroundMusic.muted = false;
    document.getElementById("botonMusica").innerHTML= '<button type="button" onclick="mutearMusica()"><img class="imgAltavoz" src="Imagenes objetos/desmute.png"></button>'
}

//     quitarVidaHumano();
//     quitarVidaEnemigo();
//     restarMp();           
// }



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