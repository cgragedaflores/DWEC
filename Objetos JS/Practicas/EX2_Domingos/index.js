let input = prompt("MES-DIA");
let array = input.split("-");
console.log(array);
//CONSTRUIR FECHA
    let fecha = new Date();
    fecha.setMonth(array[0]-1);
    fecha.setDate(array[1]);
    fecha.setFullYear(new Date().getFullYear());
for (let index = fecha.getFullYear(); index <= 2100; index++) {
    fecha.setFullYear(index);
    if(fecha.getDay() == 0){
        console.log(fecha);
        document.body.innerHTML+="<h3>Este año cade domingo : "+fecha.getFullYear()+"</h3><br/>";
    }
}