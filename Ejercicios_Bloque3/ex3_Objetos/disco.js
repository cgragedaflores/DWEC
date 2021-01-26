let arrayDiscos = [
    new Disco("Momonga", "Overlord", 2017, "Anime", 1),
    new Disco("A","B","C","D","E"),
    new Disco("G","H","I","J","K"),
    new Disco("L","M","N","O","P"),
    new Disco("Q","R","S","T","U"),
    new Disco("V","W","X","Y","Z")
];
function Disco() {
    this.discName = "";
    this.group = "";
    this.publicationDate = "";
    this.genere = "";
    this.location = 0;
    this.rented = false;
}
function Disco(discName, group, publicationDate, genere, location) {
    this.discName = discName;
    this.group = group;
    this.publicationDate = publicationDate;
    this.genere = genere;
    this.location = location;
    this.rented = false;
}

Disco.prototype.setLocation = function (location) {
    this.location = location;
}
Disco.prototype.setRented = function () {
    this.rented = !this.rented;
}
Disco.prototype.imprimirDisco = function () {
    return "Nombre del Disco : " + this.discName +
        "\nGrupo o Catante : " + this.group +
        "\nFecha Publicacion : " + this.publicationDate +
        "\nGenero : " + this.genere +
        "\nlocation : " + this.location +
        "\nRented : " + this.rented;
}

//Ejercicio 2 objetos
let entrada = prompt("Seleccione una opcion\n" +
    "1-. Mostrar número de discos\n" +
    "2-. Mostrar listado de discos\n" +
    "3-. Mostrar Intervalo de discos\n" +
    "4-. Añadir un disco\n" +
    "5-. Borrar un disco\n" +
    "6-. Consultar un disco\n" +
    "7-. Salir");
switch (true) {
    case entrada == 1:
        mostrarNumDiscos(arrayDiscos);
        break;
    case entrada == 2:
        mostrarDiscos(arrayDiscos);
        break;
    case entrada == 3:
        mostrarIntervalo(arrayDiscos);
        break;
    case entrada == 4:
        addDisco(arrayDiscos);
        break;
    case entrada == 5:
        delDisco(arrayDiscos);
        break;
    case entrada == 6:
        consultarDisco(arrayDiscos);
    default:
        terminado = false;
        break;
}

function mostrarNumDiscos(arrayDisco) {
    document.write("<h3>Total Discos : " + arrayDisco.length + "</h3>")
}
function mostrarDiscos(arrayDisco) {
    if (arrayDisco.length == 0) {
        document.write("<h3> No Elements </h3>")
    }
    arrayDisco.forEach(element => {
        document.write(element.imprimirDisco());
    });
}
function mostrarIntervalo(arrayDisco) {
    let num1 = prompt("Primer Numero");
    let num2 = prompt("Segundo Numero");
    for (let index = num1; index < num2; index++) {
        console.log("MostrandoDisco");
        document.write(arrayDisco[index].imprimirDisco() + "<br/>");
    }
}
function addDisco(arrayDisco) {
    let entrada = prompt("Quiere Agregar principio o al final [1(principio)-2(final)]");
    let discName = prompt("Nombre del Disco");
    let group = prompt("Nombre del Grupo");
    let publicationDate = prompt("Fecha Publicacion");
    let genere = prompt("Genero");
    let location = prompt("Localizacion");
    let nuevoDisco = new Disco(discName, group, publicationDate, genere, location);
    if (entrada == 1) {

        arrayDisco.unshift(nuevoDisco);
    }
    if (entrada == 2) {

        arrayDisco.push(nuevoDisco);
    }
    //document.write("<h3> Added correctly </h3>");
}
function delDisco(arrayDisco) {
    let entrada = prompt("Quiere eliminar principio o al final [1(principio)-2(final)]");
    if (entrada == 1) {
        arrayDisco.splice(0, 1);
    }
    if (entrada == 2) {
        arrayDisco.splice(arrayDisco.length, 1);
    }
}
function consultarDisco(arrayDisco) {
    let nombreDisco = prompt("Ingrese el Nombre del Disco");
    let encontrado = false;
    arrayDisco.forEach(element => {
        if (element.discName == nombreDisco) {
            encontrado = true;
            document.write(element.imprimirDisco() + "<br/>");
        }
    });
    if (!encontrado) {
        document.write("<h3>No se ha encontrado el disco<h3/>");
    }
}
