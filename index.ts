
let form:any = document.getElementById("form")

let email:any = document.getElementById("email")
let password:any = document.getElementById("password")
const mensaje:any = document.getElementById("mensaje")

form.addEventListener("submit", e=>{ 
    form.style.display="none"
    mensaje.style.display="block";
    mensaje.inerHTML="Bienvenido";
    mensaje.style.color="#ff0000";
    e.preventDefault()
  }
)