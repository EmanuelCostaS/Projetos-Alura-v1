alert('Welcome to the guess the number game!');  
let maxValue = 90;
let SecretNumber = parseInt(Math.random() * maxValue + 1);
console.log(SecretNumber);
let chute;
let tentativas = 1;

while (chute != SecretNumber){
   chute = prompt(`Escolha um número entre 1 e ${maxValue}`);
   if (chute == SecretNumber) {
        break
    } else {
        if (chute < SecretNumber) {
            alert(`Você errou >:( o número secreto é maior que ${chute}`);
        } else {
            alert(`Você errou >:( o número secreto é menor que ${chute}`);
        }
        tentativas++;
    }

}
let TentativaValor = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou! ${SecretNumber} com ${tentativas} ${TentativaValor}`);
