/*---------------FUNCTIONS-------------------------------
Bloque de código que realiza una tarea específica y que puede ser reutilizado
a lo largo del programa.
Permiten una mejor organización, estructuración y comprensión del código.
Se define: 
Con palabra clave function, seguida por un nombre para la función, paréntesis
que pueden contener parámetros(variables de entrada) y un bloque de código
entre llaves {} que contiene las instrucciones que se ejecutarán 
cuando la función sea llamada.*/

function suma(a, b) {
  return a + b;
}
let result = suma(5, 4);
console.log(result);
/*Función suma toma 2 parámetros (a y b) realiza la suma y devuelve el 
resultado. Luego, la función es llamada con los valores "3 y 4" y el 
resultado se almacena en la variable "result".


/*-----------ARROW FUNCTIONS------------------------------
Forma más concisa de escribir funciones.*/

const sumando = (a, b) => {
  return a + b;
};
console.log(sumando(4, 3));

/*Si la función tiene solo una línea de código en su 
cuerpo, puedes omitir las llaves y la palabra return:*/

const sumandoAb = (a, b) => a + b;
console.log(sumandoAb(3, 3));

/*----------RETURN----------------------------------------
Se utiliza para especificar el valor que la función debe devolver cuando es
llamada. Finaliza la ejecución de la función y devuelve un resultado.*/
