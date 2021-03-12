$(document).ready(function () {
    console.log('jquery is working');
    ex1();
    ex2();
    ex3();
    ex4();
    ex5();
    ex6();
    function ex1() {
        //creando elementos
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let button = document.createElement('button');
        let button2 = document.createElement('button');
        let reset_btn = document.createElement('button');
        //asignando texto a botones
        $(button).text('Esconder Div1');
        $(button2).text('Esconder Div2');
        $(reset_btn).text('Reset');

        $(button).addClass('uk-button');
        $(button2).addClass('uk-button');
        $(reset_btn).addClass('uk-button');
        //agregando div a su contenedor
        $('#ex1').append(div1);
        $('#ex1').append(div2);
        $('#ex1Footer').append(reset_btn);
        //asignamos propiedades
        $(div1).css({ "background-color": "#34495e", "width": '200px', "height": '100px', 'margin': 'auto' });
        $(div2).css({ "background-color": "#e74c3c", "width": '200px', "height": '100px', 'margin': 'auto' });
        //agregamos los botones a los div.
        $(div1).append(button);
        $(div2).append(button2);
        //LISTENER
        $(button).on('click', function () {
            //ocultamos botones
            $(div1).hide();
        });
        $(button2).on('click', function () {
            $(div2).hide();
        });
        $(reset_btn).on('click', function () {
            $(div1).show();
            $(div2).show();
        })
    }
    function ex2() {
        let div = document.createElement('div');
        let btn_fade1 = document.createElement('button');
        let btn_fade2 = document.createElement('button');
        let btn_fade3 = document.createElement('button');
        let reset_btn = document.createElement('button');
        //clases
        $(btn_fade1).addClass('uk-button uk-button-small uk-margin-remove-top');
        $(btn_fade2).addClass('uk-button uk-button-small uk-margin-remove-top');
        $(btn_fade3).addClass('uk-button uk-button-small uk-margin-remove-top');
        $(reset_btn).addClass('uk-button uk-button-small uk-margin-remove-top');
        //texto botones
        $(btn_fade1).text('Normal');
        $(btn_fade2).text('Slow');
        $(btn_fade3).text('MS');
        $(reset_btn).text('reset');

        //agregando elementos a su contenedor
        $('#ex2').append(div);
        $('#ex2Footer').append(btn_fade1);
        $('#ex2Footer').append(btn_fade2);
        $('#ex2Footer').append(btn_fade3);
        $('#ex2Footer').append(reset_btn);
        $(div).css({ "background-color": "#34495e", "width": '150px', "height": '150px', 'margin': 'auto' })

        //Listener\
        $(btn_fade1).on('click', function () {
            $(div).fadeToggle();
        })
        $(btn_fade2).on('click', function () {
            $(div).fadeToggle('slow');
        })
        $(btn_fade3).on('click', function () {
            $(div).fadeToggle(3000);
        })
        $(reset_btn).on('click', function () {
            $(div).show();
            $(div).css({ "background-color": "#34495e", "width": '150px', "height": '150px', 'margin': 'auto' })
        })
    }
    function ex3() {
        //creamos elementos
        let div = document.createElement('div');
        let btn_anim = document.createElement('button');
        let reset_btn = document.createElement('button');
        //asignamos texto a los botonoes
        $(btn_anim).text('Start Anim');
        $(reset_btn).text('Reestablecer');
        $(btn_anim).addClass('uk-button');
        $(reset_btn).addClass('uk-button');
        //agregamos los botones a su contenedor;
        $('#ex3Footer').append(btn_anim);
        $('#ex3Footer').append(reset_btn);
        //agregamos la caja a su contenedor
        $('#ex3').append(div);
        //le aplicamos css -> es necesario establecer un posicionamiento ya que por defecto los objetos html son estaticos.
        $(div).css({ "background-color": "#34495e", "width": '200px', "height": '200px', 'margin': 'auto', 'position': 'relative' })
        //listener
        $(btn_anim).on('click', function () {
            $(div).animate({ 'left': '200px', 'height': '150px', 'width': '150px' })
        })
        //restablecemos al caja en su sitio
        $(reset_btn).on('click', function () {
            $(div).animate({ 'left': '0', "width": '200px', "height": '200px' })
        })
    }
    function ex4() {
        //elemento a
        let aBlank = document.createElement('a');
        let aSelft = document.createElement('a');
        //button
        let buttonBlank = document.createElement('button');
        let buttonSleft = document.createElement('button');
        let reset_btn = document.createElement('button');
        //clases
        $(aBlank).addClass('uk-text uk-text-lead uk-margin-auto uk-padding-large');
        $(aSelft).addClass('uk-text uk-text-lead uk-margin-auto uk-padding-large');
        $(buttonBlank).addClass('uk-button uk-margin-auto');
        $(buttonSleft).addClass('uk-button uk-margin-auto');
        $(reset_btn).addClass('uk-button uk-margin-auto');

        //atributos
        aBlank.setAttribute('target', '_blank');
        aBlank.setAttribute('href', '#');
        aSelft.setAttribute('href', '#');

        //texto
        $(aBlank).text('Enlace 1');
        $(aSelft).text('Enlace 2');
        $(buttonBlank).text('Ocultar Enlace1');
        $(buttonSleft).text('Ocultar Enlace2');
        $(reset_btn).text('Restablecer')

        //body
        $('#ex4').append(aBlank);
        $('#ex4').append(aSelft);
        //footer
        $('#ex4Footer').append(buttonBlank);
        $('#ex4Footer').append(buttonSleft);
        $('#ex4Footer').append(reset_btn);


        $(buttonBlank).on('click', function () {
            $(aBlank).hide();
        })
        $(buttonSleft).on('click', function () {
            $(aSelft).hide();
        })
        $(reset_btn).on('click', function () {
            $(aSelft).show();
            $(aBlank).show();
        })
    }
    function ex5() {
        //creacion de elementos
        let div = document.createElement('div');
        let divTexto = document.createElement('div');
        let start = document.createElement('button');
        let reset_btn = document.createElement('button');
        //atributos
        div.setAttribute('id','1');
        divTexto.setAttribute('id','2');
         //styles elemetons
        $(start).addClass('uk-button');
        $(reset_btn).addClass('uk-button uk-margin-auto');
        $(reset_btn).text('reset');
        $(start).text('Start Anim');
        $(divTexto).text('Hello');
        $(div).css({ "background-color": "#34495e", "width": '100px', "height": '100px', 'margin': 'auto', 'position': 'relative' })
        $(divTexto).css({ "background-color": "#e74c3c", "width": '100px', "height": '100px', 'margin': 'auto', 'position': 'relative', 'color': '#ffff' })

        $('#ex5').append(div);
        $('#ex5').append(divTexto);

        $('#ex5Footer').append(start);
        $('#ex5Footer').append(reset_btn);
        

        $(start).on('click', function () {
            $('#ex5').children().each(function () {
                //console.log($(this));
                if($(this).text() === 'Hello')$(divTexto).animate({ 'left': '200px', 'height': '150px', 'width': '150px','font-size':'36px'})
                else if($(this).text() === '')$(div).animate({ 'left': '200px', 'height': '150px', 'width': '150px' })
            });
        });
        $(reset_btn).on('click',function () {
            $(divTexto).animate({ 'left': '0', 'height': '100px', 'width': '100px','font-size':'18px'})
            $(div).animate({ 'left': '0', 'height': '100px', 'width': '100px'})
        })
    }
    function ex6() {
        //creacion de elementos
        let div = document.createElement('div');
        let divTexto = document.createElement('div');
        let start = document.createElement('button');
        let stop = document.createElement('button');
        let stop_ALL = document.createElement('button');
        let stop_finish = document.createElement('button');
        let reset_btn = document.createElement('button');
        //atributos
        div.setAttribute('id','1');
        divTexto.setAttribute('id','2');
         //styles elemetons
        $(start).addClass('uk-button');
        $(stop).addClass('uk-button');
        $(stop_ALL).addClass('uk-button');
        $(stop_finish).addClass('uk-button');
        $(reset_btn).addClass('uk-button uk-margin-auto');

        $(start).text('Start Anim');
        $(stop).text('stop Anim');
        $(stop_ALL).text('stop all Anim');
        $(stop_finish).text('stop but finish Anim');
        $(reset_btn).text('reset');
        $(divTexto).text('Hello');
        $(div).css({ "background-color": "#34495e", "width": '100px', "height": '100px', 'margin': 'auto', 'position': 'relative' })
        $(divTexto).css({ "background-color": "#e74c3c", "width": '100px', "height": '100px', 'margin': 'auto', 'position': 'relative', 'color': '#ffff' })

        $('#ex6').append(div);
        $('#ex6').append(divTexto);

        $('#ex6Footer').append(start);
        $('#ex6Footer').append(stop);
        $('#ex6Footer').append(stop_ALL);
        $('#ex6Footer').append(stop_finish);
        $('#ex6Footer').append(reset_btn);
        

        $(start).on('click', function () {
            $('#ex6').children().each(function () {
                //console.log($(this));
                if($(this).text() === 'Hello')$(divTexto).animate({ 'left': '200px', 'height': '150px', 'width': '150px','font-size':'36px'},5000)
                else if($(this).text() === '')$(div).animate({ 'left': '200px', 'height': '150px', 'width': '150px' },5000)
            });
        });
        $(stop).on('click',function () {
            (div).stop();
        })
        $(reset_btn).on('click',function () {
            $(divTexto).animate({ 'left': '0', 'height': '100px', 'width': '100px','font-size':'18px'})
            $(div).animate({ 'left': '0', 'height': '100px', 'width': '100px'})
        })
        
    }
});