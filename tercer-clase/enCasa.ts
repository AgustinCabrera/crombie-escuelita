interface Product {
  name: string;
  price: number;
}
type ProductWithDiscount = Product&{
  discount?: number;
}

function ProductWithDiscount (product: ProductWithDiscount): Number {
  if (product.discount && product.discount >0 &&  product.discount <= 1){
    return product.price*(1 - product.discount);
  }
  return product.price;
}

const myProduct: ProductWithDiscount = {name: "Shirt", price: 20, discount: 0.25};
//console.log(ProductWithDiscount(myProduct));

interface Employee{
  name: string;
  age: number;
  role: string;
}
type OptionalEmployee = Partial<Employee>;

let empleado1: OptionalEmployee ={
  name: 'juanito',
  role: 'software engineer'
}
//console.log(empleado1);

enum Priority{
  Down,
  Up,
  Middle,
  Urgent,
}
let Homework: [string,number,Priority]
Homework = ['Typescript',2, Priority.Middle]
console.log(Homework);


// ejercicio 10

function append2(cadena:String, cadena2:String){
  return cadena + " " + cadena2;
}
console.log(append2("agustin","cabrera"));

//ejercicio 11

interface Persona3{
  name: string,
  age: number,
  readonly id: number;
}
let persona2: Persona3 = {
  name: "agustin",
  age: 0,
  id: 2,
}

// ejercicio 12

interface Vehicle{
  acelerate: void;
  stop: void;
}
let vehicle: Vehicle;
class Car {
  Vehicle = vehicle;
  velocity: number = 0;
};

