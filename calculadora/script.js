

// variables globales inicializadas para evitar undefined
let primerNumero = '';
let operador = '';
let esperarSegundoNumero = false;


// mostrar numeros y punto en pantalla
document.querySelectorAll('.nro').forEach(boton =>{
    boton.addEventListener('click', () => {
        const pantalla = document.getElementById('resultado');
        const valor = boton.innerText;

        if(valor === "." && pantalla.innerText.includes(".")){ //evita que se repita el "."
            return;
        }
        if(esperarSegundoNumero){
            pantalla.innerText = '';
            esperarSegundoNumero = false;
        }
        pantalla.innerText += valor;

    });
});

//manejar operadores
document.querySelectorAll('.signos').forEach(boton =>{
    boton.addEventListener('click', () => {
        const pantalla = document.getElementById('resultado');
        
        primerNumero = pantalla.innerText;
        operador = boton.innerText;
        esperarSegundoNumero = true;

    });
});

//manejar (=)
const igual = document.getElementById('igual');
igual.addEventListener('click', () => {
    const pantalla = document.getElementById('resultado');
    const segundoNumero = pantalla.innerText;
    let respuesta = '';

    switch (operador) {
        case '+':
            respuesta = parseFloat(primerNumero) + parseFloat(segundoNumero);
            break;
        case '-':
            respuesta = parseFloat(primerNumero) - parseFloat(segundoNumero);
            break;
        case '*':
            respuesta = parseFloat(primerNumero) * parseFloat(segundoNumero);
            break;
        case '/':
            if (parseFloat(segundoNumero) === 0){ //parsear para que no muestre infinity
                respuesta = "Error";
            } else {
                respuesta = parseFloat(primerNumero) / parseFloat(segundoNumero);
            }
            pantalla.innerText = respuesta;
            break;
        default:
            respuesta = "Error";
            break;
    }
    pantalla.innerText = respuesta;
})

//manejar btn C
function borrarNumero() {
    const pantalla = document.getElementById('resultado');
    pantalla.innerText = '';
}
