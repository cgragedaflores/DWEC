function start() {
    let num = prompt("Introduzca su numero");
    if(num < 0  || num > Math.pow(10,6)){
        alert("Compruebe los datos");
        num = prompt("Introduzca su numero");
    }else{
        let exponente = 0;
        let numAuxiliar = 0;
        while (num % 10 == 0) {
            
        }
        document.getElementById("1").innerHTML="Resultado Exponencial";
        document.getElementById("2").innerHTML= Number.parseInt(num).toFixed(4);
        document.getElementById("3").innerHTML= Number.parseInt(num).toString(2);
        document.getElementById("4").innerHTML= Number.parseInt(num).toString(8);
        document.getElementById("5").innerHTML= "0x"+Number.parseInt(num).toString(16);
    }
}