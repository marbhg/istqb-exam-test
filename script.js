function mostrarDatosdelFormulario() {
  let nombre = document.getElementById("nombre").value;

  let apellido = document.getElementById("apellido").value;
  
//Mostrar nombre y apellido en mayuscula.
  document.getElementById("bienvenido").textContent = " Bienvenido " + nombre.toUpperCase() + " " + apellido.toUpperCase();

  //Ocultas el formulario despues de enviarlo 
  document.getElementById("formularioestudiante").style.display = "none"; 


}