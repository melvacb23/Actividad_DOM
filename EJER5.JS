// Seleccionamos los botones
const clickMeBtn = document.getElementById("clickMe");
const removeEventBtn = document.getElementById("removeEvent");

// Definimos la función que muestra el alert
function mostrarAlerta() {
  alert("¡Botón clickeado!");
}

// Agregamos el evento al primer botón
clickMeBtn.addEventListener("click", mostrarAlerta);

// Evento para eliminar el evento del primer botón
removeEventBtn.addEventListener("click", () => {
  clickMeBtn.removeEventListener("click", mostrarAlerta);
  console.log("✅ Evento eliminado: ahora el botón 'Haz clic aquí' ya no funciona.");
  alert("Evento eliminado. Ahora el botón ya no mostrará el alert.");
});