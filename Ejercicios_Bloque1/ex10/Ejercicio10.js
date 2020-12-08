let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
function myFun(input){
    let numero = document.getElementById("Numero").value+=""+input;
    if(numero.length > 8)alert("Maximo 8 numeros");
    if(numero > 99999999)alert("Numero no valido");
    // document.getElementById("Numero").innerText+=numero;
}
function calcular(){
    let numero = document.getElementById("Numero").value;
    alert("La letra de tu numero es "+letras[numero%23]);
}