var paredes = document.querySelectorAll(".parede");

for (var i = 0; i < paredes.length; i++) {

    var parede = paredes[i];

    var tdAltura = parede.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdLargura = parede.querySelector(".info-largura");
    var largura = tdLargura.textContent;

    var tdJanela = parede.querySelector(".info-janela");
    var janela = tdJanela.textContent;

    var tdPorta = parede.querySelector(".info-porta");
    var porta = tdPorta.textContent;

    var tdParede = parede.querySelector(".info-parede");

    var porta = (1.52 * porta);
    var janela = (2.4 * janela);

    var areaJanelaPorta = ((janela * 2.4) + (porta * 1, 52));
    var areaParede = (altura * largura);

    var alturaValidacao = validarAltura(altura);
    var paredeValidacao = validarParede(parede);

    if (!alturaValidacao) {
        alturaValidacao = false;
        tdParede.textContent = "Altura inválida!";
        parede.classList.add(input - invalido)
    }

    //if (!areaJanelaPorta) {
    //    paredeValidacao = false;
    //    tdParede.textContent = "Dimensões inválidas!"
    //    parede.classList.add(input - invalido)
    //}


    if (!paredeValidacao) {
        paredeValidacao = false;
        tdParede.textContent = "Dimensões inválidas!"
        parede.classList.add(input - invalido)
    }

    if (paredeValidacao && alturaValidacao) {

        var parede = adicionaParede(janela, porta, altura, largura)
        tdParede.textContent = parede;

    } else {
        tdParede.textContent = "Dimensões inválidas"
    }

}

function validarAltura(altura) {
    if (altura > 2.09) {
        return true;
    } else {
        return false;
    }

}

function validarParede(parede) {
    if (parede > 1.00 && parede < 50.00) {
        return true;
    } else {
        return false;
    }
}

//function calculaArea(areaParede, areaJanelaPorta) {
//  if (areaParede * 0.5 > areaJanelaPorta) {
//    return true;
//} else {
//     return false;
//}
//}

function validaParede(janela, porta, altura, largura) {
    var parede = 0;

    parede = (altura * largura) - porta - janela;

    return parede.toFixed(2);

}

function calculaSomaTotal() {
    console.log('total calculaSomaTotal:', sessionStorage.getItem("total"))
}

let botao = document.querySelector("#calcula-parede");