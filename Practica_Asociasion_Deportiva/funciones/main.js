window.onload = function () {
    setTimeout(function () {
        let nuevaVentana = window.open('welcome.html', 'Comunicacion Entre Ventanas', 'toolbar=no,scrollbars=no,location=0,statusbar=0,menubar=no,resizable=no,width=200,height=50,left = 390,top = 50');
    }, 10000);

    actualizarFecha();
}
function cerrarVentana() {
    //CIERRA LA VENTANA SOLO SI SE HA ABIERTO CON WINDOW.OPEN()
    window.close();
}
function comprobarConstraseña() {
    //obtener Datos
    let passwd = document.getElementById("passwd").value;
    //crea elemento check
    let spanCheck = document.createElement("span");
    let spanClose = document.createElement("span");
    //asigna atributos
    spanCheck.setAttribute("uk-icon", "icon:check; ratio:2;");
    spanCheck.className = "uk-form-icon uk-position-right  uk-form-icon-flip";
    spanClose.setAttribute("uk-icon", "icon:close; ratio:2;");
    spanClose.className = "uk-form-icon uk-position-right  uk-form-icon-flip";
    //DECLARACION DE EXPRECIONES REGULARES
    const regExpNum = /[0-9]/;
    const regExpUpper = /[A-Z]/;
    const regExpLower = /[a-z]/;
    const arraySpecialCharacter = [
        "-",
        "_",
        "@",
        "#",
        "$",
        "%"
    ]
    //COMprovacion unitaria
    if (passwd.length > 8 && passwd.length < 16) {
        document.getElementById("seguridad1").getElementsByTagName("span")[1].style.visibility = 'visible';
    } else {
        document.getElementById("seguridad1").getElementsByTagName("span")[0].style.visibility = 'visible';
    }
    if (regExpUpper.test(passwd)) {
        document.getElementById("seguridad2").getElementsByTagName("span")[1].style.visibility = 'visible';
    } else {
        document.getElementById("seguridad2").getElementsByTagName("span")[0].style.visibility = 'visible';
    }
    if (regExpLower.test(passwd)) {
        document.getElementById("seguridad3").getElementsByTagName("span")[1].style.visibility = 'visible';
    } else {
        document.getElementById("seguridad3").getElementsByTagName("span")[0].style.visibility = 'visible';
    }
    if (regExpNum.test(passwd)) {
        document.getElementById("seguridad4").getElementsByTagName("span")[1].style.visibility = 'visible';
    } else {
        document.getElementById("seguridad4").getElementsByTagName("span")[0].style.visibility = 'visible';
    }
    for (let index = 0; index < arraySpecialCharacter.length; index++) {
        if(passwd.includes(arraySpecialCharacter[index])){
            document.getElementById("seguridad5").getElementsByTagName("span")[1].style.visibility = 'visible';
            break;
        }else{
            document.getElementById("seguridad5").getElementsByTagName("span")[0].style.visibility = 'visible';
            break;
        }
    }
    //Limpiar forumulario
    document.getElementById("myformPasswd").reset();
    if (passwd == "") {
        document.getElementById("resultadopasswd").innerText = "Compruebe los datos";
    }
}
function imc() {
    //RECOGE DATOS
    let alturaPersona = document.getElementById("altura").value;
    let pesoPersona = document.getElementById("peso").value;
    let resultado;
    //COMPRUEVA QUE LOS CAMPOS NO ESTEN VACIO
    if (pesoPersona != "" && alturaPersona != "") {
        alturaPersona = parseInt(alturaPersona) / 100;
        resultado = pesoPersona / (alturaPersona * alturaPersona);
    }
    //LIMPIA DATOS
    document.getElementById("myform").reset();
    //CONDICIONALES PARA CATEGORIZAR A LA PERSONA
    let grado;
    if (resultado < 16) {
        grado = "Delgadez severa.";
    } else if (resultado >= 16 && resultado <= 16.99) {
        grado = "Delgadez moderada.";
    } else if (resultado >= 17 && resultado <= 18.49) {
        grado = "Delgadez aceptable.";
    } else if (resultado >= 18.5 && resultado <= 24.99) {
        grado = "Normal.";
    } else if (resultado >= 25 && resultado <= 29.99) {
        grado = "SobrePeso.";
    } else if (resultado >= 30 && resultado <= 34.99) {
        grado = "Obeso tipo I.";
    } else if (resultado >= 35 && resultado <= 39.99) {
        grado = "Obeso tipo II.";
    } else if (resultado > 40) {
        grado = "Obeso tipo III.";
    }
    //ESCRIBE RESULTADO EN PANTALLA
    document.getElementById("resultadoImc").innerHTML = " " + resultado.toPrecision(4) + " " + grado;
}
function frecuencia() {
    //Obtenemos los datos.
    let edadPersona = document.getElementById("edad").value;
    let opcion = document.getElementById("form-stacked-select").value;
    let resultado;
    //COMPROVAMOS QUE LOS DATOS NO ESTEN VACIOS
    if (edadPersona != "" && opcion != "" && (opcion == "H" || opcion == "M")) {
        //La media de los Mujeres es 220 entonces le restamos esa cantidad
        if (opcion == "M") {
            resultado = 220 - edadPersona;
        }
        //En cambio la media de los hombres es 200
        if (opcion == "H") {
            resultado = 200 - edadPersona;
        }
        //Mostramos el resultado por pantalla
        document.getElementById("resultadoFc").innerText = resultado + " BPM";
        //Limpiamos el formulario
        document.getElementById("myformFC").reset();
    }
}
function categoria() {
    let categorias = [
        "Pre Benjamin",
        "Benjamin",
        "Alebin",
        "Infantil",
        "Cadete",
        "Jubenil",
        "Senior",
    ];
    let birthdate = document.getElementById("nacimiento").value;
    let inputYear = new Date(birthdate).getFullYear();
    let yearActual = new Date().getFullYear();
    let resultado = yearActual - inputYear;
    if (resultado <= 8) {
        document.getElementById("mostrarResultado").innerText += categorias[0];
    } else if (resultado <= 10) {
        document.getElementById("mostrarResultado").innerText += categorias[1];
    } else if (resultado <= 12) {
        document.getElementById("mostrarResultado").innerText += categorias[2];
    } else if (resultado <= 14) {
        document.getElementById("mostrarResultado").innerText += categorias[3];
    } else if (resultado <= 16) {
        document.getElementById("mostrarResultado").innerText += categorias[4];
    } else if (resultado <= 19) {
        document.getElementById("mostrarResultado").innerText += categorias[5];
    } else if (resultado > 19) {
        document.getElementById("mostrarResultado").innerText += categorias[6];
    }
    //LIMPIAMOS FORMULARIO
    document.getElementById("myform").reset();
}
function horarioMañana() {
    //LIMPIAR CONTENIDO
    document.getElementById("Horario").innerHTML = "";
    let arrayMati = ["09:00", "11:00", "13:00", "15:00"];
    let arrayTarde = ["16:00", "17:00", "18:00", "19:00", "20:00"];
    let arrayEncabezado = ["Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    //CREANDO ELEMENTOS
    let tablaMañana = document.createElement("table");
    let caption = document.createElement("caption");
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");
    let tbody = document.createElement("tbody");

    //Agregando clases  & ID a elementos framework (UIKIT)
    tablaMañana.className = "uk-table uk-table-justify uk-table-divider";
    tablaMañana.setAttribute("id", "mañana");
    caption.className = "uk-text-center";
    thead.setAttribute("id", "dias");
    theadRow.setAttribute("id", "valorDia");
    tbody.setAttribute("id", "contenido");

    //Agregando elementos hijos al padre
    //AGREGA LA TABLA
    document.getElementById("Horario").appendChild(tablaMañana);
    //AGREGA CAPTION -> TITULO DE TABLA
    document.getElementById("mañana").appendChild(caption).innerHTML = "Horario Turno Mañama";
    //AGREGA THEAD
    document.getElementById("mañana").appendChild(thead);
    //FILA PARA THEAD
    document.getElementById("dias").appendChild(theadRow);
    //AGREGA BODY
    document.getElementById("mañana").appendChild(tbody);
    //AGREGA FILA AL BODY
    // document.getElementById("contenido").appendChild
    // BUCLE PARA CREAR ENCABEZADO TABLA
    for (let index = 0; index < arrayEncabezado.length - 2; index++) {
        let th = document.createElement("th");
        th.className = "uk-text-center uk-margin";
        document.getElementById("valorDia").appendChild(th).innerText = arrayEncabezado[index];
    }
    //BUCLE PARA AGREGAR HORA
    for (let index = 0; index < arrayMati.length - 1; index++) {
        //CREA FILA Y AGREGA AL TBODY
        let tbodyRow = document.createElement("tr");
        tbodyRow.className = "uk-text-center uk-margin"
        tbodyRow.setAttribute("id", "row" + index);
        document.getElementById("contenido").appendChild(tbodyRow);
        for (let j = 0; j < arrayEncabezado.length - 2; j++) {
            // CREA COLUMNA Y AGREGA A LA FILA
            let td = document.createElement("td");
            td.className = "colum" + j;
            document.getElementById("row" + index).appendChild(td);
        }
        document.getElementById("row" + index).firstChild.innerHTML = arrayMati[index] + " a " + arrayMati[index + 1];
    }
}
function horarioTarde() {
    //LIMPIAR CONTENIDO
    reset();
    let arrayTarde = ["16:00", "17:00", "18:00", "19:00", "20:00"];
    let arrayEncabezado = ["Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    //CREANDO ELEMENTOS
    let tablaTarde = document.createElement("table");
    let caption = document.createElement("caption");
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");
    let tbody = document.createElement("tbody");

    //Agregando clases  & ID a elementos framework (UIKIT)
    tablaTarde.className = "uk-table uk-table-justify uk-table-divider";
    tablaTarde.setAttribute("id", "tarde");
    caption.className = "uk-text-center";
    thead.setAttribute("id", "dias");
    theadRow.setAttribute("id", "valorDia");
    tbody.setAttribute("id", "contenido");

    //Agregando elementos hijos al padre
    //AGREGA LA TABLA
    document.getElementById("Horario").appendChild(tablaTarde);
    //AGREGA CAPTION -> TITULO DE TABLA
    document.getElementById("tarde").appendChild(caption).innerHTML = "Horario Turno Tarde";
    //AGREGA THEAD
    document.getElementById("tarde").appendChild(thead);
    //FILA PARA THEAD
    document.getElementById("dias").appendChild(theadRow);
    //AGREGA BODY
    document.getElementById("tarde").appendChild(tbody);
    //AGREGA FILA AL BODY
    // document.getElementById("contenido").appendChild
    // BUCLE PARA CREAR ENCABEZADO TABLA
    for (let index = 0; index < arrayEncabezado.length; index++) {
        let th = document.createElement("th");
        th.className = "uk-text-center uk-margin";
        document.getElementById("valorDia").appendChild(th).innerText = arrayEncabezado[index];
    }
    //BUCLE PARA AGREGAR HORA
    for (let index = 0; index < arrayTarde.length - 1; index++) {
        //CREA FILA Y AGREGA AL TBODY
        let tbodyRow = document.createElement("tr");
        tbodyRow.className = "uk-text-center uk-margin"
        tbodyRow.setAttribute("id", "row" + index);
        document.getElementById("contenido").appendChild(tbodyRow);
        for (let j = 0; j < arrayEncabezado.length; j++) {
            // CREA COLUMNA Y AGREGA A LA FILA
            let td = document.createElement("td");
            td.className = "colum" + j;
            document.getElementById("row" + index).appendChild(td);
        }
        document.getElementById("row" + index).firstChild.innerHTML = arrayTarde[index] + " a " + arrayTarde[index + 1];
    }
}
function actualizarFecha() {
    //tabla de meses
    let meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ]
    //crea nueva FECHA
    let fecha = new Date();
    // escribe los datos en el documento
    //dia
    document.getElementById("day").innerText = fecha.getDate();
    //mes
    document.getElementById("month").innerText = meses[fecha.getMonth() - 1];
    //año
    document.getElementById("year").innerText = fecha.getFullYear();
}
function reset() {
    //limpia la etiqueta main para evitar que se repita el contenido
    document.getElementById("Horario").innerHTML = "";
}
function avisoLegal() {
    let nuevaVentana = window.open('avisoLegal.html', 'Comunicacion Entre Ventanas', 'toolbar=no,scrollbars=no,location=0,statusbar=0,menubar=no,resizable=no,width=900,height=450,left = 390,top = 50');
}
