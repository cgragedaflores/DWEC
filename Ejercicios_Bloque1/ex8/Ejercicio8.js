let nombre = prompt("Ingresa Nombre Apellido del Mayordomo de Nazarick");
while (nombre.toLocaleLowerCase().localeCompare("sebas tian")) {
    if(nombre.toLocaleLowerCase().includes("sebas") && 
    !nombre.toLocaleLowerCase().includes("tian")){
        alert("Aepllido incorrecto ser inferior");
        nombre = prompt("Ingresa Nombre Apellido del Mayordomo de Nazarick");
    }
    if(!nombre.toLocaleLowerCase().includes("sebas") && 
    nombre.toLocaleLowerCase().includes("tian")){
        alert("Nombre incorrecto ser inferior");
        nombre = prompt("Ingresa Nombre Apellido del Mayordomo de Nazarick");
    }
    alert("Nombre y Apellidos incorrectos ser inferior");
    nombre = prompt("Ingresa Nombre Apellido del Mayordomo de Nazarick");
}
document.write("<h1>Bienvenido Seguidor del Supremo<h1>");
