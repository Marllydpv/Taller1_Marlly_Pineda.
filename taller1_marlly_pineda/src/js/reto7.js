const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const numDocumento = document.getElementById("num_documento").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = new Date(document.getElementById("fecha_nacimiento").value);
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const comprobarPassword = document.getElementById("comprobar_password").value;
  const terminos = document.getElementById("terminos");

  if (numDocumento.length < 5) {
    alert("El número de documento debe tener al menos 5 caracteres.");
    return false;
  }

  if (!nombre.match(/^[a-zA-Z0-9]+$/)) {
    alert("El nombre solo debe contener caracteres alfanuméricos.");
    return false;
  }

  if (!apellido.match(/^[a-zA-Z0-9]+$/)) {
    alert("El apellido solo debe contener caracteres alfanuméricos.");
    return false;
  }

  const fechaMinima = new Date("2002-01-01");
  if (fechaNacimiento < fechaMinima) {
    alert("Debe ser mayor de 18 años para registrarse.");
    return false;
  }

  if (!correo.match(/.+@misena\.edu\.co/)) {
    alert("El correo electrónico debe ser de dominio @misena.edu.co.");
    return false;
  }

  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}$/)) {
    alert("El password debe incluir al menos una letra mayúscula, un número, una letra minúscula, un carácter y tener una longitud mínima de 10 caracteres.");
    return false;
  }

  if (password !== comprobarPassword) {
    alert("Los passwords no coinciden.");
    return false;
  }

  if (!terminos.checked) {
    alert("Debe aceptar los Términos de uso para registrarse.");
    return false;
  }

  // Si todos los campos son válidos, enviar el formulario
  formulario.submit();
});