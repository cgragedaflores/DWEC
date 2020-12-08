var cadena = prompt("Ingresa un texto").toLocaleLowerCase();
let array = cadena.split('');
document.write("<h3>Numero de palabras : "+array.length+"</h3>"+
"\n<h3>Primera Palabra : "+array[0]+"</h3>"+"\n<h3>Ultima Palabra : "+
array[array.length-1]+"</h3>"+"\n<h3>Palabras Ordenadas A-Z : "+
array.sort()+"</h3>"+"\n<h3>Plabras Ordenadas Z - A : "+array.sort().reverse()+"</h3>");