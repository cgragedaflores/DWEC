let numero = prompt("Ingresa un numero");
if (numero < 0 ){
    alert("Por favor un numero > 0 ")
}else{
    for (let index = 0; index < 10; index++) {
        document.write("<h3>"+numero+" X "+ index +" ="+ (numero*index)+"<h3>");
    }
}