let suma = document.getElementById('suma')
let resta = document.getElementById('resta')
let multiplicacion = document.getElementById('multiplicacion')
let clickedBtn = document.querySelectorAll('input');


clickedBtn.forEach(element => {
    element.addEventListener('click', function () {
        let textoCalc = document.getElementById('algo');
        textoCalc.innerText = this.value;
        console.log(textoCalc.value)
    })
});


function funSuma(inputValue1, inputValue2) {
    return inputValue1.value + inputVlaue2.value;
}
function funResta(inputValue1, inputValue2) {
    return inputValue1.value - inputVlaue2.value;
    
}
function funMultiplicacion(inputValue1, inputValue2) {
    return inputValue1.value * inputVlaue2.value;
}

