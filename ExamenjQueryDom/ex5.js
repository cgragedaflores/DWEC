function Remove_options() {
    if (confirm('Desea Eliminar todos los elementos')) {
        //creamos elementos option
        let option = $('<option>',{
            'selected':'true'
        });
        let option2 = $('<option>');
        let option3 = $('<option>');
        //eliminamos los elementos anteriores
        $('#myColor').children().remove();
        alert('Eliminados Correctamente');
        //asignamos el option que estara seleccionado
        $(option).text('AutoGenerado');
        //Agregamos texto a otros option
        $(option2).text('AutoGenerado 2');
        $(option3).text('AutoGenerado 3');
        //agregamos elementos documento
        $('#myColor').append(option)
        $('#myColor').append(option2)
        $('#myColor').append(option3)
    }
    
}