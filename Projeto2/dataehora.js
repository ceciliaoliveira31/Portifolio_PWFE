window.onload = function(){

    var segundo = 0;
    var dezenas = 0;
    var appendSegundo = document.getElementById("segundo");
    var appendDezenas = document.getElementById("dezenas");
    var buttonIniciar = document.getElementById("buttonIniciar");
    var buttonParar = document.getElementById("buttonParar");
    var buttonResetar = document.getElementById("buttonResetar");
    var intervalo;

    buttonIniciar.onclick = function() {
        clearInterval(intervalo);
        intervalo = setInterval(IniciarCronometro, 10);
    }

    buttonParar.onclick = function(){

        clearInterval(intervalo);
    }

    buttonResetar.onclick = function() {

        clearInterval(intervalo);
        dezenas = "00";
        segundo = "00";

        appendSegundo.innerHTML = segundo;
        appendDezenas.innerHTML = dezenas;

    }

    function IniciarCronometro() {
        dezenas++;

        if(dezenas <= 9){
            appendDezenas.innerHTML = "0" + dezenas;
        }

        if(dezenas > 9){
            appendDezenas.innerHTML = dezenas;
        }

        if(dezenas > 99){
            console.log("segundo");
            segundo++;
            appendSegundo.innerHTML = "0" + segundo;
            dezenas = 0;
            appendDezenas.innerHTML = "0" + 0;
        }

        if(segundo > 9){
            appendSegundo.innerHTML = segundo;
        }
    }

}