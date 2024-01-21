/*-------------------CONDITIONALS-------------------------------
Permite ejecutar un bloque de código sólo si se cumple una determinada condición.
TIPOS: IF, IF... ELSE, IF...ELSE IF...ELSE,SWITCH.

/*--------------IF---------------------------------------------
La más básica. Sintaxis:
if(condición){
    bloque de código a ejecutar si se cumple la condición
}    */

let age = 19;
if (age >= 18) {
  console.log("Eres mayor de edad!");
} //En este caso la condición se cumple por lo que se ejecuta el código del bloque.

let bestie = "Merlin";
if (bestie == "Merlin") console.log("Whow, he is the best");

/*-----------IF... ELSE------------------------------------------------------
Se utiliza para ejecutar un bloque de código si se cumple una condición y
OTRO BLOQUE DE CÓDIGO SI NO SE CUMPLE. En nuestra sentencia if, tenemos el 
bloque else, que es opcional. Este se ejecutaría cuando la condición es falsa.
Sintaxis:*/

let ageMinor = 15;
if (ageMinor <= 18) {
  console.log("Eres menor de edad!");
} else {
  console.log("Eres mayor de edad");
}

let name = "Antonio";

if (name == "Antonio") {
  console.log("¡Woh, eres un fan de React!");
} else {
  console.log("Ohhh, te gusta Angular :(");
}

/*----------IF...ELSE---IF...ELSE---------------------------------------------
Se utiliza para evaluar varias condiciones de manera secuencial. Sintaxis:
if(condición1){
    código a ejecutar si se cumple la condición1
} else if(condición2){
    código a ejecutar si no se cumple la condición
}    */

let name2 = "Antonio";

if (name2 == "Antonio") {
  console.log("¡Woh, eres un fan de React!");
} else if (name == "Alberto") {
  console.log("¡Woh, eres un fan de Angular!");
} else {
  console.log("ohhh, te gusta la programación? ");
}

/*---------CONDITIONALS & BOOLEANS---------------------------------------------
En una sentencia if(...), se evalúa la expresión dentro de los paréntesis
y se convierte el resultado en booleano TRUE OR FALSE.
- Núm 0, un string vacío "", null, undefined y NaN se convierte en false. Son
valores false.
- El resto de valores son true, valores verdadero.

El código bajo las condiciones false nunca se ejecutaría y en las true lo hará. */

if (0) {
  console.log("No me ejecuto");
}
if (1) {
  console.log("Hola 👋 Students");
}

/*-------------------TERNARIO-------------------------------------------------
Se representa con ? .  Tiene 3 operandos:
let result = condition? value1: value2;
  //Se evalúa condition: Si es verdadera entonces devuelve el 1º valor, 
de lo contrario el segundo valor. */

let accessAllowed = age > 18 ? true : false;

/*---------------------SWITCH---------------------------------------------------
Anida múltiples instrucciones de tipo if...else. Ésto es útil si se tiene un núm.
elevado de condiciones y aporta una mayor limpieza al código.*/

if (age >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

const evaluarEdad = (edad) => {
  switch (edad) {
    case 18:
      return "tienes 18 años";

    //break;

    default:
      return "no tienes 18 años";
  }
};
