interface Persona4{
  nombre: string;
  edad: number;
}
type PersonaDos = {
  nombre: string;
  edad: number;
  altura: number;
}

interface Profesor extends Persona4{
  subjects:string[];
  yearsOfExperience:number;
  students:string[];
}

const profesores: Profesor[] =[]
const subjects: string[] =[]
const students: Student[] =[]

function addProfessor(): Profesor{
  let newProfesor: Profesor = {
    nombre: 'agustin',
    edad: 55,
    subjects: ["algorithms", "architecture"],
    yearsOfExperience: 20,
    students: ["agustin"]
  };
  profesores.push(newProfesor);
  return newProfesor;
}

function updateYearsOfExperience(nombre:string,yearsOfExperience:number){
  const professorToUpdate = profesores.find(profesores => profesores.nombre === nombre);
  if (professorToUpdate){
    professorToUpdate.yearsOfExperience = yearsOfExperience;
    return professorToUpdate;
  } else {
    console.log("No profesores found");
    return 0
  }
}

function increaseSubjectsToProfesor(nombre:string,subjects:string){
const profesorToUpdate = profesores.find(profesores => profesores.nombre === nombre)
  const subjectsToUpdate = profesorToUpdate?.subjects
  if (subjectsToUpdate){
    subjectsToUpdate.push(subjects)
    return subjectsToUpdate;
  }else{
    console.log("no subject to update");
    return 0;
  }
}

type Student = Persona4&{
  DNI: number;
  subjects: string[];
  assistans: number;
  professor?: Profesor | null;
}

function addStudent(DNI: number, ): void{
  let newStudent: Student = {
    DNI: 2,
    subjects: ["typescript", "node"],
    assistans: 2,
    edad: 25,
    nombre:"tomas gomez",
  }
  students.push(newStudent);
}

