
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

        let spanCirculo = document.createElement('span');
        spanCirculo.classList.add('circulo');
        

        let spanTexto = document.createElement('span');
        spanTexto.classList.add('txtTarea');
        spanTexto.textContent = nuevaTarea.value;

        
        divTarea.appendChild(spanCirculo);
        divTarea.appendChild(spanTexto);

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



 
