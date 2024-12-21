
function mostrarDatosdelFormulario() {
  let nombre = document.getElementById("firstname").value;

  let apellido = document.getElementById("lastname").value;
  
//Mostrar nombre y apellido en mayuscula.
  document.getElementById("welcome").textContent = " Welcome " + nombre.toUpperCase() + " " + apellido.toUpperCase();

  //Ocultas el formulario despues de enviarlo 
  document.getElementById("formularioestudiante").style.display = "none"; 

  //Mostrar datos de examen STQL
// Función para verificar la respuesta seleccionada
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

}.
 
