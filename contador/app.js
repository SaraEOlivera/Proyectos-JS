let mas = document.getElementById("mas");
let menos = document.getElementById("menos");
let numero = document.getElementById("numero");


mas.addEventListener("click", () => {
    let valor1 = numero.innerText;
    let respuesta = parseInt(valor1);
    respuesta++;
    numero.innerText = respuesta;
})

menos.addEventListener("click", () =>{
    let valor1 = numero.innerText;
    let respuesta = parseInt(valor1);
    respuesta--;
    numero.innerText = respuesta;
    
})