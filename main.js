/*
REQUERIMIENTOS 
1.- Crear un prototipo alumno, el cual debe incluir:
    Nombre Apellidos Edad Materias inscritas Calificaciones
2.- Alta de alumnos
    Dar de alta alumnos, por defecto lo único que deben pedir como requisito al inicio es nombre, apellidos, edad
3.- Crear funciones y vistas que les ayuden a :
    Inscribir un alumno a una clase.
    Asignarle sus calificaciones.
    Crear grupos y asignarle alumnos (Usen estructuras de datos).
4.- Ya que tengan sus grupos con alumnos, deberán crear e implementar las siguientes funciones:
    Buscar por nombre.
    Buscar por apellido.
    Obtener promedio de un alumno.
    Obtener promedio del grupo.
    Obtener lista de alumnos ordenados ascendente y descendente por calificación.
    Con los datos almacenados en el prototipo agregar otro ordenamiento o búsqueda bajo el parámetro que quieran (Este es el punto extra).
5.- Preferentemente todo guarden en LocalStorage para que puedan tener persistencia de datos (Opcional x2)

ALGORITMO

    NOMENCLATURA 
        R repetido
        En html usar estas palabras para id: registro,asignatura, estudiante, calificacion, primerapellido
        En js usar estas palabras para variables: inscrip, materia, alumno, calif, 1apell

    ENTRADAS 
        Solicitar datos en form estudiante:
            nombre, apellido1, apellido2, edad, asignatura
        Solicitar datos en form calificación: 
            nombreR asignaturaR, calificacion 

    PROCESOS 
        Hacer html
        Hacer css
        Vincular botones de html a js
        Crear prototipo
        Rellenar prototipo con datos de form estudiante:
        Agregar dato de calificacion a prototipo 
        Hacer métodos 
            listas (logarimos de ordenamiento)
            promedios 
        Vincular resultados de métodos a inputs de salida

    SALIDAS 
        Dar datos de lista alumnos ordenados calificacionesascendete
        Dar datos de lista alumnos ordenados descendente por busqueda de 
        Dar promedio del estudiante con busqueda por nombre
        Dar promedio del estudiante con busqueda por apellido 
        Dar promedio de la asignatura con búsqueda por asignatura

*/ 

//RECOPILAR INFO DE FORMULARIOS 

const formInscripAlumno = document.getElementById('formRegistroEstudiante');
const formInscripCalif = document.getElementById('formRegistroCalificacion');
const formListaMateria =document.getElementById('formListaAsignatura');
const formBuscarNombPromedio = document.getElementById('formBuscarNombrePromedio');
const formBuscarApell1Promedio = document.getElementById('formBuscarPrimerApellidoPromedio');
const formBuscarMateriaPromedio = document.getElementById('formBuscarAsignaturaPromedio');


//VALORES ESPECÍFICOS

let nombre = document.getElementById('nombre').value;
let apellidoPrimero = document.getElementById('primerApellido').value;
let apellidoSegundo = document.getElementById('segundoApellido').value;
let edad = document.getElementById('edad').value;
let materia = document.getElementById('asignatura').value; 


    //duda si estas también serían variables
    let nombreCalif = document.getElementById('nombreCalificacion').value;
    let calificacion = document.getElementById('asignaturaAcalificar').value;    
    let materiaLista = document.getElementById('asignaturaLista').value;
    let nombrePromedio = document.getElementById('buscarNombrePromedio').value;
    let apellido1Promedio = document.getElementById('buscar1ApellidoPromedio').value;
    let materiaPromedio = document.getElementById('buscarAsignaturaPromedio').value;



//EVENTOS DE CLIC A BOTONES 
formInscripAlumno.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let msjAlumnoRegistro = document.getElementById('msjAlumnoRegistro');

    setTimeout(() => {
        msjAlumnoRegistro.classList.remove('esconder');
        msjAlumnoRegistro.classList.add('validarRegistro');
    }, 10);

    setTimeout(() => {
        msjAlumnoRegistro.classList.remove('validarRegistro');
        msjAlumnoRegistro.classList.add('esconder');
    }, 3000);

})

formInscripCalif.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    let msjAlumnoRegistro = document.getElementById('msjCalificacionRegistro');

    setTimeout(() => {
        msjCalificacionRegistro.classList.remove('esconder');
        msjCalificacionRegistro.classList.add('validarRegistro');
    }, 10);

    setTimeout(() => {
        msjCalificacionRegistro.classList.remove('validarRegistro');
        msjCalificacionRegistro.classList.add('esconder');
    }, 3000);
})

formListaMateria.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    console.log('La lista grupal ordenada alfabeticamente es esta')
})

formBuscarNombPromedio.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    console.log('El promedio del estudiante es')
})

formBuscarApell1Promedio.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    console.log('El promedio del estudiante es')
})

formBuscarMateriaPromedio.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    console.log('El promedio de la asignatura es')
})


/*CÓDIGO EN PRUEBA 

class alumno {
      constructor(nombre, apellidoPr, apellidoSe, edad, materia, calificacion){
          this.nombre =nombre;
          this.apellidoPr=apellidoPr;
          this.apellidoSe = apellidoSe;
          this.edad= edad;
          this.materia = materia;
          this.calificacion=calificacion; 
      }

  inscribir(){
      console.log(`${this.nombre} está inscrito.`);
  }
  
  calificar(){
      console.log(`${this.nombre} esta es tu calificacion`);
  }
  promedio(){
      console.log(`${this.nombre} este es tu promedio:.`);
  }
}

//INSTANCIAR OBJETO 
  const alumno1 =new alumno ();

//EJECUTAR MÉTODOS 
alumno1.inscribir();
alumno1.calificar();
alumno1.promedio();


class asignatura extends alumno {
  constructor(nombre, apellidoPr, apellidoSe, edad, materia, calificacion){
      super(calificacion)
      this.nombre =nombre;
      this.apellidoPr=apellidoPr;
      this.apellidoSe = apellidoSe;
      this.edad= edad;
      this.materia = materia;
  }
  promedioGeneral(){
    console.log(`Este es el promedio general${this.calificacion}`)
  }
}


const asignatura1= new asignatura(9);

asignatura1.promedioGeneral();
console.log(asignatura1.nombre);
asignatura1.inscribir();
asignatura1.calificar();





*/
