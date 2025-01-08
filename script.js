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
  function calcularPuntuacionPregunta1() {
    let respuesta = document.getElementById("respuesta1").value; // Accede al valor del botón seleccionado
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
    let scoreDisplay = document.getElementById("grademessage1");
    scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
  }

/*

// Función para reiniciar el mensaje de respuesta
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}

// Función para verificar la respuesta seleccionada QUESTION2
function checkAnswer(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  const correctAnswer = "a"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${questionNumber} input[name="answer"]:checked`);

  if (!selectedOption) {
    messageElement.textContent = "Please select an answer.";
    messageElement.style.color = "orange";
  } else if (selectedOption.value === correctAnswer) {
    messageElement.textContent = "Correct! This statement is achievable.";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect. Please try again.";
    messageElement.style.color = "red";
  }
}

// Función para reiniciar el mensaje de respuesta
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}

// Función para verificar la respuesta seleccionada QUESTION3
function checkAnswer(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  const correctAnswer = "b"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${questionNumber} input[name="answer"]:checked`);

  if (!selectedOption) {
    messageElement.textContent = "Please select an answer.";
    messageElement.style.color = "orange";
  } else if (selectedOption.value === correctAnswer) {
    messageElement.textContent = "Correct! This statement is achievable.";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect. Please try again.";
    messageElement.style.color = "red";
  }
}
// Función para reiniciar el mensaje de respuestA
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}
// Función para verificar la respuesta seleccionada QUESTION4
function checkAnswer(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  const correctAnswer = "b"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${questionNumber} input[name="answer"]:checked`);

  if (!selectedOption) {
    messageElement.textContent = "Please select an answer.";
    messageElement.style.color = "orange";
  } else if (selectedOption.value === correctAnswer) {
    messageElement.textContent = "Correct! This statement is achievable.";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect. Please try again.";
    messageElement.style.color = "red";
  }
}

// Función para reiniciar el mensaje de respuesta
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}

// Función para verificar la respuesta seleccionada QUESTION5
function checkAnswer(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  const correctAnswer = "b"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${questionNumber} input[name="answer"]:checked`);

  if (!selectedOption) {
    messageElement.textContent = "Please select an answer.";
    messageElement.style.color = "orange";
  } else if (selectedOption.value === correctAnswer) {
    messageElement.textContent = "Correct! This statement is achievable.";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect. Please try again.";
    messageElement.style.color = "red";
  }
}

// Función para reiniciar el mensaje de respuesta
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}
// Función para verificar la respuesta seleccionada QUESTION6
function checkAnswer(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  const correctAnswer = "a"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${questionNumber} input[name="answer"]:checked`);

  if (!selectedOption) {
    messageElement.textContent = "Please select an answer.";
    messageElement.style.color = "orange";
  } else if (selectedOption.value === correctAnswer) {
    messageElement.textContent = "Correct! This statement is achievable.";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect. Please try again.";
    messageElement.style.color = "red";
  }
}

// Función para reiniciar el mensaje de respuesta
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}
// Función para verificar la respuesta seleccionada QUESTION7
function checkAnswer(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  const correctAnswer = "a"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${questionNumber} input[name="answer"]:checked`);

  if (!selectedOption) {
    messageElement.textContent = "Please select an answer.";
    messageElement.style.color = "orange";
  } else if (selectedOption.value === correctAnswer) {
    messageElement.textContent = "Correct! This statement is achievable.";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect. Please try again.";
    messageElement.style.color = "red";
  }
}

// Función para reiniciar el mensaje de respuesta
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}

// Función para verificar la respuesta seleccionada QUESTION8
function checkAnswer(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  const correctAnswer = "c"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${questionNumber} input[name="answer"]:checked`);

  if (!selectedOption) {
    messageElement.textContent = "Please select an answer.";
    messageElement.style.color = "orange";
  } else if (selectedOption.value === correctAnswer) {
    messageElement.textContent = "Correct! This statement is achievable.";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect. Please try again.";
    messageElement.style.color = "red";
  }
}

// Función para reiniciar el mensaje de respuesta
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}

// Función para verificar la respuesta seleccionada QUESTION9
function checkAnswer(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  const correctAnswer = "a"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${questionNumber} input[name="answer"]:checked`);

  if (!selectedOption) {
    messageElement.textContent = "Please select an answer.";
    messageElement.style.color = "orange";
  } else if (selectedOption.value === correctAnswer) {
    messageElement.textContent = "Correct! This statement is achievable.";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect. Please try again.";
    messageElement.style.color = "red";
  }
}

// Función para reiniciar el mensaje de respuesta
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}

// Función para verificar la respuesta seleccionada QUESTION10
function checkAnswer(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  const correctAnswer = "c"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${questionNumber} input[name="answer"]:checked`);

  if (!selectedOption) {
    messageElement.textContent = "Please select an answer.";
    messageElement.style.color = "orange";
  } else if (selectedOption.value === correctAnswer) {
    messageElement.textContent = "Correct! This statement is achievable.";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect. Please try again.";
    messageElement.style.color = "red";
  }
}

// Función para reiniciar el mensaje de respuesta
function resetGradeMessage(questionNumber) {
  const messageElement = document.getElementById(`grademessage${questionNumber}`);
  messageElement.textContent = "";
}*/