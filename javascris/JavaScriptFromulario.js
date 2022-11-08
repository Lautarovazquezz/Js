// const formulario = document.getElementById("form")

// formulario.addEventListener("sumbit", function(e){
   
//    e.preventDefault();
//    let email = document.getElementById('email-form').value
//     console.log("email")
// })
const formulario = document.getElementById("formulario")

// EVENTO

formulario.addEventListener("sumbit", validarFormulario)

// FUNCIONES

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.getElementById("nombreYApelldio").value
    const email = document.getElementById("email").value
    console.log(nombreYApelldio, email)
}