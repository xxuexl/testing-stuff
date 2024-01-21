//-------------OBJECT-OBJECT-----------------------------------------
/* Colección de pares clave-valor. 
Claves = Cadenas de texto o símbolos. Valores = Cualquier tipo de dato, inclusive
otro objeto. 
Los objetos se usan para almacenar y acceder a datos de manera estructurada.*/

let emptyObject = {};

let object = {
  name: "Sue",
  age: 40,
  job: "developer",
};

//Para acceder a las propiedades de un objeto:

console.log(object.name); //Añadiendo .propiedad
console.log(object["age"]); //Entre brackets

//Modificar propiedades de objeto:
object.age = 30;
object.job = "teacher";
console.log(object["age"], object.job);

//Añadir nuevas propiedades a objeto:
object.location = "Amsterdam";
console.log(object);

//Eliminar propiedades de objeto:
delete object.age;
console.log(object);

//myAvenger.alias; undefined

/*Para acceder o establecer propiedades de objetos mediante corchetes []:
let name = "name";
myAvenger[name] = "Thor";

THIS: Palabra clave que se refiere al objeto en el cual se está ejecuantando
el código.


//------------------ENUMERAR PROPIEDADES DE OBJETOS (ES6)-----------------------------------------*/

//? BUCLE FOR...IN: Método que recorre/itera todas las propiedades
//?                                      enumerables de un objeto.

/*for (variable in objeto) {
  código a ejecutar para cada propiedad del objeto
}

variable: representa nombre de propiedad. objeto: obj sobre el cual iteramos. */

let batman = {
  nombre: "Bruce",
  localizacion: "Gotham",
};
for (let clave in batman) {
  console.log(
    "Batman tiene la clave " + clave + " con valor: " + batman[clave]
  );
}

//?  Object.keys(o): Método/función que toma un objeto(o) como argumento y devuelve
//?  un array que contiene los nombres de todas las propiedades enumerables(claves)

let persona = {
  nombre: "Juan",
  edad: 34,
  ciudad: "Bilbao",
};
let propiedades = Object.keys(persona);
console.log(propiedades);

//---------------------------------------------------------------------------------------------------

const ciudad = {
  name: "malaga",
  hab: {
    hombres: 3232323,
    mujeres: 4222343,
  },
  cp: [28007, 28009],
};

//-------> modifcar claves o añadir claves

ciudad.name = "barcelona"; // modifico
ciudad.km = 213425; // añado

console.log("🚀 ~ ciudad:", ciudad);

delete ciudad.km; // de esta forma elimino km
console.log("🚀 ~ ciudad:", ciudad);

// forma 2 de modicar o acceder a las claves
ciudad["name"] = "Gerona";

console.log("🚀 ~ ciudad:", ciudad);

// acceder al valor de la clave

const habitantes = ciudad["hab"];
const habitantesAccesoConPunto = ciudad.hab;
console.log("🚀 ~ habitantesAccesoConPunto:", habitantesAccesoConPunto);
console.log("🚀 ~ habitantes:", habitantes);
