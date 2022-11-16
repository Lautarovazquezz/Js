// // EN PROCESO DE TRABAJO
// const formulario = document.getElementById("formulario")

// // EVENTO

// formulario.addEventListener("sumbit", validarFormulario)

// // FUNCIONES

// function validarFormulario(e){
//     e.preventDefault();
//     const nombre = document.getElementById("nombreYApelldio").value
//     const email = document.getElementById("email").value
//     console.log(nombreYApelldio, email)
// }



var AlumnosList = [];


function addAlumnos (pid, papellido, ppais, pemail){

    var newAlumnos = {
        id: pid,
        Apellido : papellido,
        Pais : ppais,
        Email : pemail
    };
    console.log(newAlumnos);
    AlumnosList.push(newAlumnos)
}

function getAlumnosList(){
    return AlumnosList;
}