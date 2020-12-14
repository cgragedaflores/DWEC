// Crea un programa que pida al usuario el valor del radio de un circulo y muestre por pantalla:
// 1. El valor del radio.
// 2. El valor del diámetro.
// 3. El valor del perímetro de la circunferencia.
// 4. El valor del área del círculo.

// 5. El valor del área de la esfera.
// 6. El valor del volumen de la esfera.
// 7. Hacer lo mismo pidiendo al usuario elegir entre 5 figuras aparte del circulo a vuestra elección.
// • El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
// • Debes escribir al lado si son cm, o cm2, o cm3.
// • Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 / 78,54 /
// 314,15 / 523,59.


//SCRIPT START
function start() {
    let radio = prompt("Introduce el valor que represente El radio");
    if (radio < 0) {
        alert("Numero no valido");
        radio = prompt("Introduce el valor que represente El radio");
    } else {
        document.getElementById("radio").innerHTML = radio + "  cm";
        document.getElementById("diametro").innerHTML = radio * 2 + "  cm";
        document.getElementById("perimetro").innerHTML = (2 * Math.PI * radio).toFixed(2) + "  cm";
        document.getElementById("area").innerHTML = (Math.PI * Math.pow(radio, 2)).toFixed(2) + "  cm";
        document.getElementById("areaEsfera").innerHTML = (4 * Math.PI * Math.pow(radio, 2)).toFixed(2) + " cm<sup>2</sup>";
        document.getElementById("volumen").innerHTML = (4 / 3 * Math.PI * Math.pow(radio, 3)).toFixed(2) + " cm<sup>3</sup> ";
    }
}
//SCRIPT END
//SCRIPT CUADRADO START
function calRectangulo() {
    let base = prompt("Introduce una base");

    if (base > 1) {
        let altura = prompt("Introduce Altura");
        if (altura > 1) {
            document.getElementById("baseR").innerHTML=base+" cm";
            document.getElementById("alturaR").innerHTML=altura+" cm";
            document.getElementById("perimetroR").innerHTML=2*(base+altura)+" cm";
            document.getElementById("diagonalR").innerHTML=(base*altura)+" cm";
            document.getElementById("areaR").innerHTML=(Math.sqrt(base)+Math.sqrt(altura)).toFixed(2)+" cm";
        } else {
            alert("Numero no valido");
            altura = prompt("Introduce Altura");
        }
    } else {
        alert("Numero no valido");
        base = prompt("Introduce una base");
    }


}
//SCRIPT CUADRADO END