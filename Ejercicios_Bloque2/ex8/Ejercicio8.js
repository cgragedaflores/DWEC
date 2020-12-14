let palabra = prompt("Introduce tu palabra").toLocaleLowerCase();
let array = palabra.replaceAll(" ", "").split('').reverse();
let reverseString = array.join('');
console.log(reverseString);
console.log(palabra);
if (palabra ==  reverseString){
    alert("PALINDROMA");
}else{
    alert("No Palindroma");
}