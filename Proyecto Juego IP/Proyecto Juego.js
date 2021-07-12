let arrFondos = ["fondoCastillo1.gif", "fondoMontaña1.gif", "fondoRioDia.gif", "fondoRioDia2.gif"];
let arrAtaques = ["Ataque 1", "Ataque 2", "Ataque 3", "Vida", "Defensa"];
let arrImgAtaques = ["espada4.png", "espada11.gif", "espada12.gif", "pocionVida.png", "shield.png"];
let numeroAleatorioEnemigo;
let numeroAleatorioFondo;
let numAletorioAtaque;
let contadorCorazones = 20;
let contadorCorazonesEnemigo = 20;
let contadorMana = 100;


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
    document.getElementById("contenedorCorazones").innerHTML = "";
    for (i = 0; i < contadorCorazones; i++) {
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
    document.getElementById("fondoJuego").style.backgroundImage = "url('Imagenes proyecto juego/" + arrFondos[numeroAleatorioFondo] + "')";
}

function generarEnemigo() {
    numeroAleatorioEnemigo = Math.floor(Math.random() * 10) + 1;
    document.getElementById("enemigo").innerHTML = "<img class='sprites' src='Imagenes enemigos/" + numeroAleatorioEnemigo + ".gif'>";
    //class spriteEnemigo para despues modificarlo en el css
    generarVidasEnemigo();
    generarCombate();
}

function generarVidasEnemigo() {
    document.getElementById("contenedorCorazonesEnemigo").innerHTML = "";
    for (i = 0; i < contadorCorazonesEnemigo; i++) {
        document.getElementById("contenedorCorazonesEnemigo").innerHTML += "<img class='imgCorazon' src='Imagenes proyecto juego/imagenCorazonEnemigo.png'>";
    }
}

//5 botones de ataque del usuario (3 ataques, 1 defensa y 1 pocima de recuperación)
function generarCombate() {

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

function compararCombate(opcionElegida) {

    switch (opcionElegida) {
        case 0:
            calcularDaño(opcionElegida);
            comprobarVidas();
            break;
        case 1:
            calcularDaño(opcionElegida);
            comprobarVidas();
            break;
        case 2:
            calcularDaño(opcionElegida);
            comprobarVidas();
            break;
        case 3:
            calcularSkillHeal(); //añadir vida, añadir fx sonido
            comprobarVidas();
            break;
        case 4:
            calcularSkillDefensa(opcionElegida);
            document.getElementById("fxSounds").innerHTML = '<audio autoplay src="musica/shieldFx.wav"></audio>';
            comprobarVidas();
            break;
    }
}

function calcularDaño(ataqueElegido) {
    switch (ataqueElegido) {
        case 0:
            contadorCorazonesEnemigo = contadorCorazonesEnemigo - 1;
            document.getElementById("historialBatallas").innerHTML += "<br><p class='daño'>HAS INFLINGIDO 1 DE DAÑO.</p>";
            alert(contadorCorazonesEnemigo);
            generarAtaquesEnemigo(ataqueElegido);
            generarVidasEnemigo();
            alert("vida usuario" + contadorCorazones);
            break;
        case 1:
            contadorCorazonesEnemigo = contadorCorazonesEnemigo - 5;
            document.getElementById("historialBatallas").innerHTML += "<br><p class='daño'>HAS INFLINGIDO 5 DE DAÑO.</p>";
            alert(contadorCorazonesEnemigo);
            generarAtaquesEnemigo(ataqueElegido);
            generarVidasEnemigo();
            alert("vida usuario" + contadorCorazones);
            break;
        case 2:
            contadorCorazonesEnemigo = contadorCorazonesEnemigo - 10;
            document.getElementById("historialBatallas").innerHTML += "<br><p class='daño'>HAS INFLINGIDO 10 DE DAÑO.</p>";
            alert(contadorCorazonesEnemigo);
            generarAtaquesEnemigo(ataqueElegido);
            generarVidasEnemigo();
            alert("vida usuario" + contadorCorazones);
            break;
    }

}

function generarAtaquesEnemigo(opcionElegida) {
    numAletorioAtaque = Math.floor(Math.random() * 3);
    console.log("Ataque enemigo" + numAletorioAtaque);
    contadorCorazones = contadorCorazones - 1;
    if (numAletorioAtaque == 0) { //ATAQUE 1
        document.getElementById("historialBatallas").innerHTML += "<br><p class='daño'>TE HAN INFLINGIDO 1 DE DAÑO.</p>";
        generarVidas();
    } else if (numAletorioAtaque == 1) { //ATAQUE 2
        document.getElementById("historialBatallas").innerHTML += "<br><p class='daño'>TE HAN INFLINGIDO 5 DE DAÑO.</p>";
        contadorCorazones = contadorCorazones - 5;
        generarVidas();
    } else { //HEAL
        calcularSkillHealEnemigo();
        //document.getElementById("historialBatallas").innerHTML+="<br><p class='defensa'>SE HA ACTIVADO EL ESCUDO ENEMIGO.</p>";
    }
}

function calcularSkillDefensa() {
    numAletorioAtaque = Math.floor(Math.random() * 2);
    let defensa = Math.floor(Math.random() * 2);
    console.log("defensa usuario" + defensa);

    if (defensa == 0) {
        document.getElementById("historialBatallas").innerHTML += "<br><p class='defensa'>SE HA ACTIVADO TU ESCUDO.</p>";
        alert("vida usuario" + contadorCorazones);
    } else {
        if (numAletorioAtaque == 0) { //ATAQUE 1
            document.getElementById("historialBatallas").innerHTML += "<br><p class='daño'>TE HAN INFLINGIDO 1 DE DAÑO.</p>";
            contadorCorazones = contadorCorazones - 1;
            generarVidas();
        } else if (numAletorioAtaque == 1) { //ATAQUE 2
            document.getElementById("historialBatallas").innerHTML += "<br><p class='daño'>TE HAN INFLINGIDO 5 DE DAÑO.</p>";
            contadorCorazones = contadorCorazones - 5;
            generarVidas();
            alert("vida usuario" + contadorCorazones);
        }
    }
}

function calcularSkillHealEnemigo() {

    contadorCorazonesEnemigo = contadorCorazonesEnemigo + 3;
    generarVidasEnemigo();
    document.getElementById("fxSounds").innerHTML = '<audio autoplay src="musica/vidasFx1.wav" type="audio/mp3"></audio>';
   

}

function calcularSkillHeal() {
    // contadorCorazones = contadorCorazones;
    // contadorMana = contadorMana;
    contadorCorazones = contadorCorazones + 3; // vidas aumentan 3
    contadorMana = contadorMana - 20;; // mana disminuye 20
    document.getElementById("fxSounds").innerHTML = '<audio autoplay src="musica/vidasFx1.wav" type="audio/mp3"></audio>';
    generarVidas();
    console.log(contadorMana + "mana user");
}

function comprobarVidas(){

    if (contadorCorazonesEnemigo <= 0) {
        ganarBatalla();
    }
    else if (contadorCorazones <= 0) {
        perderBatalla();
    }
}

function ganarBatalla() {

    let backgroundMusic = document.getElementById("musicaFondo");

        backgroundMusic.muted = true;//muteo musica fondo
        document.getElementById("fxSounds").innerHTML = '<audio autoplay src="musica/Win.mp3" type="audio/mp3"></audio>';//fx sonido victoria
        document.getElementById("historialBatallas").innerHTML = "¡HAS GANADO! <img src=''>";
        contadorMana = contadorMana + 50;// hay que concretar cuanto se suma
        // falta generar flecha con la funcion "siguienteNivel()"
    }
    
function perderBatalla() {

    let backgroundMusic = document.getElementById("musicaFondo");

        backgroundMusic.muted = true;// muteo musica fondo
        document.getElementById("fxSounds").innerHTML = '<audio autoplay src="musica/GameOver.mp3" type="audio/mp3"></audio>';//fx sonido derrota
        document.getElementById("historialBatallas").innerHTML = "¡HAS PERDIDO! <img class='imgGameOver' src='imagenes proyecto juego/dead.gif'>";//gif game over
        document.getElementById("spriteEnemigo").innerHTML = "<img class='imgGameOver' src='imagenes proyecto juego/dead2.gif'>"
}

function mutearMusica() {

    let backgroundMusic = document.getElementById("musicaFondo");

    backgroundMusic.muted = true;
    document.getElementById("botonMusica").innerHTML = '<button type="button" onclick="desmutearMusica()"><img class="imgAltavoz" src="Imagenes objetos/mute.png"></button>'
}

function desmutearMusica() {

    let backgroundMusic = document.getElementById("musicaFondo");

    backgroundMusic.muted = false;
    document.getElementById("botonMusica").innerHTML = '<button type="button" onclick="mutearMusica()"><img class="imgAltavoz" src="Imagenes objetos/desmute.png"></button>'
}

//restarVidas()
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