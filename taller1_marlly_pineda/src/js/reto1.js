function realizarOperacion() {
  var palabra = document.getElementById('palabra').value;
  var opcion = document.getElementById('opcion').value;

  var resultado;
  if (opcion === 'longitud') {
    resultado = 'Longitud de la palabra: ' + palabra.length;
  } else if (opcion === 'mayusculas') {
    resultado = 'Palabra en mayúsculas: ' + palabra.toUpperCase();
  } else if (opcion === 'minusculas') {
    resultado = 'Palabra en minúsculas: ' + palabra.toLowerCase();
  } else if (opcion === 'primer_caracter') {
    resultado = 'Primer carácter: ' + palabra.charAt(0);
  } else {
    resultado = 'Opción inválida';
  }

  alert(resultado);
}




