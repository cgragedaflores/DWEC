//-------------------------CLASE Persona------------------------//
function Persona(nombre, genero, edad) {
    this.nombre = nombre;
    this.genero = genero;
    this.edad = edad;
}
Persona.prototype.obtenerDetalles = function () {
    return "Nombre : " + this.nombre + "\nGenero : " + this.genero + "\nEdad: " + this.edad + "\n";
}
//-------------------------CLASE Estudiante------------------------//
function Estudiante(nombre, genero, edad) {
    Persona.call(this, nombre, genero, edad);
    this.curso = "";
    this.grupo = "";
}

Estudiante.prototype.registrar = function (curso, grupo) {
    this.curso = curso;
    this.grupo = grupo;
}
//sobrreescritura del metodo obtener detalles de Persona
Estudiante.prototype.obtenerDetalles = function () {
    return "Nombre : " + this.nombre + "\nGenero : " + this.genero + "\nEdad: " + this.edad + "\nCurso : " + this.curso + "\nGrupo : " + this.grupo;
}
//-------------------------CLASE Profesor------------------------//
function Profesor(nombre, genero, edad) {
    Persona.call(this, nombre, genero, edad);
    this.asignatura = "";
    this.nivel = "";
}
Profesor.prototype.asignar = function (asignatura, nivel) {
    this.asignatura = asignatura;
    this.nivel = nivel;
}
//sobrreescritura del metodo obtener detalles de Persona
Profesor.prototype.obtenerDetalles = function () {
    return "Nombre : " + this.nombre + "\nGenero : " + this.genero + "\nEdad: " + this.edad + "\nAsignatura : " + this.asignatura + "\nNivel : " + this.nivel;
}
//-------------------------TEST FUNCIONALIDADES------------------------//
//creamos objetos de las diferentes clases
let p1 = new Persona("Carlos Eduardo", "H", 24);
let es1 = new Estudiante("Pablo Martinez", "H", 20);
let prof1 = new Profesor("Cristofer Martinez", "H", 26);
console.log("OBJETOS DE PERSONA")
console.log(p1.obtenerDetalles());
console.log(es1.obtenerDetalles());
console.log(prof1.obtenerDetalles());
//comprobacion de los metodos
//metodo registrar
es1.registrar("1ro", "A");
//metodo asignar
prof1.asignar("Matematicas", "3");
//mostrando sus caracteristicas
console.log(p1.obtenerDetalles());
console.log(es1.obtenerDetalles());
console.log(prof1.obtenerDetalles());
document.getElementById("contenidoPersona").innerHTML += p1.obtenerDetalles() + "<br/>" + es1.obtenerDetalles() + "<br/>" + prof1.obtenerDetalles() + "<br/>";