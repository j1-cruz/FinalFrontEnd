//Buttons
const btnIniciarSesion:any = document.getElementById("btnIniciarSesion")

//Inputs Inicio de sesion
let email = <HTMLInputElement>document.getElementById("email")
let password = <HTMLInputElement>document.getElementById("password")


//Mensaje de alerta
let warningEmail = <HTMLTextAreaElement>document.getElementById("warningEmail");
let warningPassword = <HTMLTextAreaElement>document.getElementById("warningPassword");

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

btnIniciarSesion.addEventListener("click", () => {

    if (password.value.length < 8) {
      console.log("Contraseña corta")
      warningPassword.innerHTML = "Contraseña incorrecta"
    } 
    if(!mailformat.test(email.value)){
      warningEmail.innerHTML = "El mail no es valido"
    } else{
      location.href = "./index.html";
    }
   
  }
  
)