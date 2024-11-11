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
type Profesor2 = {
  nombre: string;
  materia: string;
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

const curses: Curse[] = [];

interface Curse{
  name: string,
  professor: Profesor2,
  students: Estudiante[]
}
function createCourse(name: string, prof: Profesor2, students: Estudiante[]): void{
  let newCourse: Curse = {
    name: name,
    professor: prof,
    students: students
  }
}
function getStudentsNames(name: string){
  let course = curses.find(curses => curses.name === name);
  if(course){
    return course.students.map(student => student.nombre);
  }else{
    return [];
  }
}
/*
Crea un tipo llamado  Libro con propiedades  titulo,  autor,  añoPublicacion y  genero.
Luego, define un tipo  Biblioteca que contenga una propiedad  libros, un array de
Libro. Implementa una función que permita agregar un libro a la biblioteca, y otra que
busque todos los libros de un género en particular. Usa  readonly para hacer que los
atributos de  Libro no puedan ser modificados después de su creación.
*/

type Book = {
  readonly title: string,
  readonly author: string,
  readonly yearOfPublishing: number,
  readonly genre: string
}
type Library = {
  books: Book[]
}
const library: Library = {
  books: []
}
function addBook(title: string, author: string, yearOfPublishing: number, genre:string){
  let newBook: Book = {
    title,
    author,
    yearOfPublishing,
    genre
  }
  library.books.push(newBook);
}
function searchBooksByGenre(genre: string){
  return library.books.filter(book => book.genre === genre);
}

/*
Define un tipo  Empleado que contenga propiedades como  nombre,  puesto,  salario y un
método  calcularBono que reciba un porcentaje y devuelva el bono calculado. Implementa
una función que cree empleados y otra que permita actualizar el puesto y salario de un
empleado dado su nombre. Usa  type guards para asegurar que los métodos se utilicen
correctamente en los objetos de tipo  Empleado.
 */
type Empleado = {
  nombre: string,
  puesto: string,
  salario: number,
  calcularBono: (porcentaje:number) => number
}
const listaEmpleados: Empleado[] = [];

function crearEmpleado(nombre:string, puesto:string,salario:number):Empleado{
  let newEmpleado: Empleado = {
    nombre,
    puesto,
    salario,
    calcularBono(porcentaje:number): number{
      return this.salario * porcentaje
    },
  };
  listaEmpleados.push(newEmpleado);
  return newEmpleado; 
}
function actualizarEmpleado(nombre:string,puesto:string,nuevoSalario:number):Empleado|undefined{
  let empleado = listaEmpleados.find(emp => emp.nombre === nombre)
  if(empleado){
    empleado.puesto = puesto
    empleado.salario = nuevoSalario
    }
    else{
      console.log("Empleado not found!");
    }
    
  return empleado
}
const empleado1 = crearEmpleado("Juan", "Desarrollador", 50000);
//console.log(empleado1);
//console.log("Bono: " + empleado1.calcularBono(0.2));
actualizarEmpleado("Juan", "Senior Developer", 60000);
//console.log(listaEmpleados);

/* 
Crea un tipo  Vehiculo con propiedades como  marca,  modelo, y  año. Define un tipo
Coche que extienda de  Vehiculo e incluya propiedades adicionales como  puertas y
transmision. Luego, implementa una función que permita crear un coche y otra que, dado
un array de coches, filtre aquellos con una transmisión específica. Usa  type narrowing
para diferenciar entre  Vehiculo y  Coche si ambos tipos pueden coexistir en el mismo
*/

type Vehiculo = {
  marca: string,
  modelo: string,
  anio: number
}
type Coche = Vehiculo&{
  puertas: number,
  transmision: string
}
let listaCoches: Coche[] = []

function crearCoche(marca:string,modelo:string,anio:number,puertas:number,transmision:string){
  let newCoche: Coche = {
    anio,
    marca,
    modelo,
    puertas,
    transmision
  }
  listaCoches.push(newCoche);
  return newCoche;
}

function findTransmision(transmision:string){
  let transmisionEspecifica = listaCoches.find(trans => trans.transmision === transmision)
  if(transmisionEspecifica){
    console.log("Marca:" + transmisionEspecifica.marca ,"Modelo: " + transmisionEspecifica.modelo,"Anio:" + transmisionEspecifica.anio, "Puertas:" + transmisionEspecifica.puertas);
  }else{
    console.log(`Couldnt find a car with ${transmision}`);
  }
}
/*
Crea una interfaz  Producto con propiedades  nombre,  precio y  categoria. Define un tipo
CarritoDeCompras que sea un array de productos. Implementa una función que permita
calcular el total de la compra, aplicando un descuento en caso de que el total supere un
monto determinado. Utiliza los tipos de utilidad de TypeScript para hacer que  Producto sea
solo de lectura en el carrito. 
*/
interface Product{
  name: string,
  price: number,
  category: string
}
type ShoppingCart = Product[];
const cart: ShoppingCart = [];

function calculateTotal(product: Product[], discount:number){
  let total = product.reduce((acc,prod) => acc + prod.price,0);
  if(total > 100){
    return total - (total * discount);
  }else{
    return total;
  }
}
function addToCart(product: Product){
  cart.push(product);
}

/*
Define un tipo genérico  RespuestaApi<T> que represente una respuesta de API con una
propiedad  datos de tipo genérico  T y una propiedad  exito de tipo booleano. Luego, crea
una función que reciba un objeto de tipo  RespuestaApi y, en caso de éxito, imprima los
datos. Si no, imprime un mensaje de error. Usa tipos genéricos para que funcione con
cualquier tipo de datos.
*/ 
type RespuestaApi<T> ={
  datos: T;
  exito: boolean;
}
function manejarRespuesta<T>(respuesta:RespuestaApi<T>):void{
  if(respuesta.exito){
    console.log(respuesta.datos);
  }else{
    console.log("Error couldnt get the data");
  }
}
const respuestaUsuario: RespuestaApi<{ nombre: string; edad: number }> = {
  datos: { nombre: "Juan", edad: 30 },
  exito: false,
};
//manejarRespuesta(respuestaUsuario);

/*
Crea una interfaz  CuentaBancaria con propiedades como  titular,  saldo, y un método
depositar que aumente el saldo. Luego, crea una interfaz  CuentaDeAhorro que extienda
CuentaBancaria y agregue un método  calcularInteres que devuelva el interés basado
en el saldo. Implementa una función que reciba una cuenta de ahorro, le aplique el interés y
retorne el saldo actualizado.
*/
interface bankAccount{
  owner: string,
  cash: number,
  deposit: (amount:number) => void
}
interface savingsAccount extends bankAccount{
  calculateInteres: (interest:number) => number;
}
let bankAccounts: bankAccount[] = [];

function createBankAccount(){ 
  let newBankAccount: bankAccount = {
  owner: 'agustin',
  cash: 10000,
  deposit(amount:number){this.cash += amount},
  };
  bankAccounts.push(newBankAccount);
  return newBankAccount;
}
function updateCashStatus(account:savingsAccount, interesRate:number):number{
  const interest = account.calculateInteres(interesRate);
  account.deposit(interest)
  return account.cash
}

const savingsAccount: savingsAccount = {
  owner: 'Agustin',
  cash: 10000,
  deposit(amount: number) {
    this.cash += amount;
  },
  calculateInteres(interestRate: number) {
    return this.cash * interestRate;
  }
};
console.log("(Data antes) " + "Name: " + savingsAccount.owner + " Cash: " + savingsAccount.cash);
const newBalance = updateCashStatus(savingsAccount, 0.05);
console.log("(Data despues) " + "Name: " + savingsAccount.owner + " Cash: " + savingsAccount.cash);
