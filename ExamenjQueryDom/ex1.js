///EX1
let button = document.getElementById('jsstyle');
//listener captura el evento del boton
button.addEventListener('click',function () {
    //captura el texto
    let texto = document.getElementById('text');
    //cambia la fuente
    texto.style.fontFamily = 'verdana';
    //cambia el tamaño de la fuente
    texto.style.fontSize = '20px';
    //cambia el color de la fuente
    texto.style.color = 'green'
})
//Ex2
document.getElementById('delete').addEventListener('click',function () {
    //selecciona el ultimo option de la lista de elementos
    let selectLastChild = document.getElementById('colorSelect').lastChild;
    //lo elimina
    console.log(selectLastChild);
})

