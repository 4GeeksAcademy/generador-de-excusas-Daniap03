import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let persona =["Mi madre", "Mi padre", "Mi hermano", "Mi perro"];
  let accion = [ "estropeó", "rompió","tiró", "se comió"];
  let que = ["mi ordenador,", "mi pantalla,", "mi telefono,", "mis deberes,"];
  let cuando = ["mientras trabajaba.", "por no poner el lavavajillas.", "a la piscina.", "por la noche."];
  console.log("Hello Rigo from the console!");

  let personaSeleccionada = persona[Math.floor(Math.random() * persona.length)];
  let accionSeleccionada = accion[Math.floor(Math.random() * accion.length)];
  let queSeleccionado = que[Math.floor(Math.random() * que.length)];
  let cuandoSeleccionado = cuando[Math.floor(Math.random() * cuando.length)];
  let excusa = `${personaSeleccionada} ${accionSeleccionada} ${queSeleccionado} ${cuandoSeleccionado}`;
  
  document.getElementById("excuse").innerHTML = excusa
}
