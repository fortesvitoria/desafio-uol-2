var litrosTinta = total/5;

document.getElementById("litros").innerHTML = parseFloat(litrosTinta.toFixed(2));

// adicionando indicações de tintas - funcao dentro de funcao
document.getElementById("latas").innerHTML = parseFloat(latasTinta);

    var lata05 = 05;
    var lata25 = 25;
    var lata36 = 36;
    var lata18  = 18;

    var latasTinta = litrosTinta;

while(litrosTinta > 0){
    if (litrosTinta >= 18) {
        lata18++
        litrosTinta = litrosTinta - 18
    } else if (litrosTinta >= 3.6){
        lata36++
        litrosTinta = litrosTinta - 3.6
    } else if (litrosTinta >= 2.5){
        lata25++
        litrosTinta = litrosTinta - 2.5
    } else if (litrosTinta >= 0.5) {
        lata05++
        litrosTinta = litrosTinta - 0.5
    } else if (litrosTinta > 0) {
        lata05++
        litrosTinta = 0
    }
}

