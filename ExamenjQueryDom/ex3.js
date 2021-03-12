// Seleccioneu la secció (section) amb un identificador de container sense utilitzar querySelector.
let section = document.getElementById('container');
console.log(section);
console.log('elemento seleccionado' + section.innerHTML);
// Seleccioneu la secció (section) amb un identificador de container mitjançant querySelector.
let sectionQuerySelector = document.querySelector('#container');
console.log(sectionQuerySelector);
console.log('elemento seleccionado ' + sectionQuerySelector.innerHTML);
// Seleccioneu tots els elements de la llista amb una classe de second.
let lista = document.querySelector('.second');
console.log(lista);
console.log('elemento seleccionado ' + lista.innerHTML)
// Seleccioneu un element de llista amb una classe de third, però només l'element de la llista dins de l'etiqueta “ol”.
let listaOrdenada = document.querySelector('ol');
console.log(listaOrdenada);
console.log(listaOrdenada.querySelector('.third').innerText);
// Escriviu a la secció amb un identificador de contenidor el text "Hola!".

section.innerHTML += '\nHola!'

// Afegiu la classe “main” al div amb una classe de footer.
let footer = document.getElementsByClassName('footer');
console.log(footer);
footer[0].classList.add('main');
// Traieu la classe “main” del div amb una classe de footer.
footer[0].classList.remove('main');
// Creeu un element li nou.
let li  = document.createElement('li');
// Doneu al li el text "four".
li.innerText = 'four'
// Afegiu el li a l'element ul.
let ul = document.querySelectorAll('ul');
console.log(ul);
ul[0].appendChild(li);
// Passeu per totes les llistes de l'interior de l'etiqueta ol i doneu-los un color de fons de "verd".
let ol = document.querySelectorAll('ol');
console.log(ol);
ol.forEach(Element => {
    Element.style.background = 'green';
});
// Traieu el div amb una classe de footer.
footer[0].remove();