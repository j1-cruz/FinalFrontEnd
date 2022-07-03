//Formulario de incripcion
//Buttons
var btnForm = document.getElementById("btnForm");
//Inputs form
var nombre = document.getElementById("name");
var lastname = document.getElementById("lastname");
var emailForm = document.getElementById("emailForm");
var passwordConfirm = document.getElementById("passwordConfirm");
var passwordForm = document.getElementById("passwordForm");
//Mensaje de alerta
var warningName = document.getElementById("warningName");
var warningLastName = document.getElementById("warningLastName");
var warningPasswordDiferent = document.getElementById("warningPasswordDiferent");
var warningPasswordCorto = document.getElementById("warningPasswordCorto");
var warningEmailForm = document.getElementById("warningEmailForm");
var mailformatForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
btnForm.addEventListener("click", function () {
    if (nombre.value.length < 5) {
        warningName.innerHTML = "Nombre demaciado corto";
    }
    else if (lastname.value.length < 5) {
        warningLastName.innerHTML = "Apellido demaciado corto";
    }
    else if (!mailformatForm.test(emailForm.value)) {
        warningEmailForm.innerHTML = "El mail no es valido";
    }
    else if (passwordForm.value.length < 8 || passwordForm.value === null) {
        warningPasswordCorto.innerHTML = "Verifica tu password";
    }
    else if (passwordForm.value !== passwordConfirm.value) {
        console.log("Contraseñas no son iguales");
        warningPasswordDiferent.innerHTML = "Las contraseñas no coinciden";
    }
    else {
        location.href = "./inicio.html";
    }
});
