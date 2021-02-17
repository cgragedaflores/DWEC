const contenedor = document.querySelector('.contenedor');
const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const pelicula = document.getElementById('pelicula');

let precioEntrada = +pelicula.value;

cargarDatosEnUi();

/* console.log(precioEntrada);
console.log(typeof precioEntrada); */

contenedor.addEventListener('click', (e) => {
    //console.log(e.target);

    if(
        e.target.classList.contains('asiento') &&
        !e.target.classList.contains('ocupado')) {
            e.target.classList.toggle('seleccionado');
            actualizarContadores();
        }
})

function actualizarContadores() {
    const asientosSeleccionados = document.querySelectorAll('.fila .asiento.seleccionado');
    //console.log(asientosSeleccionados);

    const indicesAsientos = [...asientosSeleccionados].map((asientop) => [...asientos].indexOf(asientop));
    //console.log(indicesAsientos);

    localStorage.setItem('AsientosSeleccionados', JSON.stringify(indicesAsientos));

    const contadorAsientosSeleccionados = asientosSeleccionados.length;

    contador.innerText = contadorAsientosSeleccionados;
    total.innerText = contadorAsientosSeleccionados * precioEntrada;
}

function cargarDatosEnUi(){
    const asientosSeleccionados = JSON.parse(localStorage.getItem('AsientosSeleccionados'));
    //console.log(asientosSeleccionados);

    if(asientosSeleccionados != null && asientosSeleccionados.length > 0){
        asientos.forEach((asiento, indice) => {
            if(asientosSeleccionados.indexOf(indice) > -1){
                asiento.classList.add('seleccionado');
            }
        });
    }

    const indicePeliculaSeleccionada = localStorage.getItem('IndicePeliculaSeleccionada');
    const precioPeliculaSeleccionada = localStorage.getItem('PrecioPeliculaSeleccionada');

    if(indicePeliculaSeleccionada != null){
        pelicula.selectedIndex = indicePeliculaSeleccionada;
    }

    if(precioPeliculaSeleccionada != null){
        precioEntrada.selectedIndex = precioPeliculaSeleccionada;
    }
}

pelicula.addEventListener('change', (e) => {
    precioEntrada = +e.target.value;

    guardarDatosPelicula(e.target.selectedIndex, +e.target.value);
    //console.log(e.target.selectedIndex, +e.target.value);

    actualizarContadores();
});

function guardarDatosPelicula(indiceSeleccionado, precioEntrada){
    localStorage.setItem("IndicePeliculaSeleccionada", indiceSeleccionado);
    localStorage.setItem("PrecioPeliculaSeleccionada", precioEntrada);
}

actualizarContadores();