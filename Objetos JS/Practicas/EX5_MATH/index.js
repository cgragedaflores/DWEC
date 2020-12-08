const li = document.createElement("li");
function potencia() {
    let base = prompt("Introduce Base");
    let exponente = prompt("Introduce Exponente");
    document.getElementById("resultado").appendChild(li).innerText = "La potencia de " + base + " elevado a " + exponente + " es : " + Math.pow(base, exponente);

}
function raiz() {
    let numRaiz = prompt("Introduce tu Numero");
    if (numRaiz < 0) {
        alert("Valor no valido");
        numRaiz = prompt("Introduce tu Numero");
    } else {
        document.getElementById("resultado").appendChild(li).innerText = "La raiz de \t" + numRaiz + "\t es : \t" + Math.sqrt(numRaiz);
    }

}
function redondeo() {
    let numRedondeo = prompt("Introduce un Decimal");
    document.getElementById("resultado").appendChild(li).innerText = "El resultado del redondeo de " + numRedondeo + " es : " + Math.round(numRedondeo);
} function trigonometria() {
    let grados = prompt("Introduce tu numero 0 < 360");
    if (grados < 1 || grados > 360) {
        alert("Numero no valido  ");
        grados = prompt("Introduce tu numero 0 < 360");
    } else {
        document.getElementById("resultado").appendChild(li).innerText = "Seno : " +Math.sin(grados).toFixed(4)+
            "\nCoseno : " +Math.cos(grados).toFixed(4)+
            "\nTangente : "+Math.tan(grados).toFixed(4);
    }
}