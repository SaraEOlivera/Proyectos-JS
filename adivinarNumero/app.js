
let numUsuario = document.getElementById("numUsuario");
let respuesta = document.getElementById("respuesta");
let aleatorio = Math.random();
aleatorio = aleatorio * 100 + 1; 
aleatorio = Math.trunc(aleatorio);
console.log(aleatorio);

respuesta.style.display = "none";

function confirmarNumero() {
    let valorUsuario = parseInt(numUsuario.value);
    if (valorUsuario > aleatorio){    
        respuesta.innerText = `${valorUsuario} es muy alto`;
        respuesta.style.display = "block";
    }
    else if (valorUsuario < aleatorio){
        respuesta.innerText = `${valorUsuario} es muy bajo`;
        respuesta.style.display = "block";
    }
    else if (valorUsuario === aleatorio){
        respuesta.innerText = `Adivinaste! El número era ${aleatorio}`;
        respuesta.style.display = "block";
    }
}
let btnVerificar = document.getElementById("verificarNumero");
btnVerificar.addEventListener("click", confirmarNumero);
