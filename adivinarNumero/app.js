
let numUsuario = document.getElementById("numUsuario");
let respuesta = document.getElementById("respuesta");
let aleatorio = Math.random();
aleatorio = aleatorio * 100 + 1; 
aleatorio = Math.trunc(aleatorio);
console.log(aleatorio);
let intentos = 3;
respuesta.style.display = "none";

function confirmarNumero() {

    let valorUsuario = parseInt(numUsuario.value);

    if (valorUsuario > aleatorio) {
        intentos--;
        respuesta.innerText = `${valorUsuario} es muy alto. Te quedan ${intentos} intentos.`;
    }
    else if (valorUsuario < aleatorio) {
        intentos--;
        respuesta.innerText = `${valorUsuario} es muy bajo. Te quedan ${intentos} intentos.`;
    }
    else if (valorUsuario === aleatorio) {
        respuesta.innerText = `Adivinaste! El número era ${aleatorio}`;
        btnVerificar.disabled = true;
        return;
    }
    if (intentos === 0){
        respuesta.innerText = `Perdiste! No hay mas intentos. El número era ${aleatorio}`;
        btnVerificar.disabled = true;
    }
    respuesta.style.display = "block";
}
let btnVerificar = document.getElementById("verificarNumero");
btnVerificar.addEventListener("click", confirmarNumero);
