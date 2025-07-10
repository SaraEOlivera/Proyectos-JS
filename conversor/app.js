const primerNumero = document.getElementById("inputUsuario");
const segundoNumero = document.getElementById("equivalente");

primerNumero.oninput = () => {
    let seleccionado = document.querySelector('input[name="medida"]:checked').value;
    let valor1 = parseFloat(primerNumero.value);

    if(isNaN(valor1)){
        segundoNumero.value = '';
        return
    }

    let resultado;

    if (seleccionado === "Celsius") {
        resultado = (valor1 * 9 / 5) + 32;
        console.log("resultado " + resultado + " celsius")
    }
    else if (seleccionado === "Fahrenheit") {
        resultado = (valor1 - 32) * 5 / 9;
        console.log("resultado " + resultado + " Fahrenheit")
    }
    segundoNumero.value = resultado.toFixed(2);

}


        
        
        







