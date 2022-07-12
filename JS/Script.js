window.onload = function IniciaJogo() {
    var numeropensado = Math.round (Math.random() * 10);
    var element = document.getElementsByClassName('resultado')
    var chute = window.prompt(" digite seu chute");

    if (chute == numeropensado) {
        document.write ("voce acertou!<br>");

     }
    else {
        document.write(`voce errou, o numero pensado foi ${numeropensado} <br>`);
    }
    IniciaJogo();
}