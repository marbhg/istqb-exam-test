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
//Pregunta 1
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

  //Pregunta 2
  function calcularPuntuacionPregunta2() {
    let respuesta = document.getElementById("respuesta2").value; // Accede al valor del botón seleccionado
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
    let scoreDisplay = document.getElementById("grademessage2");
    scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
  }

  //Pregunta 3 
  function calcularPuntuacionPregunta3() {
    let respuesta = document.getElementById("respuesta3").value; // Accede al valor del botón seleccionado
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
    let scoreDisplay = document.getElementById("grademessage3");
    scoreDisplay.textContent = `Tu puntuación para esta pregunta es: ${puntuacion}`;
  }
//Pregunta 4
function calcularPuntuacionPregunta4(){
let pregunta = document.getElelementById("respuesta4").value;
let puntuacion = 0;
let correcta = b;

//Calcular la puntuacion segun las reglas 
if (respuesta === correcta){
  puntuacion = 2; //Respuesta correcta  
} else if (respuesta === ""){
  puntuacion = 0; //Respuesta Vacia
}else {
  puntuacion = -1; //Respuesta incorrecta
}

//Pregunta 5










}