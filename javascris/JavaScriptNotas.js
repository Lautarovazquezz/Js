
// DOM
function getSelectValue() {
    const selectedValue = document.getElementById
        ("selector").value;
    console.log("Su nota fue un:", (selectedValue));
    document.getElementById("hola").innerHTML = selectedValue
};

// EVENTOS
Notification.requestPermission().then(function (result) {
    console.log(result);
});

function mensaje_uno() {
    const enviar = document.getElementById("mensaje")


    document.getElementById("chau").innerHTML = "El promedio de las notas de los alumnos fue de 5.7"
}

// FETCH 
function miFuncion() {

    fetch('archivo.json')
        .then(response => response.json())
        .then(data => console.log(data))
}

