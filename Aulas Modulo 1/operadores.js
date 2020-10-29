var soma = 1 + 2;
var subtracao = 5 - 3;
var multiplicacao = 5 * 4;
var divisao = 100 / 4;
var resto = 20 % 3;


console.log("soma: " + soma);
console.log("subtracao: " + subtracao);
console.log("multiplicacao: " + multiplicacao);
console.log("divisao: " + divisao);
console.log("divisao: " + resto);


var num1 = 10;
var num2 = 50;
var resultado = (num1 + num2) / 8 + 2;

console.log("precedencia: " + resultado);

var incremento = 1;
incremento = incremento + 1;
incremento++;
console.log("incremento: " + incremento);

var atribuicaoComAdicao = 5;
atribuicaoComAdicao += 6; // o mesmo que a = a + 6
console.log("atribuicao com adicao: " + atribuicaoComAdicao);

var decremento = 5;
 decremento = decremento - 1;
 decremento--;
 console.log("decremento: " + decremento);

 var atribuicaoComSubtracao = 10;
 // o mesmo que atribuicaoComSubtracao = atribuicaoComSubtracao - 4;
atribuicaoComSubtracao -= 4;
 console.log("atribuicao com subtracao: " + atribuicaoComSubtracao);

 var atribuicaoComMultiplicacao = 4;
 // o mesmo que atribuicaoComMultiplicacao = atribuicaoComMultiplicacao * 5 
 atribuicaoComMultiplicacao *= 5;
 console.log("atribuicao com multiplicacao: " + atribuicaoComMultiplicacao);

 var atribuicaoComDivisao = 20;
 // atribuicaoComDivisao = atribuicaoComDivisao / 4
 atribuicaoComDivisao /= 4;
 console.log("atribuicao com divisao: " + atribuicaoComDivisao);

 var a = 4;
 var b = 3;
 var adicaoIncrementoPosterior = a + b++;
 console.log("adicao com intremento posterior: " + adicaoIncrementoPosterior);

 var adicaoIncrementoAnterior = a + ++b;
 console.log("adicao com incremento anterior: " + adicaoIncrementoAnterior);

var c = 5;
var d = 6;
var subtracaoDecrementoPosterior = c + d--;
console.log("subtracao com decremento posterior: " + subtracaoDecrementoPosterior);

var subtracaoDecrementoAnterior = c + --d;
console.log("subtracao com decremento anterior: " + subtracaoDecrementoAnterior);
