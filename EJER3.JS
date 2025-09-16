// Obtenemos la lista por id
const lista = document.getElementById('lista');

// Obtenemos los botones
const btnAgregar = document.getElementById('btnAgregar');
const btnEliminar = document.getElementById('btnEliminar');

// Contador para que los elementos tengan número consecutivo
let contador = 4;

// Evento para agregar un nuevo <li>
btnAgregar.addEventListener('click', () => {
  const nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = `Elemento ${contador}`;
  lista.appendChild(nuevoElemento);
  contador++;
});

// Evento para eliminar el último <li>
btnEliminar.addEventListener('click', () => {
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
    contador--;
  }
});