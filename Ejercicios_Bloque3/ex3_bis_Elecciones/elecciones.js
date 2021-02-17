//--------------Clase Colegio Electoral----------------//
function ColegioElectoral(nombre, totalVotos) {
    //guarda todos los votos realizados en el colegio
    this.nombre = nombre;
    this.totalVotos = 0;
    this.partidos = new Array();
}
ColegioElectoral.prototype.addPartidoColegio = function (arrayPartidos) {
    this.partidos = arrayPartidos;
}
//----------------Clase Partido-----------------------//
function Partido(votosPartido, nombrePartido) {
    //guarda los votos por el partido
    this.votosPartido = votosPartido;
    this.nombrePartido = nombrePartido;
}
Partido.prototype.addPartido = function (nombrePartido) {
    this.nombrePartido = nombrePartido;
}
Partido.prototype.addVotos = function (votosPartido) {
    this.votosPartido = votosPartido;
}

//TEST FUNCIONALIDAD
let arrayColegios = new Array();
let arrayPartidos = new Array();
//declaracion de Partidos
let psoe = new Partido(0, "PSOE");
let pp = new Partido(0, "PP");
let ciudadanos = new Partido(0, "CIUDADANOS");
let podemos = new Partido(0, "PODEMOS");
let mes = new Partido(0, "MES");
//Declaracion de Colegios
let claustre = new ColegioElectoral("Claustre", 0);
let vergeDelCarme = new ColegioElectoral("verge Del Carme", 0);
let vergeDeGracia = new ColegioElectoral("Verge de Gracia", 0);
let saGraduada = new ColegioElectoral("Sa Graduada", 0);
//Agregamos todos los partidos a un array de  partidos
arrayPartidos.push(psoe);
arrayPartidos.push(ciudadanos);
arrayPartidos.push(podemos);
arrayPartidos.push(mes);
//utilizamos el metodo de la clase para almacenar directamente los partidos
claustre.addPartidoColegio(arrayPartidos);
vergeDelCarme.addPartidoColegio(arrayPartidos);
vergeDeGracia.addPartidoColegio(arrayPartidos);
saGraduada.addPartidoColegio(arrayPartidos);
//guardamos los colegios dentro de un array
arrayColegios.push(claustre);
arrayColegios.push(vergeDelCarme);
arrayColegios.push(vergeDeGracia);
arrayColegios.push(saGraduada);
//recorremos los colegios y agregamos nuevo elemento option por cada colegio
for (let i = 0; i < arrayColegios.length; i++) {
    let option = document.createElement("option");
    let nombreColegio = arrayColegios[i];
    document.getElementById("colegio").appendChild(option).innerText= nombreColegio.nombre;
    //recorremos los partidos que hay por cada colegio 
    
}



