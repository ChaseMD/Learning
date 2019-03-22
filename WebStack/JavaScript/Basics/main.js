/* Variables: var (global scope), let (re-assign), const (non-reassign, appendable)
 let vs const: always use const unless you KNOW you'll reassign the variable */

let score;
score = 10;

const myname = "Chase";

// Primative Datatypes: strings, numbers, boolean, null, undefined, symbol

const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const nothng = null;
const y = undefined;
let x; // = undefined

console.log(typeof name);

// Concatenation
console.log("My name is " + name + "and I am " + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

// String properties & methods
const s = "Hello World";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(" "));

// Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5, 6, 7);
const fruits = ["apple", "oranges", "halos", "pears", 10, true];
console.log(numbers);
console.log(fruits);
console.log(fruits[1]);

fruits[6] = "grapes";
console.log(fruits);
fruits.push("mangos");
console.log(fruits);
fruits.unshift("strawberries");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));

// Object Literals
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
  hobbies: ["music", "movies"],
  address: {
    street: "60th St",
    city: "NYC",
    state: "NY"
  }
};

console.log(person);
console.log(person.firstname, person.lastname, person.hobbies[1]);

const { firstname, lastname } = person; // deconstructing
console.log(firstname);
const {
  address: { city }
} = person;
console.log(city);

person.email = "j@email.com";
console.log(person);

// Array of Objects
const todos = [
  {
    id: 1,
    text: "take out trash",
    isCompleted: false
  },
  {
    id: 2,
    text: "wash dishes",
    isCompleted: false
  },
  {
    id: 3,
    text: "walk dogs",
    isCompleted: true
  }
];

console.log(todos[2].text);

const todoJSON = JSON.stringify(todos); // convert arrays to JSON
console.log(todoJSON);

// For loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// While Loops
let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

// Looping through arrays
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

for (let todo of todos) {
  // forof
  console.log(todo);
}

// high-order array methods for iteration: forEach, map, filter
todos.forEach(function(todo) {
  console.log(todo.text);
});

const todoText = todos.map(function(todo) {
  return todo.text;
});

console.log(todoText);

const todoCompleted = todos
  .filter(function(todo) {
    return todo.isCompleted === true;
  })
  .map(function(todo) {
    return todo.text;
  });

console.log(todoCompleted);

// Conditionals
const d = "10";
const e = 3;

if (d == 10 && e == 2) {
  // || for or, && for and
  // == matches value, not datatypes '10' = 10
  console.log(true);
} else {
  console.log(false);
}

if (d === 10) {
  // === matches datatype & value
  console.log(true);
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log(false);
}

// Conditional Variables
const f = 10;
const color = f > 10 ? "red" : "blue"; // ? = then, : = else

console.log(color);

// Switches
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
}

// Functions
function addNums(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}

addNums(5, 4);
addNums(4);

const subNums = (num1, num2) => {
  // Arrow Functions like Lambdas
  return num1 - num2;
};

console.log(subNums(6, 3));

const multNums = (num1, num2) => num1 * num2;
console.log(multNums(6, 3));

const divNums = num1 => num1 / 2;
console.log(divNums(6));

// Objects

// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    // method creation
    return this.dob.getFullYear();
  };
}

// Instatiate Object w/ Constructor function
const person1 = new Person("Jane", "Doe", "4-3-13");
console.log(person1.dob.getFullYear());

// Prototypes
Person.prototype.getBirthYear = this.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Class - "syntatic sugar",  recommended
class Student {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// DOM

// Selectors - Single Element
console.log(document.getElementById("my-form"));
console.log(document.querySelector(".container"));
// Multiple Element
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item")); // html collection cannot be used as arrays
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");
items.forEach(item => console.log(item));

const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "hello";
ul.children[1].innerText = "brad";
ul.lastElementChild.innerHTML = "<h1>hello</h1>";

const btn = document.querySelector(".btn");
// btn.style.background = "red";
// btn.addEventListener("mouseout", e => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value);
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please Enter All Fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}, ${emailInput.value}`)
    );

    userList.appendChild(li);
    // Clear Fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
