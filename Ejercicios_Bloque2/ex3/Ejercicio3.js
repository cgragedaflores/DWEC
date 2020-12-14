let numero = prompt("Ingresa un Numero para Calcular Factorial");
let resultado = 1;
for (let index = 1; index <= numero; index++) {
    resultado = resultado * index;
}
document.write("<h3>"+"RESULTADO FACTORIAL = "+resultado+"<h3>");