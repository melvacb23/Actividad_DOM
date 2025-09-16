// Elementos principales
const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");

// Evento para agregar tarea
agregarBtn.addEventListener("click", () => {
  const texto = tareaInput.value.trim();

  if (texto === "") {
    alert("⚠️ Debes escribir una tarea");
    return;
  }

  // Crear contenedor de la tarea
  const tareaDiv = document.createElement("div");
  tareaDiv.classList.add("tarea");

  // Texto de la tarea
  const tareaTexto = document.createElement("span");
  tareaTexto.textContent = texto;

  // Botón de check
  const checkBtn = document.createElement("i");
  checkBtn.classList.add("fas", "fa-check-circle", "no-realizada");
  checkBtn.addEventListener("click", () => {
    if (checkBtn.classList.contains("no-realizada")) {
      checkBtn.classList.remove("no-realizada");
      checkBtn.classList.add("realizada");
    } else {
      checkBtn.classList.remove("realizada");
      checkBtn.classList.add("no-realizada");
    }
  });

  // Botón de eliminar
  const deleteBtn = document.createElement("i");
  deleteBtn.classList.add("fas", "fa-trash-alt", "eliminar");
  deleteBtn.addEventListener("click", () => {
    const confirmar = confirm("¿Seguro que deseas eliminar esta tarea?");
    if (confirmar) {
      listaTareas.removeChild(tareaDiv);
    }
  });

  // Agregar elementos al div de la tarea
  tareaDiv.appendChild(tareaTexto);
  tareaDiv.appendChild(checkBtn);
  tareaDiv.appendChild(deleteBtn);

  // Agregar la tarea a la lista
  listaTareas.appendChild(tareaDiv);

  // Limpiar input
  tareaInput.value = "";
});