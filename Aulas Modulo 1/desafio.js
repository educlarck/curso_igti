var fs = require("fs");
var funcionarios = null;

fs.readFile("funcionarios.json", "utf-8", function (err, data){
    if (err) {
        console.log(err);
    } else {
        //console.log(JSON.parse(data)); //todas as informações do array
        funcionarios = JSON.parse(data).funcionarios;
        //console.log(funcionarios.length); // todos os objetos do array: 45 funcionarios
        //console.log(maxSal()); // nome: 'Ana Castro Dias', salario: 9500, setor: 'Comercial'
        //console.log(minSal()); // nome: 'Igor Cunha Lima', salario: 1200, setor: 'Comercial'
        //console.log(maxSalBySctor("adminIstrAtivo"));
        //console.log(minSalBySctor());
        console.log(mediaSal());
        console.log(mediaSalSetor("administrativo"));
    }
})



function maxSal() {
    let funcMaiorSal = funcionarios[0];
    for (let i = 1; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > funcMaiorSal.salario) {
            funcMaiorSal = funcionarios[i];
        }
    }
    return funcMaiorSal;
}

function minSal() {
    var funcMenorSal = funcionarios[0];
    for (var i = 1; i < funcionarios.length; i++) {
        if (funcionarios[i].salario < funcMenorSal.salario) {
            funcMenorSal = funcionarios[i];
        }
    }
    return funcMenorSal;
}

function maxSalBySctor(setor) {
    var funcMaiorSalSetor = funcionarios[0];
    for (var i = 1; i < funcionarios.length; i++) {
        if (funcionarios[i].setor.toLowerCase() === setor.toLowerCase() && funcionarios[i].salario > funcMaiorSalSetor.salario) {
            funcMaiorSalSetor = funcionarios[i];
        }
    }
    return funcMaiorSalSetor;
}

function minSalBySctor(Setor) {
    var funcMenorSalSetor = funcionarios[0];
    for (var i = 1; i < funcionarios.length; i++) {
        if (funcionarios[i].setor === "Comercial" && funcionarios[i].salario < funcMenorSalSetor.salario) {
            funcMenorSalSetor = funcionarios[i];
        }
    }
    return funcMenorSalSetor;
}

function mediaSal() {
    let salariosTotal = 0;
    let contador = 0;
    for (var i = 0; i < funcionarios.length; i++) {

            salariosTotal += funcionarios[i].salario;
            contador++;

    }
console.log(contador);
    return Math.round (salariosTotal / contador);

}


function mediaSalSetor(setor) {
    let salariosSetor = 0;
    let contador = 0;
    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].setor.toLowerCase() === setor.toLowerCase()) {
            salariosSetor += funcionarios[i].salario;
            contador++;
        }
    }
console.log(contador);
    return salariosSetor / contador;
}
