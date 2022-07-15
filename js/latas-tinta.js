const total = parseFloat(sessionStorage.getItem("total"));
document.getElementById("total").innerHTML = total;

var litrosTinta = total/5;

document.getElementById("litros").innerHTML = litrosTinta;

// adicionando indicações de tintas - funcao dentro de funcao

var lata05 = 0;
    var lata25 = 0;
    var lata36 = 0;
    var lata18 = 0;

    var tintaFaltante = litrosTinta;

while(tintaFaltante > 0){
    if (tintaFaltante >= 18) {
        lata18++
        tintaFaltante = tintaFaltante - 18
    } else if (tintaFaltante >= 3.6){
        lata36++
        tintaFaltante = tintaFaltante - 3.6
    } else if (tintaFaltante >= 2.5){
        lata25++
        tintaFaltante = tintaFaltante - 2.5
    } else if (tintaFaltante >= 0.5) {
        lata05++
        tintaFaltante = tintaFaltante - 0.5
    } else if (tintaFaltante > 0) {
        lata05++
        tintaFaltante = 0
    }
}

tintaFaltante = document.getElementById("latas18").innerHTML = "Latas de 18L: " + lata18;
tintaFaltante = document.getElementById("latas36").innerHTML = "Latas de 3.6L: " + lata36;
tintaFaltante = document.getElementById("latas25").innerHTML = "Latas de 2.5L: " + lata25;
tintaFaltante = document.getElementById("latas05").innerHTML = "Latas de 0.5L: " + lata05;
