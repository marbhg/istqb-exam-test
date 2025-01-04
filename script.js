function enviar() {
  // Obtener valores de los inputs
  let name = document.getElementById("firstname").value.trim();
  let lastname = document.getElementById("lastname").value.trim();

  // Validar que no estén vacíos
  if (name === "" || lastname === "") {
    alert("Por favor, rellena todos los campos correctamente.");
    return;
  }
  // Mostrar mensaje de bienvenida en mayúsculas
  document.getElementById("datosdelformulario").textContent =
    "WELCOME " + name.toUpperCase() + " " + lastname.toUpperCase() + "!";
  // Ocultar el formulario
  document.getElementById("signupform").style.display = "none";
}

//Ocultar las preguntas una vez se rellene el formulario
document.getElementById("questionsection").style.display = "none";


//Mostrar datos del formulario
document.getElementById("questionsection").style.display = "block";

// Función para verificar la respuesta seleccionada QUESTION1
function evaluar (question1) {
  let option1 = document.getElementById("forA").value;
  let option2 = document.getElementById("forB").value;
  let option3 = document.getElementById("forC").value;

  //Funcion para obtener la respuesta correcta
function respuestaCorrecta (forA, forB, forC){
  
}


  const messageElement = document.getElementById(`grademessage${question1}`);
  const correctAnswer = "c"; // La respuesta correcta para esta pregunta
  const selectedOption = document.querySelector(`.question${question1}} input[name="answer"]:checked`);



 
  function calcularPuntuacionPregunta1() {
    // Obtener el valor de la respuesta seleccionada
    const form = document.getElementById("question1-form");
    const respuesta = form.answer1.value; // Accede al valor del botón seleccionado
    let puntuacion = 0;

    // Calcular la puntuación según las reglas
    if (respuesta === "correct") {
      puntuacion = 2; // Respuesta correcta
    } else if (respuesta === "incorrect") {
      puntuacion = -1; // Respuesta incorrecta
    } else {
      puntuacion = 0; // No respondió
    }

    // Mostrar la puntuación en el párrafo correspondiente
    const scoreDisplay = document.getElementById("score1");
    scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
  }


}

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
}


if (!question1) {
  messageElement.textContent = "Please select an answer.";
  messageElement.style.color = "red";
} else if (selectedOption.value === correctAnswer) {
  messageElement.textContent = "Correct! This statement is achievable.";
  messageElement.style.color = "green";
} else {
  messageElement.textContent = "Incorrect. Please try again.";
  messageElement.style.color = "red";