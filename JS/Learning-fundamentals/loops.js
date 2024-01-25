/*-----------LOOPS/BUCLES---------------------------------------
Sirven para ejecutar una acción o conjunto de acciones varias veces,
según una condición o una serie de ellas.
TIPOS: 


BUCLE FOREACH:
Como bucle For pero con una estructura más funcional. Se utiliza para recorrer 
solo arrays.




/* BUCLE FOR OF from ES6
Atajo. Automáticamente nos devuelve valores de los elementos actuales iterando
a través del objeto. Este bucle itera a lo lago de objetos iterables como Array,
map,string,arguments...Principalmente arrays.
for(variable of objeto iterable){

}    */

let name = "Master Khan";
for (let word of name) {
  console.log(word);
}

/*FOR IN
Para recorrer todos los índices del objeto para obtener la propiedad enumerable.
En un array obtendremos la posición de cada uno de los elementos y en el caso 
de un objeto obtendremos la clave. Principalmente for object object.
EL FOR IN NOS DA LAS CLAVES DEL OBJETO Y CON ESO SACAMOS EL VALOR DE LA CLAVE OBJECT[NOMBRE_DE_ LA_CLAVE]
*/
// Objeto
let batman = {
  nombre: "Bruce",
  apellidos: "Wayne",
  localizacion: "Gotham",
  profesion: "Multimillonario",
};

for (let clave in batman) {
  console.log(
    "Batman tiene la clave " + clave + " con valor: " + batman[clave]
  );
}

//return
//Batman tiene la clave nombre con valor: Bruce
//Batman tiene la clave apellidos con valor: Wayne
//Batman tiene la clave localizacion con valor: Gotham
//Batman tiene la clave profesion con valor: Multimillonario

/*---------------for of vs. for in---------------------------------------------------------------------
for-of solamente puede iterar en objetos iterables, en cambio, for-in puede
 iterar en cualquier tipo de objeto. Otra diferencia, es que for-in devuelve 
 las claves y for-of los valores.*/

let dieHardArray = [1, 2, "Simon", "John McClane", "Zeus Carver"];

let dieHardObj = {
  name: "John",
  surname: "McClane",
  age: 37,
};

// Iterar un Array
for (let value of dieHardArray) {
  console.log(value);
}
/*
for (let key in dieHardArray) {
  console.log(key);
}

// Iterar un Objeto

for (let key in dieHardObj) {
  console.log(key);
}

for (let value of dieHardObj) {
  console.log(value);
}   */

/*----------for of vs. for each----------------------------------------------------

var backToTheFutureArray = [21, 10, 2015, "Delorean"];
var backToTheFutureString = "Dr.Emmett Brown";

// Iterar un Array
for (let value of backToTheFutureArray) {
  console.log(value);
}

backToTheFutureArray.forEach((value, index) => {
  // podemos acceder al índice
  console.log(value, index);
});

// Iterar un String
for (let value of backToTheFutureString) {
  console.log(value);
}

backToTheFutureString.forEach((value, index) => {
  console.log(value, index);
});    */

//?-------------------------------------------------------------------------------------
/* FOR
Para ejecutar un código un núm determinado de veces:
for (inicialización;condición;actualización,) {
    código a ejecutar
}
Inicialización - Suele utilizarse para inicializar una variable de control.
Condición - Se evalua al principio de cada iteración del bucle y si se cumple,
se ejecuta el bloque de código.
Actualización - Se ejecuta al final de cada iteración del bucle.*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/* WHILE
Para ejecutar un bloque de código se ejecuta mientras se cumpla una determinada
condición:
while(condición) {
    código a ejecutar
}        */

let numero = 1;
while (numero <= 10) {
  console.log(numero);
  numero++;
}
