let paises = [
    "Bolivia",
    "Venezuela",
    "Peru",
    "Chile",
    "Brazil",
    "Colombia",
    "Mexico"
];

let opciones = prompt(
    "1 - Numero de paises\n" +
    "2 - Listar paises\n" +
    "3 - Intervalo de paises\n" +
    "4 - Introducir pais\n" +
    "5 - Borrar pais\n" +
    "6 - Consultar pais"
);

switch (true) {
    case opciones == 1:
        numeroPaises(paises);
        break;
    case opciones == 2:
        listarPaises(paises);
        break;
    case opciones == 3:
        intervalPaises(paises);
        break;
    case opciones == 4:
        introducirPais(paises);
        break;
    case opciones == 5:
        borrarPais();
        break;
    case opciones == 6:
        consultarPais();
        break;
    default: alert("Opcion no permitida");
}

function numeroPaises(arrayPaises) {
    document.getElementById("contenido").innerText += "En el array se encuentran : " + arrayPaises.length + " paises";
}

function listarPaises(arrayPaises) {
    let opcionUsuario = prompt("indique el orden que quiere \n1 - Orden actual \n2 - Al reves\n3 - Alfabeticamente");
    switch (true) {
        case opcionUsuario == 1:
            document.write("Los paises guardados son: ");
            document.write(...arrayPaises + "</br></br>");
            break;
        case opcionUsuario == 2:
            let paisesReves = arrayPaises.reverse();
            document.write("Los paises guardados son: ");
            document.write(...paisesReves + "</br></br>");
            break;
        case opcionUsuario == 3:
            arrayPaises.sort();
            document.write("Los paises guardados son: ");
            document.write(...arrayPaises + "</br></br>");
            break;
        default: alert("Opcion no permitida");
    }

}

function intervalPaises(arrayPaises) {
    let interval = prompt("Indica un interval (formato 1-3)");
    let aux = interval.split('-');
    let principio = aux[0];
    let final = aux[1];

    for (let i = principio; i < final; i++) {
        document.write(" " + arrayPaises[i]);
    }
}

function introducirPais(arrayPaises) {
    let paisIntroducir = prompt("Indique que pais quiere introducir");
    let opcionUsuario = prompt("Indique donde quiere introducirlo \n1 - Principio \n2- Fin");
    switch (true) {
        case opcionUsuario == 1:
            paises.unshift(paisIntroducir);
            document.write(...paises + "</br></br>");
            break;
        case opcionUsuario == 2:
            paises.push(paisIntroducir);
            document.write(...paises + "</br></br>");
            break;
        default: alert("Opcion no permitida");
    }
}

function borrarPais() {
    let opcionUsuario = prompt("Indique que quieres borrar \n1 - Principio \n2 - Fin");
    switch (true) {
        case opcionUsuario == 1:
            document.write("Antes de borrar: ");
            document.write(...paises + "</br></br>");

            document.write("Se ha borrado " + paises[0] + "</br></br>");
            paises.shift();

            document.write("Despues de borrar: ");
            document.write(...paises + "</br></br>");
            break;
        case opcionUsuario == 2:
            document.write("Antes de borrar: ");
            document.write(...paises + "</br></br>");

            document.write("Se ha borrado " + paises[paises.length - 1] + "</br></br>");
            paises.pop();

            document.write("Despues de borrar: ");
            document.write(...paises + "</br></br>");
            break;
        default: alert("Opcion no permitida");
    }
}

function consultarPais() {
    let opcionUsuario = prompt("Como quiere buscar? \n1 - Por pais \n2 - Por posicion");
    switch (true) {
        case opcionUsuario == 1:
            let introducidoUsuario = prompt("Que pais quiere buscar?");
            let aux = 0;
            for (let i = 0; i < paises.length; i++) {
                if (introducidoUsuario.toLocaleLowerCase() == paises[i].toLowerCase()) {
                    aux = i;
                    break;
                }
            }
            document.write("El pais " + introducidoUsuario + " se encuentra en la posicion " + aux + "</br></br>");
            break;
        case opcionUsuario == 2:
            let eleccionUsuario = prompt("Elije una posicion");
            document.write("En esa posicion se encuntra: " + paises[eleccionUsuario]);
            break;
        default: alert("Opcion no permitida");
    }
}