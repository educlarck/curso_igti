function multiplicacao(p1, p2) {
    console.log("function multiplicacao executada");
    return p1 * p2;
}

var resultado = multiplicacao(4, 2);
console.log(resultado);
console.log(multiplicacao(10, 3));

function saudacao(nome) {
    console.log("Olá " + nome + " seja bem vindo");
}

saudacao("Eduardo");

function semparametro() {
    var a = 2;
    var b = 5;
    console.log(a + b);

}

semparametro();

// As funções podem ser chamadas mesmo numa linha antes de sua criação porém as variaveis dentro das funções só "existem" dentro das mesmas.