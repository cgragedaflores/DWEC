const li = document.createElement("li");
function potencia() {
    //DESABILITAR BOTON
    document.getElementById("potencia").disabled = true;
    //CREACION DE ELEMENTOS 
    let inputB = document.createElement("input");
    let labelB = document.createElement("label");
    let inputE = document.createElement("input");
    let labelE = document.createElement("label");
    let calcButton = document.createElement("button");


    //ASIGNACION DE ATRIBUTOS
    inputE.setAttribute("type", "text");
    inputB.setAttribute("type", "text");
    inputE.setAttribute("id", "exponente");
    inputB.setAttribute("id", "base");
    calcButton.setAttribute("onclick","calcPotencia()");
    calcButton.setAttribute("type","button");
    //AGREGAR ELEMENTOS AL HTML
    document.getElementById("datos").appendChild(labelB).innerText = "Base : \n";
    document.getElementById("datos").appendChild(inputB);
    document.getElementById("datos").appendChild(labelE).innerText = "\nExponente : \n";
    document.getElementById("datos").appendChild(inputE).innerText="\n";
    document.getElementById("datos").appendChild(calcButton).innerText = "Calcular Potencia";
    //OBTENCION DE DATOS  & CONTROL DE DATOS
    let base = document.getElementById("base").value;
    let exponente = document.getElementById("exponente").value;
    if ((base < 1 || exponente < 1) || (base > Math.pow(10, 9) || exponente > Math.pow(10, 9))) {
        alert("Por favor reviste los datos");
    }

}
function raiz() {
    document.getElementById("resultado").appendChild(li).innerText = "La raiz de \t" + "\t es : \t";
}
function redondeo() {
    document.getElementById("resultado").appendChild(li).innerText = "El resultado del redondeo " + " alta " + "es : " +
        "\nEl resultado del redondeo " + " baja " + "es : ";
} function trigonometria() {
    document.getElementById("resultado").appendChild(li).innerText = "Seno : " +
        "\nCoseno : " +
        "\nTangente : ";
}
function calcPotencia(base,exponente) {
    document.getElementById("resultado").appendChild(li).innerText = "La potencia de " + base + "elevado a " + exponente + "es : " + Math.pow(base, exponente);
}