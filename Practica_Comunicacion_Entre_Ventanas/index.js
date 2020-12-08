let nombre = prompt("Introduzca su nombre(s) y apellidos")
let dia = prompt("introduzca DIA de nacimiento. ej 1");
let mes = prompt("introduzca MES de nacimiento. ej 12");
let año = prompt("introduzca AÑO de nacimiento. ej 1996");
document.body.innerHTML+="<h1>TAREA DWEC03</h1>"
document.body.innerHTML+="<h2>Buenos dias "+nombre+"</h2>"
document.body.innerHTML+="<h3>Tu Nombre tiene "+nombre.length+" caracteres  incluidos espacios";
document.body.innerHTML+="<h3>La primera Letra "+nombre.charAt(0)+ " de tu nombre esta en la posicion "+nombre.indexOf(nombre.charAt(0));
document.body.innerHTML+="<h3>La ultima Letra "+nombre.charAt(nombre.length-1)+" de tu nombre esta en la posicion "+nombre.lastIndexOf(nombre.charAt(nombre.length-1));
let nombre3 = "";
for (let index = 2; index < nombre.length; index++) {
    nombre3 += nombre.charAt(index);
}
let birthdateUser = new Date(año,mes,dia);
document.body.innerHTML+="<h3>Tu Nombre menos las 3 primeras letras es  "+nombre3+"</h3>";
document.body.innerHTML+="<h3>Tu Nombre menos las 3 primeras letras es  "+nombre.toUpperCase()+"</h3>";
let diaSemana;
switch (birthdateUser.getDay()) {
    case 1:
        diaSemana = "Lunes";
        break;
    case 2:
        diaSemana = "Martes";
        break;
    case 3:
        diaSemana = "Miercoles";
        break;
    case 4:
        diaSemana = "Jueves";
        break;
    case 5:
        diaSemana = "Viernes";
        break;
    case 6:
        diaSemana = "Sabado";
        break;
    default:
        diaSemana = "Domingo";
}
document.body.innerHTML+="<h3>Tu edad es  "+(new Date().getFullYear()-birthdateUser.getFullYear())+"</h3>";
document.body.innerHTML+="<h3>Naciste un Feliz  "+diaSemana+" del año "+birthdateUser.getFullYear()+"</h3>";
document.body.innerHTML+="<h3>El coseno de 180 es  "+Math.cos(180)+"</h3>";
//CALCULAR EL MAYOR DE NUMEROS
let arrayNumber = [34,67,23,75,35,19];
arrayNumber = arrayNumber.sort().reverse();

document.body.innerHTML+="<h3>El mayor de {34,67,23,75,35,19}  "+arrayNumber[0]+"</h3>";
document.body.innerHTML+="<h3>Ejemplo de Numero al azar  "+(Math.floor(Math.random()*100)+1)+"</h3>";
//FUCIONES
function start() {
    let nuevaVentana = window.open('ventana.html','Comunicacion Entre Ventanas','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=600,height=300,left = 390,top = 50');
}
function emergente() {
    //CREACION DE ELEMENTOS
    let h3 = document.createElement("h3");
    let ul = document.createElement("ul");
    let liUrl =document.createElement("li");
    let liProtocol = document.createElement("li");
    let liNavegador = document.createElement("li");
    let liScript = document.createElement("li");
    //Asignacion de Atributos
    h3.setAttribute("id","title");
    ul.setAttribute("id","lista");
    //AGREGAR ELEMENTOS Elementos Hijos e Contenido
    document.body.appendChild(h3);
    document.body.appendChild(ul);
    document.getElementById("lista").appendChild(liUrl).innerHTML=window.location;
    document.getElementById("lista").appendChild(liProtocol).innerHTML=location.protocol;
    document.getElementById("lista").appendChild(liNavegador).innerHTML=navigator.appCodeName;
    if (navigator.javaEnabled()) {
        document.getElementById("lista").appendChild(liScript).innerHTML="Java esta Disponible en esta Ventana";    
    }else{
        document.getElementById("lista").appendChild(liScript).innerHTML="Java no esta Disponible en esta Ventana";
    }
    

    //MODIFICAR SU CONTENIDO
    document.getElementById("title").innerText="Ejemplo de Ventana Nueva";
}
function loadPage(){
    var frame = $('#frame');
    var url = 'https://www.google.es';
    frame.attr('src',url).show();
}
