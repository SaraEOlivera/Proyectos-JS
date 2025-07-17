
let lista = document.getElementById('lista');
let nuevaTarea = document.getElementById('nuevaTarea');
nuevaTarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        let nuevoLi = document.createElement('li');
        let nuevaLinea = document.createElement('hr');

        nuevoLi.classList.add('elementoLista');
        nuevaLinea.classList.add('elementoLinea');

        nuevoLi.innerText = nuevaTarea.value;

        document.querySelector('.listaTareas').appendChild(nuevoLi);
        document.querySelector('.listaTareas').appendChild(nuevaLinea);
        nuevaTarea.value = '';   
    }
})