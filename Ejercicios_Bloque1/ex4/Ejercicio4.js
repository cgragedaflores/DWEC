let edad = prompt("Introduce una edad");
if (edad < 0){//Caso de que introduzcan un numero no valido
    alert("Por favor introduce un numero mayor que 0")
}else{
    if(edad < 12)document.write("Nen");    //Escribe Nen si la edad es Menor que 12
    if(edad < 26 && edad > 13)document.write("Jove"); //Escribe Nen si la edad es Menor que 26 y Mayor que 13
    if(edad < 60 && edad > 26)document.write("Adult"); //Escribe Nen si la edad es Mayor que  60
    if(edad > 60)document.write("Jubilat");
}
// CODIGO REALIZADO POR CARLOS GRAGEDA