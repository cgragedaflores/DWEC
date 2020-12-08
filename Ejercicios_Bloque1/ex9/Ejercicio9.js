let edad = prompt("Introduce una edad");
  switch (true) {
    case edad > 0  && edad <= 12:
      document.write("nen");
      break;
    case edad >= 13 && edad <= 26 :
      document.write("jove");
      break;
    case edad >= 27 && edad >= 60:
        document.write("Jubilat");
        break; 
    default:
      document.write("edad No valida");
      break;
  //   if (edad < 12) document.write("Nen"); //Escribe Nen si la edad es Menor que 12
  //   if (edad < 26 && edad > 13) document.write("Jove"); //Escribe Nen si la edad es Menor que 26 y Mayor que 13
  //   if (edad < 60 && edad > 26) document.write("Adult"); //Escribe Nen si la edad es Mayor que  60
  //   if (edad > 60) document.write("Jubilat");
}
