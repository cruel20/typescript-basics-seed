console.log("Hello TypeScript!");

const pizzas = [{ name: "Pepperowni", toppings: ["pepperoni"] }];

const mappedPizzas = pizzas.map((pizza, index) => pizza.name.toUpperCase());

console.log(mappedPizzas);

console.log("------------------");

const pizza = {
  name: "Blazing Inferno",
  getName: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
};
console.log(pizza.getName());

console.log("------------------");

function multiply(a: any, b = 25) {
  return a * b;
}
console.log(multiply(5, 4));

console.log("------------------");

const pizzaa = {
  name: "Pepperoni",
  price: 15
};
const toppings = ["pepperoni"];
const order = { pizzaa, toppings }; // jezeli mają takie samo key to mozna bez {pizza: pizza}
console.log(order);

console.log("------------------");

function sumAll(...arr: number[]) {
  return arr.reduce((prev, next) => prev + next);
}
console.log(sumAll(1, 2, 3, 4, 5, 10));

console.log("------------------");

const toppingss = ["bacon", "chilli"];
const newToppings = ["pepperoni"];

const allToppings = [...toppingss, ...newToppings]; // łączenie dwóch array

console.log(allToppings);

console.log("------------------");

const pizzza = {
  name: "Pepperoni",
  toppings: ["pepperoni"]
};

function orderr({ name: pizzaName, toppings }) {
  return { pizzaName, toppings };
}

const { pizzaName } = orderr(pizzza);

const toppingsss = ["pepperoni", "bacon", "chilli"];
const [one, two, three] = toppingsss;
