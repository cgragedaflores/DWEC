let palabraAdivinar = "";
let array = [];

window.onload = function () {
  cargarPartida();
};
function cargarPartida() {
  palabraAdivinar = prompt("Ingresa tu palabra").toUpperCase();
  console.log("datos recibidos " + palabraAdivinar);
  if (palabraAdivinar > 4 || palabraAdivinar < 0) {
    if (!confirm("Entrada No valida Introduce Otra")) window.close();
    palabraAdivinar = prompt("Ingresa tu palabra");
  }
  array = palabraAdivinar.split("");
  for (let index = 0; index < palabraAdivinar.length; index++) {
    //CREAR INPUTS SEGUN LA LONGITUD DE LA CADENA DE ENTRADA
    console.log("creando input");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("maxlength", "1");
    input.setAttribute("id", "inet" + index);
    input.setAttribute("readonly", "");
    document.getElementById("numLetras").appendChild(input);
  }
  let numIntentos = palabraAdivinar.length;
  //EVENTO CLICK BOTON
  console.log("input_palabra");
  document.getElementById("jugar").addEventListener("click", function () {
    console.log("boton precionado");

    console.log("Numero de intentos " + numIntentos);
    let resultado = "";

    for (let index = 0; index < numIntentos; index++) {
      console.log("for intentos" + index);
      let usuario = document.getElementById("usuarioLetra").value.toUpperCase();
      for (let i = 0; i < array.length; i++) {
        console.log("for test" + i);
        if (usuario != array[i]) {
          console.log("palabra mala");
          numIntentos--;
          continue;
        }
        if (usuario == array[i]) {
          console.log("palabra buena");
          resultado = document.getElementById("inet" + i).value = usuario;
        }
        console.log("Limpiando input usuario");
        usuario.value = " ";
      }
      console.log("ganador?");
      if (resultado == palabraAdivinar) {
        alert("Has Ganado");
        window.close();
      }
    }
  });
}
