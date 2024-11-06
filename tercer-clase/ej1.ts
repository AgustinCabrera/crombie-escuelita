interface Animal {
  nombre: string;
  edad: number;
};
interface Perro extends Animal{
  raza: string;
  adiestrado: boolean;
};

let perrito: Perro = {
  raza: 'bulldog',
  adiestrado: false,
  nombre: 'cuchufo',
  edad: 25,
}

type EstadoCivil = "soltero"| "casado" | "divorciado" | "viudo"

type Persona2 = {
  nombre?: string,
  edad?: number,
  estadoCivil?: EstadoCivil;
}

let persona1 = {
  nombre: 'agustin',
  estadoCivil: "viudo",
};


type Ubicacion = {
  latitud: number,
  longitud: number,
}

type Direccion = {
  calle: string,
  ciudad: string,
}

type UbicacionCompleta = Ubicacion & Direccion;

let datosUbicacion: UbicacionCompleta = {
  calle: 'oscuridad',
  ciudad: 'parana',
  latitud: 444,
  longitud: 555,
}

// ej 4

type Id = number | string

function getId(id:Id){
  if(id === 'String'){
    console.log("The id type is string");
  }
  else if (id === 'Number'){
    console.log("The id type is Number");
  }
};

getId(5);

//ej5
type OperacionBinaria = (a:number, b:number) => number;
const suma: OperacionBinaria =(a,b) => a+b;
const multiplicacion: OperacionBinaria =(a,b) => a*b;

const resultadoSuma = suma(7,8);
console.log(resultadoSuma);

//ej6

interface Traducciones {
  [idioma: string]:string;
}
const traduccionesSaludo: Traducciones = {
  en: 'hello',
  es: 'hola'
};
traduccionesSaludo["it"] = 'ciao';


