

document.querySelectorAll('input[name = "medida"]').forEach(opcion => {
    opcion.addEventListener('change', detectarRadioBtn);
});


function detectarRadioBtn() {
    let seleccionado = document.querySelector('input[name="medida"]:checked').value;
    
    if(seleccionado === "Celsius"){
        console.log("Elegiste " + seleccionado);
    }else if (seleccionado === "Fahrenheit"){
        console.log("Elegiste " + seleccionado);
    }
    else {
        console.log("No Elegiste");
    }
}

const primerNumero = document.getElementById("inputUsuario");
primerNumero.oninput = () => {
    console.log("Ingresaste " + primerNumero.value);
}