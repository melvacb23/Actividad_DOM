// Seleccionamos el título por id
const titulo = document.getElementById('titulo');

// Seleccionamos el botón
const boton = document.getElementById('btnCambiar');

// Seleccionamos todos los párrafos
const parrafos = document.querySelectorAll('p');

// Agregamos un evento al botón
boton.addEventListener('click', () => {
  // Cambiamos estilos del título
  titulo.style.color = 'red';
  titulo.style.fontSize = '30px';
  titulo.style.backgroundColor = 'yellow';
  titulo.textContent = "¡El título ha cambiado con DOM!";

  // Cambiamos estilos y texto de los párrafos
  parrafos.forEach((p, index) => {
    p.style.color = 'blue';
    p.style.fontStyle = 'italic';
    p.style.backgroundColor = 'lightgray';
    p.textContent = `Párrafo ${index + 1} modificado con DOM`;
  });
});