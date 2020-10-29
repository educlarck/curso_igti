console.log("Pelo sport tudo no arquivo externo e no body");
//document.write("O maior do nordeste"); //para adicionar um texto mais com atenção para o local onde ele vai aparecer na pagina

// DOM - Document object Model
function clickBotao() {
    //document.getElementById("paragrafo2").innerHTML = "Pode falar o que quiser mais o Sport é o maior time do NE";
    //document.getElementById("paragrafo2").style.display = "none";

    document.getElementsByClassName("paragrafo")
    for (var i = 0; i < document.getElementsByClassName("paragrafo").length; i++) {
        document.getElementsByClassName("paragrafo")[i].style.color = "yellow";
        document.getElementsByClassName("paragrafo")[i].style.fontWeight = "bold";
    }
}

function clickBotao2() {
    document.getElementById("paragrafo2").style.display = "block";

    for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
        document.getElementsByTagName("button")[i].style.fontSize = "30px";
    }
}

function ligarLampada() {
    document.getElementById("lampada").src = "lampada_ligada.gif";
}

function desligarLampada() {
    document.getElementById("lampada").src = "lampada_desligada.gif";
}

var quantidadeElementos = 0;

function adicionarElemento() {
    var elemento = document.createElement("P");
    elemento.innerHTML = "elemento " + quantidadeElementos;

    quantidadeElementos++;

    document.getElementById("div-elementos").appendChild(elemento);

}

function removerElementos() {
    var filhos = document.getElementById("div-elementos").childNodes;
    var size = filhos.lenght;
    for (var i = 0; i < size; i++) {
        document.getElementById("div-elementos").removeChild(filhos[1]);
    }
}