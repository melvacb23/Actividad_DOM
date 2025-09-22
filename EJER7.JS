// Seleccionamos todos los botones
const botones = document.querySelectorAll(".menu button");

// Recorremos cada botón y le agregamos un evento
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    // Obtenemos el enlace del atributo data-url
    const url = boton.getAttribute("data-url");
    // Abrimos el archivo en una nueva pestaña
    window.open(url, "_blank");
  });
});