let somaAreaTotal = 0

var botaoAdiciona = document.querySelector("#adiciona-parede");
botaoAdiciona.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-calcula");

    var parede = obtemParedeFormulario(form);
    console.log(parede);

    var paredeTr = montaTr(parede);

    var erro = validacaoParede(parede);
    console.log(erro);
    if (erro.length > 0) {
        exibeMensagensErro(erro);
        return;
    }

    var tabela = document.querySelector("#tabela-parede");

    tabela.appendChild(paredeTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function exibeMensagensErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });


}

function obtemParedeFormulario(form) {
    var parede = {

        altura: parseFloat(form.altura.value),
        largura: parseFloat(form.largura.value),
        janela: parseFloat(form.janela.value),
        porta: parseFloat(form.porta.value),
        parede: parseFloat(validaParede(form.janela.value, form.porta.value, form.altura.value, form.largura.value)),
        

    }

    somaAreaTotal += parede.parede
    sessionStorage.setItem("total", somaAreaTotal)
    return parede;

}

function montaTr(parede) {
    var paredeTr = document.createElement("tr");
    paredeTr.classList.add("parede");

    var alturaTd = montaTd(parede.altura, "info-altura");
    var larguraTd = montaTd(parede.largura, "info-largura");
    var janelaTd = montaTd(parede.janela, "info-janela");
    var portaTd = montaTd(parede.porta, "info-porta");
    var paredeTd = montaTd(parede.parede, "info-parede");

    paredeTr.appendChild(alturaTd);
    paredeTr.appendChild(larguraTd);
    paredeTr.appendChild(janelaTd);
    paredeTr.appendChild(portaTd);
    paredeTr.appendChild(paredeTd);

    return paredeTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validacaoParede(parede) {
    var erros = [];

    if (!validarAltura(parede.altura)) {
        erros.push("Altura inválida - a parede deve possuir a altura mínima de 2,10m");
    }

    if (!validarParede(parede.parede)) {
        erros.push("Dimensões inválidas - a parede deve ter no mínimo 1m² e no máximo 50m²");
    }

    //if (!calculaArea(parede.parede)) {
    //    erros.push("Área inválida!");
    //}

    return erros;
}