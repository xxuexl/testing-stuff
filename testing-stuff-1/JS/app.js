//About const in arrays and objects

//Objects are keys and values pairs.
const dictionary = {
  name: "joe",
  likes: "cats",
};
dictionary.name = "chu";
console.log(dictionary);

//Arrays are ordered lists.
const people = [];

people[0] = "loki";
people[1] = "mochi";
console.log(people[0]);

const colours = ["blue", "green", "red"];
colours[1] = "pink";
console.log(colours[1]);

let x = 5;
x += 3;
console.log(x);
x /= 6;
console.log(x);

let y = 0;
y++;
console.log(y);

let d = 5;
let e = 3;
d += e;
console.log(d);

let f = 5;
f += 3 + 4;
console.log("🚀 ~ f:", f);

let txt = typeof true;
console.log(typeof true);
console.log("My test");
console.log("3" === 3);
