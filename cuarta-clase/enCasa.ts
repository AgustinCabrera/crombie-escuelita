/*
Crea un tipo personalizado llamado  Estudiante que represente a un alumno, con
propiedades como  nombre,  edad y  notas (un array de números). Implementa una función
que permita agregar una nueva nota a un estudiante dado su nombre, y otra función que
calcule el promedio de notas de un estudiante. Asegúrate de tipar correctamente cada
elemento.
*/
type Estudiante = {
  nombre: string;
  edad: number;
  notas: number[];
}
function agregarNotas(nombre: string ){
  let nuevoEstudiante: Estudiante = {
    nombre: 'agustin',
    edad: 55,
    notas: [5,8,9]
  };
  nuevoEstudiante.notas.push(10);
  return nuevoEstudiante;
}
function calcularPromedio(notas:number[]){
  let aux = 0;
  for(let i = 0 ; i<notas.length ; i++){
    notas[i] += aux;
  }
  return aux / notas.length;
}
/*
Define una interfaz  Curso con propiedades como  nombre,  profesor (tipo  Profesor, del
ejercicio anterior) y  estudiantes (un array de  Estudiante). Implementa una función que
permita crear un curso y asignarle un profesor y una lista de estudiantes. Luego, crea una
función que, dado el nombre de un curso, devuelva una lista con los nombres de los
estudiantes inscritos.
*/

interface Curse{
  name: string,
  professor: Profesor,
  students: Student[]
}
function createCourse(name: string, prof: Profesor, students: Student[]): void{
  let newCourse: Curse = {
    name: name,
    professor: prof,
    students: students
  }
}
function getStudentsNames(name: string){
  let course = curses.find(curses => curses.name === name);
  if(course){
    return course.students.map(student => student.name);
  }else{
    return [];
  }
}