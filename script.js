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

if (formulario.checkValidity()){
  enviar()
}
  else {
    document.getElementById("datosdelformulario").textContent = " Formulario incorrecto ";
  }
}
//Calculamos la puntuacion final de todo el examen
function evaluarTodo(){
  let puntuacionFinal1 = 0;
  for(let numeroPregunta = 1; numeroPregunta10; numeroPregunta++){
  puntuacionFinal += calcularPuntuacionPregunta(numeroPregunta);
  }
  document.getElementById('resultado'.textContent = "La puntuacion final es " + puntuacionFinal);
}


//Pregunta 1
  function calcularPuntuacionPregunta(numeroPregunta) {
    let respuesta = document.getElementById("respuesta " + numeroPregunta).value; // Accede al valor del botón seleccionado
    let puntuacion = 0;
    let correcta = ["c","a","b","a","a","c","b","a","a","c"];

    // Calcular la puntuación según las reglas
    if (respuesta === correcta) {
      puntuacion = 2; // Respuesta correcta
    } else if (respuesta === "") {
      puntuacion = 0; // Respuesta vacia
    } else {
      puntuacion = -1; // Incorrecta
    }

    // Mostrar la puntuación en el párrafo correspondiente
    let scoreDisplay = document.getElementById("grademessage " + numeroPregunta);
    scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
    return puntuacion;  
  }


  //Pregunta 2
  function calcularPuntuacionPregunta() {
    let respuesta = document.getElementById("respuesta").value; // Accede al valor del botón seleccionado
    let puntuacion = 0;
    let correcta = "a";

    // Calcular la puntuación según las reglas
    if (respuesta === correcta) {
      puntuacion = 2; // Respuesta correcta
    } else if (respuesta === "") {
      puntuacion = 0; // Respuesta vacia
    } else {
      puntuacion = -1; // Incorrecta
    }

    // Mostrar la puntuación en el párrafo correspondiente
    let scoreDisplay = document.getElementById("grademessage");
    scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
  }

  //Pregunta 3 
  function calcularPuntuacionPregunta() {
    let respuesta = document.getElementById("respuesta").value; // Accede al valor del botón seleccionado
    let puntuacion = 0;
    let correcta = "b";

    // Calcular la puntuación según las reglas
    if (respuesta === correcta) {
      puntuacion = 2; // Respuesta correcta
    } else if (respuesta === "") {
      puntuacion = 0; // Respuesta vacia
    } else {
      puntuacion = -1; // Incorrecta
    }

    // Mostrar la puntuación en el párrafo correspondiente
    let scoreDisplay = document.getElementById("grademessage");
    scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
  }
//Pregunta 4
function calcularPuntuacionPregunta() {
  let respuesta = document.getElementById("respuesta").value; // Accede al valor del botón seleccionado
  let puntuacion = 0;
  let correcta = "b";

  // Calcular la puntuación según las reglas
  if (respuesta === correcta) {
    puntuacion = 2; // Respuesta correcta
  } else if (respuesta === "") {
    puntuacion = 0; // Respuesta vacia
  } else {
    puntuacion = -1; // Incorrecta
  }

  // Mostrar la puntuación en el párrafo correspondiente
  let scoreDisplay = document.getElementById("grademessage");
  scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
}

//Pregunta 5
function calcularPuntuacionPregunta() {
  let respuesta = document.getElementById("respuesta").value; // Accede al valor del botón seleccionado
  let puntuacion = 0;
  let correcta = "b";

  // Calcular la puntuación según las reglas
  if (respuesta === correcta) {
    puntuacion = 2; // Respuesta correcta
  } else if (respuesta === "") {
    puntuacion = 0; // Respuesta vacia
  } else {
    puntuacion = -1; // Incorrecta
  }

  // Mostrar la puntuación en el párrafo correspondiente
  let scoreDisplay = document.getElementById("grademessage");
  scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
}

//Pregunta 6
function calcularPuntuacionPregunta() {
  let respuesta = document.getElementById("respuesta").value; // Accede al valor del botón seleccionado
  let puntuacion = 0;
  let correcta = "c";

  // Calcular la puntuación según las reglas
  if (respuesta === correcta) {
    puntuacion = 2; // Respuesta correcta
  } else if (respuesta === "") {
    puntuacion = 0; // Respuesta vacia
  } else {
    puntuacion = -1; // Incorrecta
  }

  // Mostrar la puntuación en el párrafo correspondiente
  let scoreDisplay = document.getElementById("grademessage");
  scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
}

//Pregunta 7
function calcularPuntuacionPregunta() {
  let respuesta = document.getElementById("respuesta").value; // Accede al valor del botón seleccionado
  let puntuacion = 0;
  let correcta = "a";

  // Calcular la puntuación según las reglas
  if (respuesta === correcta) {
    puntuacion = 2; // Respuesta correcta
  } else if (respuesta === "") {
    puntuacion = 0; // Respuesta vacia
  } else {
    puntuacion = -1; // Incorrecta
  }

  // Mostrar la puntuación en el párrafo correspondiente
  let scoreDisplay = document.getElementById("grademessage");
  scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
}

//Pregunta 8
function calcularPuntuacionPregunta() {
  let respuesta = document.getElementById("respuesta").value; // Accede al valor del botón seleccionado
  let puntuacion = 0;
  let correcta = "c";

  // Calcular la puntuación según las reglas
  if (respuesta === correcta) {
    puntuacion = 2; // Respuesta correcta
  } else if (respuesta === "") {
    puntuacion = 0; // Respuesta vacia
  } else {
    puntuacion = -1; // Incorrecta
  }

  // Mostrar la puntuación en el párrafo correspondiente
  let scoreDisplay = document.getElementById("grademessage");
  scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
}

//Pregunta 9
function calcularPuntuacionPregunta() {
  let respuesta = document.getElementById("respuesta").value; // Accede al valor del botón seleccionado
  let puntuacion = 0;
  let correcta = "c";

  // Calcular la puntuación según las reglas
  if (respuesta === correcta) {
    puntuacion = 2; // Respuesta correcta
  } else if (respuesta === "") {
    puntuacion = 0; // Respuesta vacia
  } else {
    puntuacion = -1; // Incorrecta
  }

  // Mostrar la puntuación en el párrafo correspondiente
  let scoreDisplay = document.getElementById("grademessage");
  scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
}

//Pregunta 10
function calcularPuntuacionPregunta() {
  let respuesta = document.getElementById("respuesta").value; // Accede al valor del botón seleccionado
  let puntuacion = 0;
  let correcta = "c";

  // Calcular la puntuación según las reglas
  if (respuesta === correcta) {
    puntuacion = 2; // Respuesta correcta
  } else if (respuesta === "") {
    puntuacion = 0; // Respuesta vacia
  } else {
    puntuacion = -1; // Incorrecta
  }

  // Mostrar la puntuación en el párrafo correspondiente
  let scoreDisplay = document.getElementById("grademessage");
  scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
}







