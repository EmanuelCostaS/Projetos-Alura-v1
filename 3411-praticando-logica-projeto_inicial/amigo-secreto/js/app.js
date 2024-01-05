let nomes = ['a', 'b', 'c', 'd'];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    nomes.push(nome);
    console.log(`O nome secreto é ${nome}, os nomes inseridos foram ${nomes}`);

    if (nomes.length == 1){
        document.getElementById('lista-amigos').append(nome);
    } else {document.getElementById('lista-amigos').append(', '+ nome);}
}

function sortear(){
    let jaSorteados = [];
    let listaAssociados = [];
    let i = 0;
    let max = nomes.length;
    let numeroSorteado;

    while (jaSorteados.length < max){
        numeroSorteado = parseInt(Math.random() * (max));
        if (numeroSorteado != i && typeof jaSorteados[numeroSorteado] === 'undefined'){
            jaSorteados.push(numeroSorteado);
        } else {}
        console.log(numeroSorteado);
        console.log(jaSorteados);
        
    }

    
}

function reiniciar(){

}