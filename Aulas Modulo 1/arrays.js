var carros = ["gol", "palio", "uno"];
console.log(carros);


var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2];

console.log("primeira posicao: " + primeiroCarro);
console.log("segunda posicao: " + segundoCarro);
console.log("terceira posicao: " + terceiroCarro);

carros[2] = "argo";

console.log(carros[2]);
console.log(terceiroCarro);

console.log("tamanho do array: " + carros.length);
console.log("ultimo array: " + carros[carros.length - 1]);

carros[3] = "sandero";
console.log("ultimo array: " + carros[carros.length - 1]);

carros[carros.length] = "fit";
console.log("ultimo array: " + carros[carros.length - 1]);

carros.push("polo");
console.log(carros);

carros.push(123);
console.log(carros);
