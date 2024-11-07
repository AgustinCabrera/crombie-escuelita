/* 
Ejercicio 1:
En este ejercicio, 
->  crearás un tipo personalizado llamado "Profesor" que representará a un docente. 
    El tipo "Profesor" extenderá el tipo "Persona", que contiene las propiedades básicas de una persona, 
    como el nombre y la edad (usar interface o type).
    El tipo "Profesor", contará con una propiedad llamada "subjects", 
    que representa las materias que enseña (tipar), y otra propiedad llamada "yearsOfExperience"

->  Implementar una función que cree un profesor y lo pushee a un array.
->  Implementar una función que, dado el nombre de un profesor, actualice sus años de experiencia.
->  Implementar una función que agregue materias al profesor.
    Nuevo


Ejercicio 2:
->  Ahora crearemos el tipo "Alumno", que extiende al tipo "Persona".
    El tipo "Alumno", contará con las siguientes propiedades: DNI, subjects, faltas y profesor.
->  Implementar una función que cree un alumno y le agregue un profesor
->  Implementar una función que, dado el DNI de un alumno, devuelva sus faltas 
    (Si tiene más de 20, devolver un texto mostrando que quedó libre). 

*/




/*///////////  EJERCICIO 1  //////////// */

//Creamos las interfaces de Persona, Profesor
interface Persona {
  name: string;
  age: number;
}

interface Profesor extends Persona {
  subject: string[];
  experience: number;
}



//Creamos un arreglo que va a almacenar a todos los profesores, de tipo Profesor
const profesores:Profesor[]=[];


//Funcion que va a crear un nuevo profesor, los parámetros acá se tienen que llamar igual que los atributos
//de la interfaz de forma estricta, función tipo void porque solo modifica parte del proceso, pero sin
//necesidad de devolver nada
function crearProfe (
  name:string, 
  age:number, 
  subject:string[], 
  experience:number
  
  ) : void {

  //Creamos una variable que almacene todo el valor del profesor
  const addProfe :Profesor = {name,age,subject,experience};

  //Con push llenamos todo el arreglo
  profesores.push(addProfe);

  
}

//Llenamos el arreglo con los valores para cada atributo
crearProfe("Nacho", 25, ["Tecnología"], 4)

//crearProfe("Pedro", 32, ["Matemática"], 6)

//Imprimimos todos los profesores que tenemos hasta ahora
console.log("Profes agregados: ", profesores);





//Función que actualiza los años de experiencia del profesor
// acá no es necesario que sean iguales los nombres de los parámetros al de los atributos
function modifExperiencia(nombre:string, nuevaExperiencia:number) : void {
 

  /* find se compone de la siguente forma: 
      profesores.find(profe => profe.name === nombre)  
      lo de arriba es la traducción de esto:

         
          const existeONo:boolean = false;
          const profe = profesores;

      for (int i = 0; i < profe.length; ++i) {

          // Comprobamos si el nombre coincide
          if (profe[i].name === nombre) {
              existeONo = true;
              
          }
      }
      */
  
  // Localizamos que el nombre que ingresamos esté dentro del arreglo de profesores
  const profesor = profesores.find(profe => profe.name === nombre);

  //si existe el valor de profesor entonces...
  if(profesor) {
      
      //cambiamos el valor anterior al nuevo ingresado
      profesor.experience = nuevaExperiencia;
  }
  else{
      console.log("No se encontró el profesor!");
  }


}

//Parámetro 1 -> Busca por nombre al profe --- Parámetro 2 -> Reemplaza la información
modifExperiencia("Nacho", 155);

//Volvemos a imprimir los profes 
console.log("Nuevos años de experiencia: ", profesores);



//Función que agrega materias
function agregarMaterias (nombre:string, nuevasMaterias:string[] ) : void {

  //Lo mismo que antes, buscamos el profesor por nombre con find
  const profesor = profesores.find(profe => profe.name === nombre);

  //Si existe el profe entonces...
  if(profesor){
      

      // Funcionalidad ... (operador de Propagación)

      //Llena un array con nuevos elementos sin reemplazar los que ya estaban

      //                                                         vvvvvvvvvv
      // Se fija en el arreglo ["elem-1" , "elem-2", "elem-3", "nuevo-elem-4"]
      
      
      profesor.subject.push(...nuevasMaterias);
      //hacemos push, lo que hace es no reemplazar, sino agregar, con ...nuevasMaterias
  }
  else{
      console.log("No se encontró el docente!")
  }

}


// Parámetro 1: Busca por nombre al profe --- Parámetro 2: Llena el arreglo con nuevas materias
agregarMaterias("Nacho", ["Matemática", "Artes Visuales"]);

console.log("Nuevas materias agregadas: ", profesores)


//////////////////////////////////////////////////////////////////////////////////////////////////////




/*///////////  EJERCICIO 2  //////////// */

//Creamos la interfaz con los datos solicitados
interface Alumno extends Persona{
  dni:string;
  subject:string[];
  faltas:number;
  profesor:Profesor;
}


//Creamos un arreglo para almacenar a todos los alumnos
const alumnos:Alumno[] = [];


//Función para poder agregar alumnos
//Recordar que los parámetros tienen que tener mismo nombre que los atributos de la interface
//misma funcionalidad que crearProfe pero con más datos a ingresar, y creamos un parámetro diferente
//al final para solo ingresar el nombre del profesor para que lo agregue por nombre
function crearAlumno(

  name:string, 
  age:number,
  dni:string, 
  subject:string[], 
  faltas:number, 
  nombreProfe: string

  ): void{
  
  //Localizamos el nombre del profesor y asignamos el profesor a la variable
  const profesor = profesores.find(profe => profe.name === nombreProfe);


  //Si existe el profe, tonces...
  if(profesor){
      //Creamos una variable que almacene todos los datos
      const addEstudiante: Alumno = {name, age, dni, subject, faltas, profesor};
      
      //Llenamos el arreglo de estudiantes
      alumnos.push(addEstudiante);
  }

  else {

      //Las comillas invertidas o backtips `` sirven para concatenar nombres de variables
      //con texto de forma más rápida en una misma oración
      console.log(`No se encontró un profesor con el nombre "${nombreProfe}".`);

      /* Formas alternativas de imprimir el mensaje */

      //console.log("No se encontró un profesor con el nombre \"" + nombreProfesor + "\".");
      //console.log("No se encontró un profesor con el nombre", nombreProfesor + ".");

  }

  

  
}


crearAlumno("Agustín", 30, "38000152", ["Tecnología"], 25, "Nacho" );
crearAlumno("Sandro", 27, "40267766", ["Tecnología"], 10, "Nacho" );


//Impresion de los datos ☆☆☆AESTHERIC☆☆☆
// El \n hace un salto de línea --- \t hace un tabulado o sangría
console.log(`\n \t NUEVOS ESTUDIANTES: \n

          ${alumnos.map(item => `\n Nombre: ${item.name}, 
                                 \n Edad: ${item.age}, 
                                 \n DNI: ${item.dni}, 
                                 \n Materias: ${item.subject.join(', ')}, 
                                 \n Faltas: ${item.faltas}, 
                                 \n Profesor: ${item.profesor.name}
                                 \n ----------------------
                                 `).join('\n')}
`);



//Creamos una función para ver si un estudiante quedó libre o no
function comprobarFaltas(nombre: string): void {

  // Copiamos la info del estudiante a una variable
  const estudiante: Alumno | undefined = alumnos.find(pibe => pibe.name === nombre);

  // Si existe el estudiante, entonces...
  if (estudiante) {

      // Verificamos las faltas
      if (estudiante.faltas > 20) {
          console.log("\n \t La modalidad del estudiante es LIBRE");

      } else {
          console.log("\n \t La modalidad del estudiante es REGULAR");
      }
  } 
  
  else {

      
      console.log(`No se encontró un estudiante con el nombre "${nombre}".`);
  }
}


//Llamamos a la función

comprobarFaltas("Carlos") //Caso de estudiante no encontrado
comprobarFaltas("Agustín") //Caso de estudiante LIBRE
comprobarFaltas("Sandro") //Caso de estudiante REGULAR