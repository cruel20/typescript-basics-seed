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

console.log("------------------");

const coupon: string = "pizza25";

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log("------------------");

let coupon1: string | null = "coupon25"; //jezeli chcemy aby mialo stringa LUB null to dajemy | null

console.log("------------------");

let pizzaSize: string = "small";

function selectSize(size: "small" | "medium" | "large"): void {
  pizzaSize = size;
}

// let selectSize(size: 'small' | 'medium' | 'large'): void{
//   pizzaSize = size
// } MOZNA ZAMIAST FUNCTION DAC LET
selectSize("medium");

console.log("------------------");

let pizzass: { name: string; price: number };
pizzass = { name: "dssd", price: 20 };

console.log("------------------");

type Size = "small" | "medium" | "large"; // Custom type
type Callback = (size: Size) => void;

let pizzaSizes: Size = "small";
const selectSizes: Callback = x => {
  pizzaSize = x;
};

JSON.parse("") as Size; // to co sparsuje do jsona to będzie wykorzystywać jako typ Size

interface Sizes {
  sizes: string[];
}
interface Pizza extends Sizes {
  name: string;
  getAvailasbleSizes(): string[]; // metoda
  [key: number]: string; // dictionary - dynamiczne rozszerzenie interface o słownik
}
