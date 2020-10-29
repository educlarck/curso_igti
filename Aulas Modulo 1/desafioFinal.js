function maxSal() {
    var funcMaxSal = funcionarios[0];
    for (var i = 1; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > funcMaxSal.salario) {
            funcMaxSal = funcionarios[i];
        
        }
    }
    return funcMaxSal;
}


const fs = require('fs');

var arquivo = fs.readFileSync("funcionarios.json");

var empresa = JSON.parse(arquivo);

console.log(empresa.funcionarios[1].nome);


console.log(maxSal());
