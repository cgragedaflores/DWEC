let paises = [
    "Bolivia",
    "Venezuela",
    "Peru",
    "Chile",
    "Brazil",
    "Colombia",
    "Mexico"];
function muestraNumeroPaises() {
    //Ejercicio 1
    document.getElementById("ex1").innerText += " = \t" + paises.length + " elementos";
}
function muestraPaises() {
    //Ejercicio 2
    document.getElementById("ex2").innerHTML += "<br/>" + paises.join(",");
}
function muestraPaisesReverse() {
    //Ejercicio 3
    document.getElementById("ex3").innerHTML += "<br/>" + paises.sort().reverse().join(",");
}
function muestraPaisesOrdenados() {
    document.getElementById("ex4").innerHTML += "<br/>" + paises.sort().join(",");
}
function addFirstElement() {
    document.getElementById("ex5").innerHTML += "<br/>" + paises.unshift("Italia", "Portugal").join(",");
}
function addLastElement() {
    document.getElementById("ex6").innerHTML += "<br/>" + paises.push("Bolivia", "Colombia").join(",");
}
function delFirstElement() {
    //Selecciona un posicion aleatorio antes de la mitad del array
    randomPos = Math.floor(Math.random() * (paises.length / 2));
    document.getElementById("ex7").innerHTML += "<ul><li>Elemento eliminado " + paises[randomPos] + "<br/>" + paises.splice(randomPos, "Elemento eliminado").join(",");
}
function delLastElement() {
    //Selecciona un posicion aleatorio despues de la mitad del array
    randomPos = Math.floor(Math.random() * (paises.length)) + (paises.length / 2);
    document.getElementById("ex8").innerHTML += "<ul><li>Elemento eliminado " + paises[randomPos] + "<br/>" + paises.splice(randomPos, "Elemento eliminado").join(",");
}
function showElemento() {
    //ex9
    let pos = prompt("Indica un numero >  0  y Menor que " + paises.length);
    // si pones esto te coge la posicion de la cadena que se enecuentra en la posicion
    //alert(...paises[pos]);
    alert(paises[pos]);
}
function showUserSelectedElement() {
    //ex10
    //Muestra la posicion en la que se encuentra un elemento que  indica el usuario
    let usuario = prompt("Introduce un pais ");
    for (let index = 0; index < paises.length; index++) {
        if (paises[index] == usuario) {
            alert("El elemento " + paises[index] + " se encentra  en el elemento " + index);
        } else {
            alert("El pais no existe");
        }
    }
}
function showRangeElement() {
    let num1 = prompt("Numero >  0 &  < " + paises.length);
    let num2 = prompt("Numero > " + num1 + " & < " + paises.length);
    for (let index = num1; index < num2; index++) {
        document.getElementById("ex1").innerHTML += "<br/>" + paises[index] + "<br/>";
    }

}