type Persona = {
  nombre?: string;
  anios: number;
  casas: Casa[];
};

type Casa = {
  color: string;
  m2?: number;
}
type Trabajador = {
  empresa: string;
  puesto: string;
};
type Empleado = Persona & Trabajador;

let datos: Empleado={
  anios: 22,
  empresa: 'crombie',
  casas:[{color:'verde'}],
  puesto:'back',
};

function getFirstElement<T>(arr:T[]):T{
  return arr[0];
}