//Formulario de incripcion

//Buttons
const btnForm:any = document.getElementById("btnForm")

//Inputs form
let nombre:any = <HTMLInputElement>document.getElementById("name")
let lastname:any = <HTMLInputElement>document.getElementById("lastname")
let emailForm = <HTMLInputElement>document.getElementById("emailForm")
let passwordConfirm = <HTMLInputElement>document.getElementById("passwordConfirm")
let passwordForm = <HTMLInputElement>document.getElementById("passwordForm")

//Mensaje de alerta
let warningName = <HTMLTextAreaElement>document.getElementById("warningName");
let warningLastName = <HTMLTextAreaElement>document.getElementById("warningLastName");
let warningPasswordDiferent = <HTMLTextAreaElement>document.getElementById("warningPasswordDiferent");
let warningPasswordCorto = <HTMLTextAreaElement>document.getElementById("warningPasswordCorto");
let warningEmailForm = <HTMLTextAreaElement>document.getElementById("warningEmailForm");


let mailformatForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

btnForm.addEventListener("click", () => {
  
    if(nombre.value.length < 5 ){
      warningName.innerHTML = "Nombre demaciado corto"
    } 

    if(lastname.value.length < 5){
      warningLastName.innerHTML = "Apellido demaciado corto"
    }

    if (!mailformatForm.test(emailForm.value)) {
      warningEmailForm.innerHTML = "El mail no es valido"
    } 

    if (passwordForm.value.length < 8 || passwordForm.value === null){
      warningPasswordCorto.innerHTML ="Verifica tu password"
    }  

    if (passwordForm.value !== passwordConfirm.value) {
      console.log("Contraseñas no son iguales")
      warningPasswordDiferent.innerHTML = "Las contraseñas no coinciden"
    } else {
      window.location.href = "./inicio.html";
    }

  }
)