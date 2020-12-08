let horaInicio = "9:30";
let arrayHora = horaInicio.split(":");
for(let i = 9; i <= 22; i++){
    if(arrayHora[1] == 30){
        arrayHora[1] = "00";
    }else{
        arrayHora[1] = "30";
    }
    let resultado = arrayHora[0]+":"+arrayHora[1];
    document.write(resultado+"<br/>");
    arrayHora[0] = i;
}

