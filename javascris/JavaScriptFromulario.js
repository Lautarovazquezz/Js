// LOCAL STORAGE Y JSON DE ALUMNOS EN EL FORMULARIO
var AlumnosList = [];


function addAlumnos (pid, papellido, ppais, pemail){

    var newAlumnos = {
        id: pid,
        Apellido : papellido,
        Pais : ppais,
        Email : pemail
    };
    console.log(newAlumnos);
    AlumnosList.push(newAlumnos);
    localStorageAlumnos(AlumnosList);
}

function getAlumnosList(){
    var storedList = localStorage.getItem('localAlumnoslist')
    if(storedList == null){
        AlumnosList = [];
    }
    if (storedList == null){}
    else{
        AlumnosList = JSON.parse(storedList);
    }

    return AlumnosList;

}

function localStorageAlumnos(plist){
    localStorage.setItem('localAlumnoslist', JSON.stringify((plist)));
}
