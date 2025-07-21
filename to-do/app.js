
let lista = document.getElementById('lista');
let nuevaTarea = document.getElementById('nuevaTarea');
nuevaTarea.addEventListener('keyup', (e) => {

    if (e.key === 'Enter') {
        if(nuevaTarea.value === ''){
            return;
        }
        
        let nuevoLi = document.createElement('li');
        nuevoLi.classList.add('elementoLista');

        let nuevaLinea = document.createElement('hr');
        nuevaLinea.classList.add('elementoLinea');

        let divTarea = document.createElement('div');
        divTarea.classList.add('divTarea');

        let divTexto = document.createElement('div');
        divTexto.classList.add('divtexto');

        let spanCirculo = document.createElement('span');
        spanCirculo.classList.add('circulo');

        let spanTexto = document.createElement('span');
        spanTexto.classList.add('txtTarea');
        spanTexto.textContent = nuevaTarea.value;

        let divIconos = document.createElement('div');
        divIconos.classList.add('iconos');

        let iTrash = document.createElement('i');
        iTrash.classList.add('fa-trash-can');
        iTrash.classList.add('fa-solid');

        let iEdit = document.createElement('i');
        iEdit.classList.add('fa-pencil');
        iEdit.classList.add('fa-solid');

        divTarea.appendChild(divTexto);
        divTarea.appendChild(divIconos);

        divTexto.appendChild(spanCirculo);
        divTexto.appendChild(spanTexto);

        divIconos.appendChild(iTrash);
        divIconos.appendChild(iEdit);

        nuevoLi.appendChild(divTarea);
        nuevoLi.appendChild(nuevaLinea);

        document.querySelector('.listaTareas').appendChild(nuevoLi);

        nuevaTarea.value = '';   

    };
});

// elemento padre ul .listaTareas
let listaTareas = document.querySelector('.listaTareas');

listaTareas.addEventListener('click', (event) => {
    if(event.target.classList.contains('circulo')){
        event.target.classList.toggle('completo');


        let txtTarea = event.target.nextElementSibling;
        if(txtTarea && txtTarea.classList.contains('txtTarea')){
            txtTarea.classList.toggle('completo');
        }
    }
})



 
