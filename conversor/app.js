const primerNumero = document.getElementById("inputUsuario");
const segundoNumero = document.getElementById("equivalente");
const textos = document.querySelectorAll('.texto');
const pFahrenheit = document.getElementById("pFahrenheit");
const pCelsius = document.getElementById("pCelsius");

textos.forEach(p => {  //ocultar textos
    p.style.display = 'none';
})

function calcularTemperatura() {

    textos.forEach(p => { //repite p/no mostrar los 2
        p.style.display = 'none';
    })

    let seleccionado = document.querySelector('input[name="medida"]:checked');

    if(!seleccionado){
        alert("No elegiste un tipo de temperatura");
        return;
    }

    let valor1 = parseFloat(primerNumero.value);

    if(isNaN(valor1)){
        segundoNumero.value = '';
        return;
    }

    let resultado;   

    if (seleccionado.value === "Celsius") {
        resultado = (valor1 * 9 / 5) + 32;
        pFahrenheit.style.display = "block"; //muestra 1 p
        console.log("resultado " + resultado + " celsius");
    }
    else if (seleccionado.value === "Fahrenheit") {
        resultado = (valor1 - 32) * 5 / 9;
        pCelsius.style.display = "block"; // muestra el otro
        console.log("resultado " + resultado + " Fahrenheit");
    }
    segundoNumero.value = resultado.toFixed(2); 
}

//llamar a calcular cuando el usuario escribe
primerNumero.addEventListener('input', calcularTemperatura);

//llamar a calcular cuando se cambia el radio button
document.querySelectorAll('input[name= "medida"]').forEach(opcion => {
    opcion.addEventListener('change', calcularTemperatura);
});




        
        
        







