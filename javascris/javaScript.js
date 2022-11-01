
class Alumno {
    constructor(nombre, apellido, edad, localidad, nota, materia) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = parseInt(edad)
        this.localidad = localidad
        this.nota = parseInt(nota)
        
    }

}
// STORAGE
const nombre1 = "Juan Hernandez";
const nombre2 = "Pedri Nuñez";
const nombre3 = "Pepe Aguilar";
const nombre4 = "Lautaro Vazquez";
const nombre5 = "Maria Fernandez";

localStorage.setItem("Alumno 1", nombre1,);
localStorage.setItem("Alumno 2", nombre2,);
localStorage.setItem("Alumno 3", nombre3,);
localStorage.setItem("Alumno 4", nombre4,);
localStorage.setItem("Alumno 5", nombre5,);



// WHILE
let DNI = prompt("Ingrese su dni (123)")
while (DNI != "123") {
    DNI = prompt("DNI incorrecto, Pruebe con  (123).")
    alert("DNI correcto")


}
console.log ("Su DNI es:",(DNI))


alert("Los alumnos registrados son, Juan Hernandez, Pedri Nuñez, Pepe Aguilar, Lautaro Vazquez y Maria Fernandez")


const alumno1 = new Alumno("Juan", "Hernandez", "19", "Rosario", "8",)
const alumno2 = new Alumno("Pedri", "Nuñez", "19", "Buenos Aires", "5",)
const alumno3 = new Alumno("Pepe", "Aguilar", "21", "Rosario", "4", "")
const alumno4 = new Alumno("Lautaro", "Vazquez", "18", "Arroyo Seco", "10",)
const alumno5 = new Alumno("Maria", "Fernandez", "20", "Fighiera", "2",)





//ALUMNO 1
console.log (alumno1,"El pirmer alumno es"["nombre"])
console.log (alumno1["apellido"])
console.log (alumno1["edad"])
console.log (alumno1["localidad"])

// JSON

const alumno1JSON = JSON.stringify(alumno1)
console.log(alumno1JSON)
//ALUMNO 2
console.log (alumno2,"El pirmer alumno es"["nombre"])
console.log (alumno2["apellido"])
console.log (alumno2["edad"])
console.log (alumno2["localidad"])

// JSON

const alumno2JSON = JSON.stringify(alumno2);
console.log(alumno2JSON)

//ALUMNO 3
console.log (alumno3,"El pirmer alumno es"["nombre"])
console.log (alumno3["apellido"])
console.log (alumno3["edad"])
console.log (alumno3["localidad"])

// JSON

const alumno3JSON = JSON.stringify(alumno3);
console.log(alumno3JSON)

//ALUMNO 4
console.log (alumno4,"El pirmer alumno es"["nombre"])
console.log (alumno4["apellido"])
console.log (alumno4["edad"])
console.log (alumno4["localidad"])

// JSON

const alumno4JSON = JSON.stringify(alumno4);
console.log(alumno4JSON)

//ALUMNO 5
console.log (alumno5,"El pirmer alumno es"["nombre"])
console.log (alumno5["apellido"])
console.log (alumno5["edad"])
console.log (alumno5["localidad"])

// JSON

const alumno5JSON = JSON.stringify(alumno5);
console.log(alumno5JSON)






let nota = "el alumno no esta registrado";
const alumno = prompt("ingrese el nombre y apellido del alumno");


//SWITCH

switch (alumno) {
    case "Juan Hernandez":
        nota = 8;
        break;
        

 (alumno) 
    case "Pedri Nuñez":
        nota = 5;
        break;
 (alumno) 
    case "Pepe Aguilar":
        nota = 4;
        break;
 (alumno) 
    case "Lautaro Vazquez":
        nota = 10;
        break;
 (alumno) 
    case "Maria Fernandez":
        nota = 2;
        break;
}
//ARRAYS
const alumnos =  ["Juan Hernandez" ,8, "Pedri Nuñez" ,5, "Pepe Aguilar",4, "Lautaro Vazquez", 10, "Maria Fernandez",2]

for (let i = 0; i < 10; i++){


    
console.log(alumnos[i])



}
const cursos = [
    {nombre: 'Perito clasificador de granos y oleaginosos', precio: 98000},
    {nombre: 'Ingeniero Agricola', precio: 97000},
    {nombre: 'Ganaderia', precio: 95000},
    {nombre: 'Ingeniero en sistemas agricolas', precio: 90000},
]

const resultado = cursos.filter((el) => el.nombre.includes('Cursos'))
const resultado2 = cursos.filter((el) => el.precio < 100000)



console.log(resultado2)
alert(nota);


let promedio = 0;
const promedioAlumnos = prompt("¿Quiere saber cual fue el promedio de ntoas de los 5 alumnos?. si o no");
if (promedioAlumnos == "si") {
    alert("El promedio entre las notas de los 5 alumnos fue de:" + (alumno1.nota + alumno2.nota + alumno3.nota + alumno4.nota + alumno5.nota) / 5)
}
if (promedioAlumnos !== "si") {
    alert("ok, gracias :(")

}

console.log("el promedio de notas entre los alumnos fue de:", (alumno1.nota + alumno2.nota + alumno3.nota + alumno4.nota + alumno5.nota) / 5);


  
