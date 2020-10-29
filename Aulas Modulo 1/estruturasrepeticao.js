for (var i = 0; i < 10; i++) {
    //console.log(i);
}
// co comeco para o final:
var carros = ["gol", "palio", "uno", "celta", "sandero"];

for (var i = 0; i < carros.length; i++) {
    //console.log(carros[i]);
}
//outra maneira de escrever esse codigo acima de maneira decrescente:

for (var i = carros.length - 1; i >= 0; i--) {
    //console.log(carros[i]);
}

var i = 0;
while (i < carros.length) {
    //console.log(carros[i]);
    i++;
}

/*while (true) {
    //console.log("ola");
}*/

var i = 0;
while (i < carros.length) {
   // console.log(carros[i]);
    if (carros[i] === "palio") {
       // console.log("encontrei o palio");
        break;
    }
    i++;
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
while (i < numeros.length) {
    var num = numeros [i];
    i++;

    if (num % 2 === 0) {
       // console.log(num + " é par");
        continue;
    }

    //console.log(num + " é impar");

}

var j = 30;
do {
    j++;
    //console.log(j);
} while (j < 10);

// for of faz a mesma funcao do for porém tem a diferenca do for é trazer a informacao do indice
for (var carro of carros) {
    console.log(carro);

}

for (var i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}