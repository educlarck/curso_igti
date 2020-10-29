var carros = ["gol", "palio", "uno", "sandero", "creta"];

var carro = carros.pop(); // função pop diferente do length - 1, retira o ultimo objeto do arrays e retorna o elemento removido

/*console.log(carro);
console.log(carros);*/

var x = carros.push("saveiro"); // push insere o elemento no fim do array e retorna seu novo tamanho
/*console.log(carros);

console.log(x);*/

// remove o primeiro elemento do array e retorna ele e atualiza os outros indices
carro = carros.shift();
/*console.log(carro);
console.log(carros);*/

// unshift adiciona um elemento no inicio do array e atualiza os outros indicies com o novo tamanho
x = carros.unshift("onix");
/*console.log(carros);
console.log(x);*/

// atualizar elemento existente no arrays
carros[2] = "novo uno";
//console.log(carros);

// remove o elemento do lugar e deixa ele vazio (undefined) no lugar
//delete carros[2];
//console.log(carros);


/*
    primeiro parametro: posição inicial
    segundo parametro: quantos elementos serão removidos a partir da posição inicial
    terceiro e demais parametro: elementos que serão inseridos a partir da posição inicial
*/
carros.splice(2, 0, "HRV", "Renegade");
console.log(carros);

carros.splice(2, 1);
console.log(carros);


//concat concatena um array em outro e retorna um novo array criado
var carrosAntigos = ["Brasilia", "Monza", "Fusca"];
var carrosAntigos2 = ["Corsel", "Chevette"];
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2);
console.log(todosCarros);


/*
    Slice: cria um novo array sem alterar o original
    primeiro parametro: posição inicial
    segundo parametro (opicional): posição sim
*/

var novoArray = todosCarros.slice(1);
//console.log(novoArray);

var novoArray2 = todosCarros.slice(2, 5);
console.log(novoArray2);
