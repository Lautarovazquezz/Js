
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



//ARRAYS, ASYNC, PROMISE

const cursos = [{
    id: 1,
    title: 'Perito clasificador de granos y oleaginosos',
    precio: 980000,
    duracion: "9 meses"
},{
    id: 2,
    title: 'Nutricion y alimentacion bovina',
    precio: 97547,
    duracion: "11 meses"
},{
    id: 3,
    title: 'Produccion Organica',
    precio: 89000,
    duracion: "12 meses"
}
]


const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (cursos);
        }, 3000);

    })
}

getDatos().then((datos) =>console.log(cursos));



function mensaje_dos (){
    const enviar = document.getElementById("peritoCursoUno")
    document.getElementById("cursos1").innerHTML = "El precio de este curso es de $98000 y se paga a lo largo de 9 meses"
}
function mensaje_tres (){
    const enviar = document.getElementById("NutricionCursoDos")
    document.getElementById("cursos2").innerHTML = "El precio de este curso es de $97547 y se paga a lo largo de 12 meses que es la duracion de la carreara"
}
function mensaje_cuatro (){
    const enviar = document.getElementById("NutricionCursoDos")
    document.getElementById("cursos3").innerHTML = "El precio de este curso es de $89000 y se paga a lo largo de 10"
}


const enviar = document.getElementById("mensaje")
function mensaje_uno (){
    console.log(promedioAlumnos)
}

