function myFunction(name) {
  console.log(name);
}

myFunction("Joe");
myFunction("mochi");

function searcher(item) {
  if (item == "Joe") {
    console.log("You have passed in Joe, congratulations!");
  } else {
    console.log("You have not passed in Joe!");
  }
}

searcher("Mochi");
searcher("Joe");

foods = ["pizza", "chocolate", "wagyu"];

function searchForFood(arrayOfFoods, foodToSearchFor) {
  for (let i = 0; i < arrayOfFoods.length; i++) {
    if (arrayOfFoods[i] == foodToSearchFor) {
      console.log(
        `I have found the food ${foodToSearchFor} at index ${i} arrayOfFoods[${i}]`
      );
    }
  }
}

searchForFood(foods, "wagyu");
