var fs = require("fs");
var nomeArquivo = "carros.json";
var carros = ["gol", "palio", "uno", "celta"];
var concessionaria = {
    nome: "Top Veiculos",
    carros

}
fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function(err) { // tem que usar a estenção JSON.stringfy para converter o object em texto no arquivo JSON
    if (err) {
        console.log(err);
    } else {
        fs.readFile(nomeArquivo, "utf-8", function(err, data) {
            if (err) {
                console.log(err);
            } else { // quando quiser adicionar uma nova informação tem que converter o aqruivo novamente usando o JSON.parse
                var obj = JSON.parse(data);
                obj.carros.push("HRV");
                fs.writeFile(nomeArquivo, JSON.stringify(obj), function (err){
                    if (err) {
                        console.log(err);
                    }
                });

            }
            
        })
    }
});