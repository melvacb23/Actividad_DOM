// Obtenemos el div original
const divOriginal = document.getElementById("original");

// Creamos el nuevo div
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "En el DOM, todos los elementos HTML se definen como objetos. div";
nuevoDiv.style.backgroundColor = "#d5f5e3";
nuevoDiv.style.padding = "10px";
nuevoDiv.style.border = "2px solid #27ae60";
nuevoDiv.style.fontWeight = "bold";

// Botón para ejecutar el reemplazo
const btnReemplazar = document.getElementById("btnReemplazar");

btnReemplazar.addEventListener("click", () => {
  // Usamos parentNode.replaceChild
  divOriginal.parentNode.replaceChild(nuevoDiv, divOriginal);

  // Confirmamos en consola
  console.log("✅ El div original fue reemplazado por el nuevo div.");
});