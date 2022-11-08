
class Alumno {
    constructor(nombre, apellido, edad, localidad, nota,) {
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



const alumno1 = new Alumno("Juan", "Hernandez", "19", "Rosario", "8",)
const alumno2 = new Alumno("Pedri", "Nuñez", "19", "Buenos Aires", "5",)
const alumno3 = new Alumno("Pepe", "Aguilar", "21", "Rosario", "4", "")
const alumno4 = new Alumno("Lautaro", "Vazquez", "18", "Arroyo Seco", "10",)
const alumno5 = new Alumno("Maria", "Fernandez", "20", "Fighiera", "2",)






//ARRAYS

const cursos = [
    {nombre: 'Perito clasificador de granos y oleaginosos', precio: 98000},
    {nombre: 'Ingeniero Agricola', precio: 97000},
    {nombre: 'Ganaderia', precio: 95000},
    {nombre: 'Ingeniero en sistemas agricolas', precio: 90000},
]

const resultado = cursos.filter((el) => el.nombre.includes('Cursos'))
const resultado2 = cursos.filter((el) => el.precio < 100000)









const enviar = document.getElementById("mensaje")
function mensaje_uno (){
    console.log(promedioAlumnos)
}

