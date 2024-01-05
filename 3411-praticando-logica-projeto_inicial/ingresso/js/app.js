
let pista = document.getElementById('qtd-pista');
let pistaValor = pista.innerHTML;

let superior = document.getElementById('qtd-superior');
let superiorValor = superior.innerHTML

let inferior = document.getElementById('qtd-inferior');
let inferiorValor = inferior.innerHTML

function comprar(){
    //Verifica o tipo de ingresso escolhido
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    console.log(tipoDeIngresso); 
    //Verifica a quantidade desejada
    let quantidade = document.getElementById('qtd').value;
    console.log(quantidade);
    //Verifica a quantidade disponível
    if (tipoDeIngresso == 'pista' && (pistaValor - quantidade) >= 0){    
        pistaValor = pistaValor - quantidade;
        pista.innerHTML = pistaValor;
    } else if (tipoDeIngresso == 'superior' && (superiorValor - quantidade) >= 0){
        superiorValor = superiorValor - quantidade;
        superior.innerHTML = superiorValor;
    } else if (tipoDeIngresso == 'inferior' && (inferiorValor - quantidade) >= 0){
        inferiorValor = inferiorValor - quantidade;
        inferior.innerHTML = inferiorValor;
    } else {alert('Quantidade indiponível');}
}
