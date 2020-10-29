/* criar um jogo no qual o jogador tenha que advinhar um numero. 
o jogo deve gerar um numero aleatorio de 1 a 100, e depois desafiar
o jogador a descobrir qual é o numero em no maximo 10 tentativas.
a cada tentativa, caso o jogador não tenha certado o numero, o jogo
deve informar se o numero é maior ou menor que o sorteado.
O jogo termina se o jogador acertar o numero ou acabarem o numero de tentativas.

1º passo: Gerar numero aleatorio de 1 a 100
2º passo: Inicializar o numero de tentativas como 10
3º passo: pedir para o jogador advinhar o numero
4º passo: Decrementar o numero de tentativas
5º passo: verificar se o numero está certo
6º passo: Se a tentativa estiver correta 
    - ("parabéns você ganhou") - O jogo acabou
7º passo: Se a tentativa estiver errada e acabaram as tentativas 
    - ("você perdeu") - O jogo acabou
8º passo: Se a tentativa estiver errada e ainda existam tentativas
    - Informar se a tentativa é maior ou menor que o numero sorteado
    - Pedir outra tentativa para o jogador

*/
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var numeroAleatorio = Math.round(Math.random() * 100);
if (numeroAleatorio === 0) {
    numeroAleatorio = 1;
}

var numeroDeTentativas = 10;

console.log(numeroAleatorio);

pergunta();

function pergunta() {
    rl.question("Digite um número: ", function(numero){
        numero = parseInt(numero);
        
        numeroDeTentativas--;
         if (numero === numeroAleatorio) {
             console.log("Parabéns você ganhou!");
            rl.close();
         } else if (numeroDeTentativas === 0) {
            console.log("Você não descobriu o numero em 10 tentativas");
            rl.close();
         } else if (numero > numeroAleatorio) {
            console.log("Errado, você ainda tem " + numeroDeTentativas + " tentativas, o número informado é maior que o sorteado");
            pergunta();
            } else if (numero < numeroAleatorio) {
            console.log("Errado, você ainda tem " + numeroDeTentativas + " tentativas, o número informado é menor que o sorteado");
            pergunta();
        }
    });
} 