let input = prompt("Seleccione una opcion ( 1 o 2) ");
let time = new Date();
let li = document.createElement("li");
//VARIABLES
let segundo = time.getSeconds();
let minuto = time.getMinutes();
let hora = time.getHours();
if(input == 1){
//MUESTRA FORMATO 24H
    document.getElementById("resultado").appendChild(li).innerText= hora+" : "+minuto+" : "+segundo;
}else if(input == 2){
//MUESTRA FORMATO 12H
    if (hora > 12) {
        document.getElementById("resultado").appendChild(li).innerText= (hora-12)+" : "+minuto+" : "+segundo+" PM ";
    }else{
        document.getElementById("resultado").appendChild(li).innerText= (hora-12)+" : "+minuto+" : "+segundo+" AM ";
    }    
}else{
    //INPUT NO VALIDO
    alert("opciona no valida");
    input = prompt("Seleccione una opcion ( 1 o 2) ");
}