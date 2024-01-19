


//todo-------------CONST-------OBJECT- ARRAY------------------------------------------------------------

const data = []; //empty inicialization
data[0] = "car";
data.push("Tesla"); //pushing this at the end of data(car)
console.log(data);

//todo-------------CONST------OBJECT-OBJECT------------------------------------------------------------

const pokemon = {
  name: "Pikachu",
  type: "electric",
};
pokemon.strength = "quite strong";
console.log(pokemon);
//Added a strength property with a new value, and the console returns everything.

let student1 = {
  profile: ["Paula", 55],
};

let student2 = {
  profile: ["Joe", 55],
};

if (student1.profile !== student2.profile) {
  console.log("they are not the same");
}
//  "!==" Opposite statement. 
