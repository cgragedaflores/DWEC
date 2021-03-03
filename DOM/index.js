////////////////////////////////EX1 START////////////////////////////////////////////
// Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra.
// Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario
// introduzca un texto.
// Una vez cerrado el prompt el valor se añadirá como un nuevo <li> a la lista creada.
// Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que cuando pulses el
// primer botón borre el primer elemento de la lista y cuando pulses el último borre el último elemento de la
// lista.
//lISTENER BOTON INSERT
document.getElementById("insert").addEventListener("click", event => {
    //crea elemento 
    let li = document.createElement("li");
    //captura el texto introducido por el usuario
    let texto = prompt("Introduzca su texto");
    //comprueba que no este vacio
    if (texto.length < 1) {
        alert("No se admiten campos vacios");
        texto = prompt("Introduzca su texto");
    }
    //captura la lista
    let padre = document.getElementById('padre');
    //agregamos el texto introducido al li
    li.appendChild(document.createTextNode(texto));
    padre.appendChild(li);
});
//Listener BOTON DELETE First
document.getElementById('deleteFirst').addEventListener('click', event => {
    //obtenemos los elementos de la lista.
    let padre = document.getElementById('padre');
    console.log(padre.firstChild.remove());
});
//Listener BOTON DELETE Last
document.getElementById('deleteLast').addEventListener('click', event => {
    //obtenemos los elementos de la lista.
    let padre = document.getElementById('padre');
    console.log(padre.lastChild.remove());
});
////////////////////////////////EX1 END//////////////////////////////////////////////




////////////////////////////////EX2 START////////////////////////////////////////////
// Crea una aplicación que te permitirá generar tus propios formularios de manera dinámica. Para ello
// dibuja una tabla de una sola fila y varias columnas. En cada columna habrá un botón que realice lo
// siguiente:
// 1. Crear un input de tipo texto. Le preguntará al usuario mediante un prompt qué nombre (atributo
// name) tiene el input.
// 2. Crear un input de tipo password. Le preguntará al usuario mediante un prompt qué nombre
// (atributo name) tiene el input.
// 3. Crear un textarea. Le preguntará al usuario el nombre y generará automáticamente un textarea
// de 40 columnas y 5 filas.
// 4. Crear un label. Preguntará al usuario a qué input va referido (atributo for).
// 5. Crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src).
// 6. Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value).
// 7. Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value).
// 8. Crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos name y value).

//Listener Boton Input Text
document.getElementById('crearTexto').addEventListener('click', event => {
    let texto = prompt("Introduce un nombre para el elemento");
    //comprueba que el nombre no este vacio
    if (texto.length < 1) {
        alert("El nombre del elemento no puede estar vacio");
        texto = prompt("Introduce un nombre para el elemento");
    }
    //crea element div
    let divPadre = document.createElement("div");
    divPadre.className = "uk-margin uk-width-1-2@s";
    //Crea el elemento input
    let inputText = document.createElement('input');
    //asigna atributos
    inputText.setAttribute('name', texto);
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', 'someText Here');
    //Agrega clases de framework
    inputText.className = "uk-input"
    //Agregamos input a div.
    divPadre.appendChild(inputText);

    document.getElementById('padreFormulario').appendChild(divPadre);
});
//Listener Boton Input Contraseña
document.getElementById('crearPassword').addEventListener('click', event => {
    let texto = prompt("Introduce un nombre para el elemento");
    //comprueba que el nombre no este vacio
    if (texto.length < 1) {
        alert("El nombre del elemento no puede estar vacio");
        texto = prompt("Introduce un nombre para el elemento");
    }
    //crea element div
    let divPadre = document.createElement("div");
    divPadre.className = "uk-margin uk-width-1-2@s";
    //Crea el elemento input
    let inputText = document.createElement('input');
    //asigna atributos
    inputText.setAttribute('name', texto);
    inputText.setAttribute('type', 'password');
    inputText.setAttribute('placeholder', 'someText Here');
    //Agrega clases de framework
    inputText.className = "uk-input"
    //Agregamos input a div.
    divPadre.appendChild(inputText);

    document.getElementById('padreFormulario').appendChild(divPadre);
});
//Listener boton crearArea
document.getElementById('crearArea').addEventListener("click", event => {
    let texto = prompt("Introduce un nombre para el elemento");
    //comprueba que el nombre no este vacio
    if (texto.length < 1) {
        alert("El nombre del elemento no puede estar vacio");
        texto = prompt("Introduce un nombre para el elemento");
    }
    //crea element div
    let divPadre = document.createElement("div");
    divPadre.className = "uk-margin uk-width-1-2@s";
    //crear elemento textArea
    let textArea = document.createElement('textarea');
    //asignamos atributos
    textArea.setAttribute('name',texto);
    textArea.setAttribute('rows','5');
    textArea.setAttribute('cols','40');
    //asignamos clase
    textArea.className = 'uk-textarea';
    //agregamos text area a div
    divPadre.appendChild(textArea);
    document.getElementById('padreFormulario').appendChild(divPadre);
});
//Listener Boton Label
document.getElementById('crearLabel').addEventListener('click', event => {
    let texto = prompt("Introduce el nombre del elemento al cual referencia");
    //comprueba que el nombre no este vacio
    if (texto.length < 1) {
        alert("El nombre del elemento no puede estar vacio");
        texto = prompt("Introduce el nombre del elemento al cual referencia");
    }
    //obtenemos el elemento con el nombre del pronpt
    let inputElement = document.getElementsByName(texto);
    //Creamos el elemento label
    let label = document.createElement('label');
    //asignamos atributos necesarios
    label.setAttribute('for',texto);
    label.setAttribute('name','label-autogenerado');
    label.innerText = texto;
    
    inputElement[0].parentElement.appendChild(label);

});
//listener imagen
document.getElementById('crearImg').addEventListener('click', event => {
    let texto = prompt("Introduce la ruta que tendra el src");
    //comprueba que el nombre no este vacio
    if (texto.length < 1) {
        alert("El nombre del elemento no puede estar vacio");
        texto = prompt("Introduce la ruta que tendra el src");
    }
    //creando elementp
    let img = document.createElement('img');
    //asignando atributos
    img.setAttribute('src',texto);
    img.setAttribute('uk-img','');
    img.setAttribute('width','50');

    //creando contenedor para la imagen
    let divPadre = document.createElement("div");
    divPadre.className = "uk-margin uk-width-1-2@s";
    divPadre.appendChild(img);
    document.getElementById('container').appendChild(divPadre);
});
//listener checkbox
document.getElementById('crearCheck').addEventListener('click', event => {
    let value = prompt("Introduce la valor del checkbox");
    let texto = prompt("introduce el nombre del checkbox");
    //comprueba que el nombre no este vacio
    if (texto.length  > 1 || value.length > 1) {
        //creamos contenedor div.
        let divPadre = document.createElement("div");
        divPadre.className = "uk-margin uk-width-1-2@s";
        divPadre.innerText = "checkbox autogenerated"
        //creamos elemento input
        let checkbox = document.createElement('input');
        //le asignamos la propiedad checkbox
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('name',texto);
        checkbox.setAttribute('value',value);
        //asignamos clase framework
        checkbox.classList = 'uk-checkbox';
        //agregamos el checkbox
        divPadre.appendChild(checkbox);
        //seleccionamos el formulario
        document.getElementById('padreFormulario').appendChild(divPadre);
    }else{
        alert("El nombre del elemento no puede estar vacio");
        value = prompt("Introduce  valor del checkbox");
        texto = prompt("Introduce nombre del checkbox");
    }
});
//listener Crear Boton submit
document.getElementById('crearSubmit').addEventListener('click', event => {
    let value = prompt("Introduce la valor del button");
    let texto = prompt("Introduce el nombre del boton");
    //comprueba que el nombre no este vacio
    if (texto.length  > 1 || value.length > 1) {
        //creamos contenedor div.
        let divPadre = document.createElement("div");
        divPadre.className = "uk-margin uk-width-1-2@s";
        divPadre.innerText = ""
        //creamos elemento input
        let button = document.createElement('button');
        //le asignamos la propiedad checkbox
        button.setAttribute('type','submit');
        button.setAttribute('name',texto);
        button.setAttribute('value',value);
        //asignamos clase framework
        button.classList = 'uk-button uk-button-secondary';
        button.innerText = "Submit"
        //agregamos el button
        divPadre.appendChild(button);
        //seleccionamos el formulario
        document.getElementById('padreFormulario').appendChild(divPadre);
    }else{
        alert("El nombre del elemento no puede estar vacio");
        value = prompt("Introduce la valor del button");
        texto = prompt("Introduce el nombre del boton");
    }
    
});
////////////////////////////////EX2 END//////////////////////////////////////////////



////////////////////////////////EX3 START////////////////////////////////////////////
//creamos elemento text area
const mainArea  = document.createElement('textarea');
    //asignamos atributos
    mainArea.setAttribute('cols','40');
    mainArea.setAttribute('rows','5');
    mainArea.setAttribute('placeholder','Write something here....');
    mainArea.classList = 'uk-textarea';

//creamos button
const button = document.createElement('button');
    //asignamos atributos del boton
    button.setAttribute('id','crearTexto');
    button.setAttribute('type','submit');
    button.classList = 'uk-button uk-button-text'
    button.innerText = "Agregar Parrafo";
    //button.classList= 'uk-button uk-button-default'
//asiganamos los elementos creados a un contenedor
let form = document.getElementById('container-ex3');
form.appendChild(mainArea);
form.appendChild(button);



//Listener boton
document.getElementById('container-ex3').addEventListener('submit', event => {
    event.preventDefault();
    if (mainArea.value === ""){
        alert('Asegurece de  que el textArea no este vacio');
    }
    let textoArea = mainArea.value;
    let p = document.createElement('p');
    p.classList = 'uk-text uk-text-sucess';
    p.innerText = textoArea;
    form.appendChild(p);

});
////////////////////////////////EX3 END//////////////////////////////////////////////


////////////////////////////////EX4 START////////////////////////////////////////////
// Queremos crear una página en la que generar una fila de una tabla con información de plantas de
// nuestra floristería haciendo uso del DOM del documento.
// Para ello, realiza un programa en Javascript en un archivo aparte que añadirás en el head del html y
// que se cargará tras cargar el documento. Realizará lo siguiente:
// 1. Añade un botón al principio de la página con el texto “Generar planta”.
// 1. Solicitará al usuario la información de la planta (nombre, ubicación, ejemplares y flor) con 4
// prompt.
// 2. Una vez introducidos los datos se creará un nueva fila en la tabla.
// Junto al botón anterior añade otro con el texto “Borrar fila”. Este botón borrará la última fila introducida.
// 3. Al final de la página añade un botón más con que permita mostrar el número de filas de la tabla.
// No utilices un contador al generar las imágenes: haz un programa que cuente el número de nodos de
// cada fila que haya.
let contendor = document.getElementById('floristeria');


//creamos botones
//boton para generar plantas
let btn_GenerarPlanta = document.createElement('button');
btn_GenerarPlanta.setAttribute('id','gPlanta');
btn_GenerarPlanta.setAttribute('type','submit');
btn_GenerarPlanta.classList = 'uk-button uk-button-secondary'
btn_GenerarPlanta.innerText = "Generar Planta";
//boton para borrar la ultima fila
let btn_BorrarFila = document.createElement('button');
btn_BorrarFila.setAttribute('id','bPlanta');
btn_BorrarFila.setAttribute('type','submit');
btn_BorrarFila.classList = 'uk-button uk-button-secondary'
btn_BorrarFila.innerText = "Borrar Ultima fila";
//btn_contar elementos
let btn_contador = document.createElement('button');
btn_contador.setAttribute('id','cFlore');
btn_contador.setAttribute('type','submit');
btn_contador.classList = 'uk-button uk-button-text'
btn_contador.innerText = "Mostrar Numeros de elementos";


//Generamos elementos de la tabla
//elemento table
let table = document.createElement('table');
//agregamos clases
table.classList = 'uk-table uk-table-justify uk-table-divider';
//elemento caption para titulo
let caption = document.createElement('caption');
caption.innerText = 'Floristeria';

//elemento cabezera de la tabla
let thead = document.createElement('thead');
//creamos fila de la cabezera
let trHead = document.createElement('tr');
//creamos columnas de las cabezeras
let thNombre = document.createElement('th');
let thUbicacion = document.createElement('th');
let thEjemplares = document.createElement('th');
let thFlor = document.createElement('th');
//agregamos texto a las cabezeras
thNombre.innerText ='Nombre';
thUbicacion.innerText = 'Ubicacion';
thEjemplares.innerText = 'Ejemplares'; 
thFlor.innerText = 'Flor';
//creamos el cuerpo de la tabla
let tbody = document.createElement('tbody');
tbody.setAttribute('id','contendorFlores');

//agregamos los elementos a la tabla
trHead.appendChild(thNombre);
trHead.appendChild(thUbicacion);
trHead.appendChild(thEjemplares);
trHead.appendChild(thFlor);
thead.appendChild(trHead);
table.appendChild(caption);
table.appendChild(thead);
table.appendChild(tbody);
//agregamos tabla al contendor
contendor.appendChild(table);

//agregamos botones a su contenedor
document.getElementById('botones').appendChild(btn_GenerarPlanta);
document.getElementById('botones').appendChild(btn_BorrarFila);
document.getElementById('contar').appendChild(btn_contador);
//https://paisajismodigital.com/blog/wp-content/uploads/2019/10/flores-nacionales-de-europa-segunda-parte.jpg
//listener botones
btn_GenerarPlanta.addEventListener('click', event =>{
    let nombre = prompt('Introduce el Nombre de la plata');
    let ubicacion = prompt('Introduce La Ubicacion (Numero de planta 0-9)');
    if(isNaN(ubicacion)){
        ubicacion = prompt('Introduce La Ubicacion (Numero de planta 0-9)');
    }
    let ejemplares = prompt('Introduce El numero de Ejemplares ');
    if(isNaN(ejemplares)){
        ejemplares = prompt('Introduce El numero de Ejemplares ');
    }
    let flor = prompt('url de la imagen de la flor'); 
    //Validacion de datos
    //console.log({nombre,ubicacion,ejemplares,flor});
    let trBody = document.createElement('tr');

    let tdNombre = document.createElement('td');
    let tdubicacion = document.createElement('td');
    let tdEjemplares = document.createElement('td');
    let tdFlor = document.createElement('td');
    //imagen de la flor
    let img = document.createElement('img');
    img.setAttribute('src',flor);
    img.setAttribute('width','60');
    img.setAttribute('height','60');
    img.classList = 'uk-preserve-width uk-border-circle';
    //asignamos el texto del pronpt en las columanas de las tablas
    tdNombre.innerText = nombre;
    tdubicacion.innerText = ubicacion;
    tdEjemplares.innerText = ejemplares;
    tdFlor.appendChild(img);
    //agregamos columnas a su fila
    trBody.appendChild(tdNombre);
    trBody.appendChild(tdubicacion);
    trBody.appendChild(tdEjemplares);
    trBody.appendChild(tdFlor);

    //agregamos las filas al tbody
    tbody.appendChild(trBody);
});
//listne para borrar fila
btn_BorrarFila.addEventListener('click', event => {
    console.log('click')
    //obtenemos el elemento tr
    tr = document.getElementById('contendorFlores');
    console.log(tr);
    //si no tiene hijos manda error;
    if(tr.childNodes.length === 0 ){
        alert('La tabla esta vacia');
    }
    //elimina el utlimo hijo
    tr.lastChild.remove();
});
//listener contador de elementos
btn_contador.addEventListener('click', event =>{
    let items = document.getElementById('contendorFlores').childNodes.length;
    document.getElementById('contador').innerText = items;
});
////////////////////////////////EX4 END//////////////////////////////////////////////