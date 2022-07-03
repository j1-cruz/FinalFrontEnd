//Buttons
var btnIniciarSesion = document.getElementById("btnIniciarSesion");
//Inputs Inicio de sesion
var email = document.getElementById("email");
var password = document.getElementById("password");
//Mensaje de alerta
var warningEmail = document.getElementById("warningEmail");
var warningPassword = document.getElementById("warningPassword");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
btnIniciarSesion.addEventListener("click", function () {
    if (password.value.length < 8) {
        console.log("Contraseña corta");
        warningPassword.innerHTML = "Contraseña incorrecta";
    }
    else if (!mailformat.test(email.value)) {
        warningEmail.innerHTML = "El mail no es valido";
    }
    else {
        location.href = "./index.html";
    }
});
