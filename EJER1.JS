// Seleccionar el div por id
const infoDiv = document.getElementById('info');
console.log("Contenido de #info:", infoDiv.textContent);

// Modificar el texto del detalle
const detalle = document.querySelector('.detalle');
detalle.textContent = 'Este es un detalle modificado';

// Seleccionar todos los párrafos y darles estilo
const parrafos = document.querySelectorAll('p');
parrafos.forEach(p => {
  p.style.backgroundColor = 'lightblue';
});

// Modificar el enlace para que funcione correctamente
const enlace = document.getElementById('enlace');
enlace.href = "https://www.w3schools.com/js/";
enlace.target = "_blank"; // abrir en nueva pestaña
enlace.textContent = "Ir a W3Schools (JavaScript)";