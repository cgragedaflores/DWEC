//-------------------------CLASE EDIFCIO------------------------//
function Edificio() { }
function Edificio(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    //Crea un array que contendra objetos de la clase Planta
    this.numeroPlantas = new Array();
    console.log("Edificio creado en : " + this.calle + " con numero : " + this.numero + " CP : " + this.codigoPostal + " y con " + this.numeroPlantas.length + " plantas");
}
//-------------------------CLASE PLanta------------------------//
function Planta() {
    //Creara un array que contendra objetos de la clase puerta
    this.puerta = new Array();
}
//-------------------------CLASE Puerta------------------------//
function Puerta() {
    //Numero de puerta
    this.numero = 0;
    //Nombre de propietario
    this.nombrePropietario = "";
}
//-------------Metodos Clase Edificio-------------------//
Edificio.prototype.setCalle = function (nuevaCalle) {
    this.calle = nuevaCalle;
}
Edificio.prototype.setNumero = function (nuevoNumero) {
    this.numero = nuevoNumero;
}

Edificio.prototype.setCodigoPostal = function (nuevoCodigoPostal) {
    this.codigoPostal = nuevoCodigoPostal;
}
Edificio.prototype.getCalle = function () {
    return this.calle;
}
Edificio.prototype.getNumero = function () {
    return this.numero;
}

Edificio.prototype.getCodigoPostal = function () {
    return this.codigoPostal;
}
Edificio.prototype.agregarPropietario = function (nombre, planta, puerta) {
    this.numeroPlantas[planta - 1].puerta[puerta - 1].nombrePropietario = nombre;
    console.log(nombre+"\tes ahora propietario de la puerta : "+puerta+"\tde la planta : "+planta);
}
Edificio.prototype.getPlantas = function () {
    let resultado = "";
    for (let index = 0; index < this.numeroPlantas.length; index++) {
        let plantaActual = this.numeroPlantas[index];
        for (let j = 0; index < array.length; index++) {
        }
    }
    return resultado;
}
Edificio.prototype.setPlantasPuertas = function (numeroPlantas, numeroPuertas) {
    for (let index = 0; index < numeroPlantas; index++) {
        //crea una nueva planta
        let nuevPlanta = new Planta();
        for (let j = 0; j < numeroPuertas; j++) {
            let nuevaPuerta = new Puerta();
            nuevaPuerta.numero = j;
            //agrega puerta a las plantas
            nuevPlanta.puerta.push(nuevaPuerta);
        }
        this.numeroPlantas.push(nuevPlanta);
    }
}


//-------------------------TEST FUNCIONALIDADES------------------------//
//Objetos creados
let edificio_A = new Edificio("Santa Victoria", 18, 07701);
let edificio_B = new Edificio("Calle 8", 29, 0);
let edificio_C = new Edificio();

//Comprovacion de metodos setter
edificio_B.setCodigoPostal(07703);

edificio_C.setCalle("Calle 9");
edificio_C.setNumero(89);
edificio_C.setCodigoPostal(07704);

console.log("CAMBIANDO ATRIBUTOS A LOS EDIFICIOS");
console.log(edificio_B);
console.log(edificio_C);

console.log("OBTENIENDO LOS DATOS CON GETTERS");
console.log("Edificio creado en : " + edificio_A.getCalle() + " con numero : " + edificio_A.getNumero() + " CP : " + edificio_A.getCodigoPostal() + " y con " + edificio_A.numeroPlantas.length + " plantas");
console.log("Edificio creado en : " + edificio_B.getCalle() + " con numero : " + edificio_B.getNumero() + " CP : " + edificio_B.getCodigoPostal() + " y con " + edificio_B.numeroPlantas.length + " plantas");
console.log("Edificio creado en : " + edificio_C.getCalle() + " con numero : " + edificio_C.getNumero() + " CP : " + edificio_C.getCodigoPostal() + " y con " + edificio_C.numeroPlantas.length + " plantas");

//Comprobacion del metodo setPlantasPuertas()
edificio_A.setPlantasPuertas(3, 5);
edificio_B.setPlantasPuertas(5, 5);
edificio_C.setPlantasPuertas(1, 1);

console.log("AGREGANDO PLANTAS Y PUERTAS A EDIFICIOS")
console.log("Edificio creado en : " + edificio_A.getCalle() + " con numero : " + edificio_A.getNumero() + " CP : " + edificio_A.getCodigoPostal() + " y con " + edificio_A.numeroPlantas.length + " plantas");
console.log("Edificio creado en : " + edificio_B.getCalle() + " con numero : " + edificio_B.getNumero() + " CP : " + edificio_B.getCodigoPostal() + " y con " + edificio_B.numeroPlantas.length + " plantas");
console.log("Edificio creado en : " + edificio_C.getCalle() + " con numero : " + edificio_C.getNumero() + " CP : " + edificio_C.getCodigoPostal() + " y con " + edificio_C.numeroPlantas.length + " plantas");


console.log("AGREGANDO PROPIETARIO A LAS PUERTAS");
edificio_A.agregarPropietario("Carlos Eduardo Grageda Flores", 3, 3);
edificio_A.agregarPropietario("Pablo Martinez Jimenez", 3, 1);
edificio_A.agregarPropietario("Cristofer Martinez Manzano", 3, 2);