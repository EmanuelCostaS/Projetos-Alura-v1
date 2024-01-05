
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`); //Verifica id do jogo
    let statusInicial = gameClicado.querySelector('a'); //Pega o estado inicial (alugar ou devolver)
    let nome = gameClicado.querySelector('.dashboard__item__name'); //Pega o nome do jogo
    let cor = gameClicado.querySelector('.dashboard__item__button');
    let imagem = gameClicado.querySelector('.dashboard__item__img');

    console.log(nome.innerHTML);   
    console.log(statusInicial.innerHTML);
    console.log(`id == ${id}`);
    console.log(cor);

    if (cor.getElementsByClassName('dashboard__item__button')){
        console.log('Caneta azul')
    } else {console.log('azul caneta')}

    if (statusInicial.innerHTML == 'Devolver'){
        statusInicial.innerHTML = 'Alugar';
        statusInicial.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        statusInicial.innerHTML = 'Devolver';
        statusInicial.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
    }
}
    
    