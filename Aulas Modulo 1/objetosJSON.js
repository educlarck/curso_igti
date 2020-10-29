var pessoa = {
    nome: "João",
    idade: 40,
    telefone: "(81) 99949-9590",
    temFilhos: true,
    Carros: [  // Arrays
        "Creta",
        "Renegade",
        "Saveiro"
    ],
    pai: { // podemos adicionar objetos dentro de objetos
        nome: "Cloves",
    idade: 74,
    telefone: "(81) 99949-9598",
    }
};
//console.log (pessoa);
//console.log(pessoa.Carros);
//console.log(pessoa.pai.nome);
//pessoa.Carros.push("Clio"); // adicionando um novo objeto a lista
//pessoa.nome += " silva" // adicionando um novo nome ao atual
//pessoa.mae = "Maria" //inserindo uma nova propriedade
pessoa.mae = {  // adicionando um novo Objeto JSON
    nome: "Maria",
    Idade: 68,
};

console.log(JSON.stringify(pessoa));




//console.log(pessoa);

/*salvarDadosPessoa(pessoa);

function salvarDadosPessoa(pessoa) {
    console.log(pessoa)
}*/
