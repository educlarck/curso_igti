var fs = require("fs"); //tem que criar uma variavel para que ele possa ser importado e utilizado
var nomeArquivo = "meuArquivo.txt"; // criar uma variavel como o nome do arquivo para facilitar o trabalho e minimizar erros de digitação

/*var x; //se o arquivo for null não tem valor e se não acrescentar o valor na variavel ele considera null
if (x) {
    console.log("x tem valor");
} else {
    console.log("x nao tem valor");
}*/



console.log("1");

// 1º parametro: nome do arquivo, 2º parametro: texto escrito no arquivo, 3º parametro: função call back com parametro de erro
fs.writeFile(nomeArquivo, "um texto qualquer", function(err) {
    if (err !== null) {
        console.log(err);
    } else {
        fs.appendFile(nomeArquivo, "\nnova linha no texto", function(err) {
            if (err) {
                console.log(err);
            } else {
                // readfile para ler um arquivo 1º: nome do arquivo, 2º: utf-8 formato padrão, 3º call back com erro ou o conteudo do arquivo correto
                fs.readFile(nomeArquivo, "utf-8", function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
        });
            
            }
        });
    }
});

console.log("2")
