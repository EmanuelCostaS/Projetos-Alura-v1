
let nomes = [];
let listaSorteio = document.getElementById('lista-sorteio');
let nome;

function adicionar(){
    nome = document.getElementById('nome-amigo').value;
    nomes.push(nome);
    console.log(`O nome é ${nome}, os nomes inseridos foram ${nomes}`);

    if (nomes.length == 1){
        document.getElementById('lista-amigos').append(nome);
    } else {
        document.getElementById('lista-amigos').append(', '+ nome);
    }
}

function sortear(){
    nome = document.getElementById('nome-amigo').value;
    listaSorteio = document.getElementById('lista-sorteio');
    let jaSorteados = [];
    let i = jaSorteados.length;
    let max = nomes.length;

    while(jaSorteados.length < max){
        numeroSorteado = parseInt(Math.random() * (max + 1));
        if (numeroSorteado !== i && !jaSorteados.includes(numeroSorteado - 1)){
            jaSorteados.push(numeroSorteado - 1);
        }
    }

    let nomesSorteados = [];
    for (let j = 0; j < jaSorteados.length; j++){
        console.log(jaSorteados[j])
        for (k = 0; k < nomes.length; k++) {
            if (jaSorteados[j] === k){
                nomesSorteados.push(nomes[jaSorteados[j]]);
            }
            //console.log(nomes[k]);
          } 
          console.log(nomesSorteados);     
    }
    //console.log(jaSorteados);
    
    for (let m = 0; m < nomes.length; m++){
        listaSorteio.innerHTML = listaSorteio.innerHTML +  nomes[m] + ' --> ' + nomesSorteados[m] + '<br>'
    }    
}

function reiniciar(){
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('nome-amigo').innerHTML = '';

    nomes = [];
    jaSorteados = [];
    nomesSorteados = [];
    nome = '';
    listaSorteio.innerHTML = '';
    
}