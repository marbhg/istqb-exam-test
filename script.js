function enviar() {
  // Obtener valores de los inputs
  let name = document.getElementById("firstname").value.trim();
  let lastname = document.getElementById("lastname").value.trim();

  // Mostrar mensaje de bienvenida en mayúsculas
  document.getElementById("datosdelformulario").textContent =
    "WELCOME " + name.toUpperCase() + " " + lastname.toUpperCase() + "!";
  // Ocultar el formulario
  document.getElementById("signupform").style.display = "none";

  //Mostrar datos de preguntas 
  document.getElementById("questionsection").style.display = "block";
}

function validarFormulario() {
  let formulario = document.getElementById("signupform");

  if (formulario.checkValidity()) {
    enviar()
  }
  else {
    document.getElementById("datosdelformulario").textContent = "Invalid form";
  }
}
//Calculamos la puntuacion final de todo el examen
function evaluarTodo() {
  let puntuacionFinal = 0;
  for (let numeroPregunta = 1; numeroPregunta <= 10; numeroPregunta++) {
    puntuacionFinal += calcularPuntuacionPregunta(numeroPregunta);
  }

  if (puntuacionFinal < 0) {
    puntuacionFinal = 0;
  }

  document.getElementById('gradeexammessage').textContent = "La puntuacion final es " + puntuacionFinal;
  document.getElementById('gradeexammessage').style.color = colorResultado(puntuacionFinal)
}

//Hacemos una funcion para calcular todas las preguntas. 
function calcularPuntuacionPregunta(numeroPregunta) {
  let respuesta = document.getElementById("respuesta" + numeroPregunta).value; // Accede al valor del botón seleccionado
  let puntuacion = 0;
  let correcta = ["c", "a", "b", "a", "a", "c", "b", "a", "a", "c"];

  // Calcular la puntuación según las reglas
  if (respuesta === correcta[numeroPregunta - 1]) {
    puntuacion = 2; // Respuesta correcta
  } else if (respuesta === "") {
    puntuacion = 0; // Respuesta vacia
  } else {
    puntuacion = -1; // Incorrecta
  }

  document.getElementById("grademessage" + numeroPregunta).textContent = "El resultado de la pregunta es " + puntuacion;
  return puntuacion;

}


function colorResultado(correcta) {
  // devolvemos el color que debe mostrar segun la puntuacion obtenida
  let color = 'green';
  if (correcta > 12) {
    color = 'green';
  } else {
    color = 'red';
  }
  return color;
}
