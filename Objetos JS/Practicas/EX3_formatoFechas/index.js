let parametro = prompt("Introduce valor > 0 && < 3");
console.log(parametro)
let fecha = new Date();
//TABLA DE MESES
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
//ELEMENTO A MOSTRAR EN PANTALLA
let li = document.createElement("li");
if (parametro == 1) {
    //uso metodo toStringDate();
    document.getElementById("datos").appendChild(li).innerText = fecha.toLocaleDateString();
}
if (parametro == 2) {
    //CREA OBJETO DATE
    let tmpDate = new Date();
    let mes = tmpDate.getMonth();
    let dia;
    switch (tmpDate.getDay()) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miercoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sabado";
            break;
        default:
            dia = "Domingo";
    }
    document.getElementById("datos").appendChild(li).innerText = dia+","+tmpDate.getDate()+" de "+meses[mes-1]+" de "+tmpDate.getFullYear();
}
if (parametro == 3) {
    //uso metodo toStringDate();
    document.getElementById("datos").appendChild(li).innerText = fecha.toDateString();
}
