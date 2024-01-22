/*------------CLOSURE( CLAUSURA O CIERRE)-------------------------------
Permite que una función acceda a variables externas incluso despúes
de que la función que las creó haya finalizado su ejecución.
Las funciones en JS tienen acceso a todas las variables y funciones declaradas
en su ámbito padre y a todos los ámbitos padres anteriores.*/

const petMain = { nombre: "Mochi", edad: 2 };
const petExtra = { ...petMain, raza: "Kurilian Bobtail" };
console.log(petExtra);
