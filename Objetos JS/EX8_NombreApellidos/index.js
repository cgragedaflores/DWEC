function start() {
    let nombreCompleto = prompt("Introduzca su nombre Completo");  
    if (nombreCompleto == "") {
        alert("Comprueve los datos");
        nombreCompleto = prompt("Introduzca su nombre Completo");  
    }
    let nombreSinEspacios = nombreCompleto.replaceAll(" ","").length;
    document.getElementById("1").innerHTML= nombreSinEspacios;
    document.getElementById("2").innerText = nombreCompleto.toUpperCase()+"\n"+nombreCompleto.toLowerCase();
    let arrayNombre = nombreCompleto.split(' ');
    let Nombre = arrayNombre[0];
    let Apellido1 = arrayNombre[1];
    let Apellido2 = arrayNombre[2];
    document.getElementById("3").innerHTML="Nombre : "+Nombre+" /Apellido1 : "+Apellido1+" /Apellido2:"+Apellido2;
}