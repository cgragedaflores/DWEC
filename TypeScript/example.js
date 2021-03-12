let button = document.getElementById('boton');
let input1 = document.getElementById('num1');
let input2 = document.getElementById('num2');

button.addEventListener('click', function () {
    console.log(suma(input1,input2));
})

function suma(num1, num2){return num1+num2;}