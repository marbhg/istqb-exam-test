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

//Mostrar datos de examen STQL
// Función para verificar la respuesta seleccionada QUESTION1
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


