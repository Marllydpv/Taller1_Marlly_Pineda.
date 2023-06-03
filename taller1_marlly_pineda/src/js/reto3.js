function determinarTipoTriangulo() {
  var lado1 = parseFloat(document.getElementById('lado1').value);
  var lado2 = parseFloat(document.getElementById('lado2').value);
  var lado3 = parseFloat(document.getElementById('lado3').value);

  var tipoTriangulo;

  if (lado1 === lado2 && lado2 === lado3) {
    tipoTriangulo = 'Equilátero';
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    tipoTriangulo = 'Isósceles';
  } else {
    tipoTriangulo = 'Escaleno';
  }

  alert('El triángulo es de tipo ' + tipoTriangulo);
}
