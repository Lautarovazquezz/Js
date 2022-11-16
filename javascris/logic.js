document.querySelector('#btnGuardar').addEventListener('click', guardarAlumno)
tablaAlumnos();

function guardarAlumno(){
    var sId = document.querySelector('#txtId').value
    var sApelido = document.querySelector('#txtApellido').value
    var sPais = document.querySelector('#txtPais').value
    var sEmail = document.querySelector('#txtEmail').value;
    
    addAlumnos(sId, sApelido, sPais, sEmail);
    tablaAlumnos();
}

function tablaAlumnos(){
    var list = getAlumnosList(),
    tbody = document.querySelector('#alumnosTabla tbody');


    tbody.innerHTML = '';
    
    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i),
            idCell = row.insertCell(0),
            ApellidoCell = row.insertCell(1),
            PaisCell = row.insertCell(2),
            EmailCell = row.insertCell(3),
            selectCell = row.insertCell(4);



        idCell.innerHTML = list[i].id;
        ApellidoCell.innerHTML = list[i].Apellido;
        PaisCell.innerHTML = list[i].Pais;
        EmailCell.innerHTML = list[i].Email;
        
        var inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i].id;
        selectCell.appendChild(inputSelect)
        

        



      tbody.appendChild(row);
    }
}