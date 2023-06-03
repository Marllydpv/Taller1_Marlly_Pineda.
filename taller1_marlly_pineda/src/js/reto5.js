// Variables globales
var selectedFigure = "";
var modal = document.getElementById("modal");
var modalTitle = document.getElementById("modal-title");
var modalInputs = document.getElementById("modal-inputs");
var modalResult = document.getElementById("modal-result");

// Función para abrir la ventana modal
function abrirModal(figure) {
  selectedFigure = figure;

  // Actualizar el título de la ventana modal
  modalTitle.innerText = "Calcular " + selectedFigure;

  // Limpiar el contenido previo de la ventana modal
  modalInputs.innerHTML = "";
  modalResult.innerText = "";

  // Generar los campos necesarios según la figura seleccionada
  switch (selectedFigure) {
    case "circulo":
      modalInputs.innerHTML = `
        <label for="radio">Radio:</label>
        <input type="number" id="radio" placeholder="Ingrese el radio" required>
      `;
      break;
    case "triangulo":
      modalInputs.innerHTML = `
        <label for="lado1">Lado 1:</label>
        <input type="number" id="lado1" placeholder="Ingrese el lado 1" required>
        <label for="lado2">Lado 2:</label>
        <input type="number" id="lado2" placeholder="Ingrese el lado 2" required>
        <label for="lado3">Lado 3:</label>
        <input type="number" id="lado3" placeholder="Ingrese el lado 3" required>
      `;
      break;
    case "rectangulo":
      modalInputs.innerHTML = `
        <label for="base">Base:</label>
        <input type="number" id="base" placeholder="Ingrese la base" required>
        <label for="altura">Altura:</label>
        <input type="number" id="altura" placeholder="Ingrese la altura" required>
      `;
      break;
    case "cuadrado":
      modalInputs.innerHTML = `
        <label for="lado">Lado:</label>
        <input type="number" id="lado" placeholder="Ingrese el lado" required>
      `;
      break;
  }

  // Mostrar la ventana modal
  modal.style.display = "block";
}

// Función para cerrar la ventana modal
function cerrarModal() {
  modal.style.display = "none";
}

// Función para calcular el perímetro o área según la figura seleccionada
function calcular() {
  var resultado = 0;

  switch (selectedFigure) {
    case "circulo":
      var radio = parseFloat(document.getElementById("radio").value);
      resultado = 2 * Math.PI * radio;
      break;
    case "triangulo":
      var lado1 = parseFloat(document.getElementById("lado1").value);
      var lado2 = parseFloat(document.getElementById("lado2").value);
      var lado3 = parseFloat(document.getElementById("lado3").value);
      resultado = lado1 + lado2 + lado3;
      break;
    case "rectangulo":
      var base = parseFloat(document.getElementById("base").value);
      var altura = parseFloat(document.getElementById("altura").value);
      resultado = 2 * (base + altura);
      break;
  case "cuadrado":
      var lado = parseFloat(document.getElementById("lado").value);
      resultado = 4 * (lado);
      break;
    }
}
