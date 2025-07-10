const primerNumero = document.getElementById("inputUsuario");
const segundoNumero = document.getElementById("equivalente");
const textos = document.querySelectorAll('.texto');
const pFahrenheit = document.getElementById("pFahrenheit");
const pCelsius = document.getElementById("pCelsius");

textos.forEach(p => {  //ocultar textos
    p.style.display = 'none';
})

primerNumero.oninput = () => {

    textos.forEach(p => { //repite p/no mostrar los 2
        p.style.display = 'none';
    })

    let seleccionado = document.querySelector('input[name="medida"]:checked').value;
    let valor1 = parseFloat(primerNumero.value);

    if(isNaN(valor1)){ 
        segundoNumero.value = '';
        return
    }

    let resultado;

    if (seleccionado === "Celsius") {
        resultado = (valor1 * 9 / 5) + 32;
        pFahrenheit.style.display = "block"; //muestra 1 p
        console.log("resultado " + resultado + " celsius")
    }
    else if (seleccionado === "Fahrenheit") {
        resultado = (valor1 - 32) * 5 / 9;
        pCelsius.style.display = "block"; // muestra el otro
        console.log("resultado " + resultado + " Fahrenheit")
    }
    segundoNumero.value = resultado.toFixed(2); 

}


        
        
        







