
let lista = document.getElementById('lista');
let nuevaTarea = document.getElementById('nuevaTarea');
let tareas = [];

nuevaTarea.addEventListener('keyup', (e) => {

    if (e.key === 'Enter') {
        if(nuevaTarea.value === ''){
            return;
        }

    let texto = nuevaTarea.value;
    tareas.push(texto);
    localStorage.setItem("tareas", JSON.stringify(tareas));

        
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

//Leer las tareas desde localStorage al cargar la página,
// y volver a renderizarlas en el HTML.
window.addEventListener('DOMContentLoaded', () => {
    //leer localStorage
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));

    if (tareasGuardadas && Array.isArray(tareasGuardadas)) {
        tareas = tareasGuardadas;

        //recontruir HTML
        tareas.forEach(tarea => {

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
            spanTexto.textContent = tarea;

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
            
        });
    }

});

// elemento padre ul .listaTareas
let listaTareas = document.querySelector('.listaTareas');

listaTareas.addEventListener('click', (event) => {

    //tachar + verde al click en circulo
    if(event.target.classList.contains('circulo')){
        event.target.classList.toggle('completo');

        let txtTarea = event.target.nextElementSibling;
        if(txtTarea && txtTarea.classList.contains('txtTarea')){
            txtTarea.classList.toggle('completo');
        }
    }

    //tachar + verde al click en tarea
    if(event.target.classList.contains('txtTarea')){
        event.target.classList.toggle('completo');

        let circulo = event.target.previousElementSibling;
        if(circulo && circulo.classList.contains('circulo')){
            circulo.classList.toggle('completo');
        }
    }

    //eliminar
    if(event.target.classList.contains('fa-trash-can')){
        let li = event.target.closest('li');
        if (li) {
            let tx = li.querySelector('.txtTarea').textContent;

            //eliminar 1 tarea
/*el array*/tareas = tareas.filter(t => t !== tx);

            //actualizar storage
            localStorage.setItem('tareas', JSON.stringify(tareas));

            li.remove();    
        }
    }

    //editar
    if(event.target.classList.contains('fa-pencil')){
        let divTarea = event.target.closest('.divTarea');
        let span = divTarea.querySelector('.txtTarea');

        if(span){
            let tareaOriginal = span.textContent;

            let nuevoInput = document.createElement('input');
            nuevoInput.type = 'text';
            nuevoInput.value = tareaOriginal;
            nuevoInput.classList.add('txtTarea');
            span.replaceWith(nuevoInput);

            nuevoInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter'){
                    let textoNuevo = nuevoInput.value.trim();

                    if(textoNuevo !== ''){
                        let spanTexto = document.createElement('span');
                        spanTexto.classList.add('txtTarea');
                        spanTexto.textContent =  textoNuevo;

                        let indice = tareas.indexOf(tareaOriginal);
                        if(indice !== -1){
                            tareas[indice] = textoNuevo;

                            localStorage.setItem('tareas', JSON.stringify(tareas));

                        }

                        nuevoInput.replaceWith(spanTexto);

                    }



                    //reemplazar en el array
   		            tareas = tareas.filter(t => t == spanTexto);

                    //Guardar nuevamente en localStorage
                    localStorage.setItem('tareas', JSON.stringify(tareas));


                    nuevoInput.replaceWith(spanTexto);
                }
            });
        }
    }
});



 
