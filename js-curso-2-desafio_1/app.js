let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function consoleClicado(){
    console.log('Console Clicado');
}

function alertaClicado(){
    console.log('Alerta clicado');
    alert('Eu amo JS');
}

function promptClicado(){
    console.log('Prompt clicado');
    let cidade = prompt('De que cidade você é? ');
    alert(`Sério? Estive em ${cidade} e lembrei de você`);
}

function somaClicado(){
    console.log('Soma clicado');
    let n1 = prompt('Escolha o primeiro número:');
    let n2 = prompt('Escolha o segundo número:');
    alert(`A soma de ${n1} e ${n2} é ` + (Number(n1) + Number(n2)));
}