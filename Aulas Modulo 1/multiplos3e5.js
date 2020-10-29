/*
Encontrar todos os numeros naturais multiplos de 3 e 5 antes de 1000
e fazer a somas deles
*/
var multiplos = [];
for (var i = 3; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        multiplos.push(i);
    }
}
var sum = 0;
for (i = 0; i < multiplos.length; i++) {
    sum += multiplos[i];
}
console.log(sum);