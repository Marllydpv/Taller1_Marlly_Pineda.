function comprobarRespuesta() {
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var actividad = document.getElementById('actividad').value;

  var respuestaCorrecta = 'Paula Romero Emprendimiento' ;
  var respuestaCorrecta = 'Tatiana Cabrera Java' ;
  var respuestaCorrecta = 'Jenifer Fajardo JavaScript' ;
  var respuestaCorrecta = 'Margarita Guarin Prototipado' ;
  var respuestaCorrecta = 'Lorena Medina Comunicacion' ;
  var respuestaCorrecta = 'Jonathan Espitia Basesdedatos' ;
  var respuestaCorrecta = 'Uldarico Andrade Python' ;

  var respuestaUsuario = nombre + ' ' + apellido + ' ' + actividad + ' '  ;

  if (respuestaUsuario === respuestaCorrecta) {
    alert('La respuesta es correcta');
  } else {
    alert('La respuesta es incorrecta');
  }
}

