let carrinho = [];
let total = 0;
let qtdeTotal = 0;
let carrin = document.getElementById('lista-produtos');

limpar();

function adicionar(){
    //Encontrar o produto escolhido 
    let produto = document.getElementById('produto').value.split('-');
    let nomeProduto = produto[0];
    let valorProduto = produto[1].replace ( /[^\d.]/g, '' );
    let qtde = document.getElementById('quantidade').value;

    //Adicionar valor no subtotal
    total = parseInt(total) + qtde * parseInt(valorProduto);
    //Adicionar ao carrinho
    for (let i = 0; i < qtde; i++) {
        carrinho.push(nomeProduto);
    }
    
    carrin.innerHTML = carrin.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtde}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto * qtde}</span>
  </section>`
    qtdeTotal = parseInt(qtdeTotal) + parseInt(qtde);
    document.getElementById('valor-total').textContent = `R$${total}`;
    //Calcular total


    console.log(produto);
    console.log(qtde);
    console.log(nomeProduto);
    console.log(valorProduto);
    console.log(total);
    console.log(carrinho);
    console.log(qtdeTotal);
}
function limpar(){
    total = 0;
    carrin.innerHTML = `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> </span> <span class="texto-azul"> </span>
  </section>`;
  document.getElementById('valor-total').textContent = `R$${total}`;
}