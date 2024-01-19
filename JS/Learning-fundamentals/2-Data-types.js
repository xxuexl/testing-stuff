//?  1)------------------STRING----------------------------------

//Accessing to positions individually(starting from position 0) with [] .

const team = "Rocket";
console.log(team[1]); //console returns the position "o"

//CONCATENATION - Combining 2 or more strings or numbers with + .

let concatenate = "school" + 5 + 5; //string + number = Altogether
console.log(concatenate); // it returns school55.

let numberconca = 5 + 5 + "school";
console.log(numberconca); //it returns 10school(sum first)

/*We can create strings with 3 quotes: "pear", 'pear' or `pear`, and combine 
them if needed in a string. They have to be the same when opening and closing:*/

let name = "Peter, a.k.a 'Spider-man'";

//!-------- Properties-----Intrinsic characteristic----------------
//  .length : Get to know the length/longitud of a string/numbers(The positions).

const country = "Italy";
console.log(country.length); // it returns 5

//!---------Methods-----To manipulate and work with strings--------
/*1  .includes() : Allow us to know if a character or a portion of them
are within the string(substring). It returns a boolean result(False/True) */

let str = "Hello cat";
let containsWorld = str.includes("cat");
console.log(containsWorld); //returns TRUE

/*2 .slice(startIndex, endIndex) : Extracts a section of string from 
startIndex to endIndex(endIndex is exclusive) */

let World = "Hello world";
let onlyWorld = World.slice(6, 11);
console.log(onlyWorld); //returns world
