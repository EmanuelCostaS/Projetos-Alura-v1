let numerosSorteados = [];
let numeroLimite = 10;
let secretNumber = randomNumber();
let tentativas = 1;

function campo(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    campo('h1', 'Secret number game');
    campo('p', 'Choose a number between 1 and 10');
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == secretNumber) {
        campo('h1', 'Acertou!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        campo('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        campo('h1', 'Errou >:(');
        if (secretNumber > chute){
            campo('p', 'O número secreto é maior');
        } else {campo('p', 'O número secreto é menor');}     
        tentativas++;
        limparCampo();
    }
}

function randomNumber(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementos = numerosSorteados.length;

    if (qtdElementos == numeroLimite) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)){
        return randomNumber();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function restartGame(){
    secretNumber = randomNumber();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}