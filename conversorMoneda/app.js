const primerNumero = document.getElementById("inputUsuario");
const pDolar = document.getElementById("pDolar");
const pArg = document.getElementById("pArgento");
const textos = document.querySelectorAll(".textos");
const equivalente = document.getElementById("equivalente");

textos.forEach(p => {
    p.style.display = "none";
});
equivalente.style.display = "none";

function calcularMoneda() {
    textos.forEach(p => {
        p.style.display = "none";
    });
    
    let seleccionado = document.querySelector('input[name="moneda"]:checked');
    if(!seleccionado){
        alert("Seleccionar una moneda");
        return;
    }

    let primerValor = parseFloat(primerNumero.value);
 

    if(isNaN(primerValor)){ 
        equivalente.value = "";
        return;
    }

    let segundoNumero;
    if(seleccionado.value === "Peso"){
        segundoNumero = primerValor * 0.00080;
        pDolar.style.display = "block";
    } else if (seleccionado.value === "Dolar"){
        segundoNumero = primerValor / 0.00080; 
        pArg.style.display = "block";
    }
    equivalente.innerText = segundoNumero.toFixed(2);
    equivalente.style.display = "block"
}


primerNumero.addEventListener("input", calcularMoneda);

document.querySelectorAll('input[name ="moneda"]').forEach(r => {
    r.addEventListener("change", calcularMoneda);
});
