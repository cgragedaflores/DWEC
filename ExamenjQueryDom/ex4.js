function new_element() {
    //creamos element li
    let li = $('<li>');
    //agregamos texto al element
    $(li).text('Generado Auto');
    //lo cargamos en el padre
    $('ul').append(li);
}
