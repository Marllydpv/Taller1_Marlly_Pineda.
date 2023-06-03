function validarFormulario() {
    // Validar campo Tipo de documento
    var tipoDocumento = document.getElementById("tipo_documento").value;
    if (tipoDocumento === "") {
      alert("Por favor, selecciona un tipo de documento.");
      return false;
    }
  
    // Validar campo No. Documento
    var numDocumento = document.getElementById("num_documento").value;
    if (numDocumento === "") {
      alert("Por favor, ingresa un número de documento.");
      return false;
    }
    if (!/^\d+$/.test(numDocumento)) {
      alert("El número de documento solo puede contener dígitos.");
      return false;
    }
    if (numDocumento.length < 5) {
      alert("El número de documento debe tener al menos 5 caracteres.");
      return false;
    }
  
    // Validar campo Nombre
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(nombre)) {
      alert("El nombre solo puede contener caracteres alfanuméricos.");
      return false;
    }
  
    // Validar campo Apellido
    var apellido = document.getElementById("apellido").value;
    if (apellido === "") {
      alert("Por favor, ingresa tu apellido.");
      return false;
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(apellido)) {
      alert("El apellido solo puede contener caracteres alfanuméricos.");
      return false;
    }
  
    // Validar campo Fecha de nacimiento
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var anioLimite = new Date("2002-01-01");
    if (fechaNacimiento === "" || fechaNacimientoDate > anioLimite) {
      alert("Debes ser mayor de 18 años para registrarte.");
      return false;
    }
  
    // Validar campo Correo electrónico
    var correoElectronico = document.getElementById("correo_electronico").value;
    if (correoElectronico === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      return false;
    }
    if (!/\b[A-Za-z0-9._%+-]+@misena\.edu\.co\b/.test(correoElectronico)) {
      alert("El correo electrónico debe tener el dominio @misena.edu.co.");
      return false;
    }
  
    // Validar campo Contraseña
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmar_contrasena").value;
    if (contrasena === "" || confirmarContrasena === "") {
      alert("Por favor, ingresa una contraseña y confírmala.");
      return false;
    }
    if (contrasena !== confirmarContrasena) {
      alert("La contraseña y su confirmación no coinciden.");
      return false;
    }
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/.test(contrasena)) {
      alert("La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial")
  
    }
}

    
  
