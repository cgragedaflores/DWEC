
// asignando fechas Inicio Curso
//iNICIALIZACION DE VARIABLES
    // INICIO CURSO
    let inicioCurso = new Date();
    inicioCurso.setMonth(new Date().getMonth());
    inicioCurso.setFullYear(new Date().getFullYear());
    // FIN CURSO
    let finCurso = new Date();
    finCurso.setDate(24);
    finCurso.setMonth(6);
    finCurso.setFullYear(inicioCurso.getFullYear()+1);
//TABLA PARA COMPROBAR QUE EL DIA ES CORRECTO
let array = [31,29,31,30,31,30,31,31,30,31,30,31];
let dia = prompt("Introduce un dia");
if (dia > array[inicioCurso.getMonth()]) {
    alert("DIA NO VALIDO");
    dia = prompt("Introduce un dia");
}else{
    inicioCurso.setDate(dia);
}

let resultado = ((finCurso-inicioCurso)/(1000*60*60*24));
document.body.innerHTML+="<h1>Quedan : "+Math.round(resultado)+" Dias</h1>";



// (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> díasa