function funcion1(){
    let num1 = 10;
    document.getElementById("p1").innerHTML = "<p>entero"+num1+"</p><br/>";
}
function funcion2(){
    let num2 = 100
    document.getElementById("p2").innerHTML = "<p>Decimal"+num2+"</p><br/>"
}
function funcion3(){
    let num3 = 3e5;
    document.getElementById("p3").innerHTML = "<p>cientifico"+num3+"</p><br/>"
}
function funcion4(){
    let num4 = 0.0327;
    document.getElementById("p4").innerHTML = "<p>octal"+num4+"</p><br/>"
}
function funcion5(){
    let num5 =  0xA3F2;
    document.getElementById("p5").innerHTML = "<p>hexadecimal"+num5+"</p><br/>"
}
// <!-- Codigo hecho por Carlos Eduardo Grageda Flores -->