//-------------------ARRAYS METHODS--------------------------------

/* map() : Permite aplicar una función a cada elemento de un array y devuelve 
un nuevo array con los resultados. Para extraer elementos de un array de una forma rápida*/

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

const users = [
  { name: "Joe", age: 30 },
  { name: "Susan", age: 39 },
  { name: "Paco", age: 34 },
];
const usernames = users.map((user) => user.name);
console.log(usernames);

/* filter() : Permite filtrar elementos de un array en función de una condición
dada y devolver un nuevo array con los elementos que cumplen esa condición.
Para extraer elementos de un array de una forma rápida y sencilla.*/

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers2.filter((numbers2) => numbers2 % 2 === 0);
console.log(evenNumbers); //devuelve 2,4,6,8,10
