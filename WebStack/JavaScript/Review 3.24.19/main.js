// Reference: freeCodeCamp.org - Learn JavaScript, Full Course For Beginners
// link: https://www.youtube.com/watch?v=PkZNo7MFNFg

// Comments
/* Multiline comment */

// Date types: undefined, null, boolean, string, symbol, number, object
var myName = "Chase";
myname = "Dooley";

let yourName = "Dylan";

const pi = 3.14; // const are immutable

// Assigning & Declaring
var a; // declaration, uninitalization - undefined value
var b = 2; // declaration, assignment, initialization
a = 7; // assignment (reassignment)
b = a; // assigned contents of a to b

// Variable Names are case sensitive
var StudyCap;
var studyCap; // recommended, camelCase

// Counters, incrementation
var count = 2;
count = count + 1;
count++;
count--;

// Decimals / Floats
var dec = 5.216;

// Remainder operator or mod operator
var rem;
rem = 11 % 3;

// += operator
var d = 2;
d += 3;
d -= 5;
d *= 5;
d /= 5;

// String literals - "foo", 'b', `ar`
var name = "Doggo";

/* Escape chars
\' single
\" double
\\ backslash
\n newline'
\r carriage return
\t tab
\b backspace
\f form feed
*/

//escape quotes
var str = 'This is a " string';
var str2 = 'Hello, "string"';

// Length of string - .length()
// Indices of string - string[i]

// Strings are immutable
var immStr = "Jello World";
// immStr[0] = "H"; dosen't work
immStr = "Hello World"; // must reassign whole variable

// Arrays
var thisArray = ["What", "A", "Cool", 23, ["2d", "array"]];
var eleArray1 = thisArray[4][1];

thisArray.push(["new", "Array"]); // appends array
thisArray.pop(); // removes and returns last element of array
thisArray.shift(); // removes and returns first element of array
thisArray.unshift("wow"); // prepends array

// Functions
function print(param) {
  console.log(param);
}

// print("Hello");
// print(3);
// print([1, 2, 3, 4]);

// Scope
var globalVar = 103; // global var

function wowFunct() {
  isGlobalVar = 5; // not putting var makes it global
  var notGlobalVar = 6; // is local, not global
}

function returnFive() {
  return 5;
}

// Queues
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

// Conditions
function isCondition(isTrue) {
  if (isTrue) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Testing equality
function isEqual(a, b) {
  if (a == b) {
    // compares value only, converts mismatched data types ('3' => 3)
    return true;
  } else {
    return false;
  }
}

// Strict equality
function isStrictEqual(a, b) {
  if (a === b) {
    // compares value and data type
    return true;
  } else {
    return false;
  }
}

// Equality operators
function isGreater(a, b) {
  if (a > b) {
    console.log("a is greater than b");
  } else if (a === b) {
    console.log("a is b");
  } else {
    console.log("a is less than b");
  }
}

// Logical statements
function isLogic(a, b) {
  if (a >= 5 && b <= 5) {
    // true/true = true, false/false = false; true/false = false
    console.log("yay");
  } else {
    console.log("nay");
  }
}
function isLogic(a, b) {
  if (a >= 5 || b <= 5) {
    // true/false = true, true/true = true, false/false = false
    console.log("yay");
  } else {
    console.log("nay");
  }
}

// Case/Switch

function caseSwitch(val) {
  var ans = "";
  switch (val) {
    case 1:
      ans = "alpha";
      break;
    case 2:
      ans = "bravo";
      break;
    case 3:
    case 4:
    case 5:
      ans = "345";
      break;
    default:
      ans = "idek";
  }
  return ans;
}

// Return boolean values
function isLess(a, b) {
  return a < b; // logics return bools
}

// Objects
var myCat = {
  name: "Ginger",
  legs: 4,
  "has fleas": false,
  is_stray: false
};

var newDog = {
  name: "Rover",
  tail: true,
  "has fleas": true
};

// Getting object properties
var animalNames = [myCat.name, newDog.name];
var catFleas = myCat["has fleas"]; // must do this if the property has a space in it

// Mutating properties
newDog["has fleas"] = false;
myCat.tail = true;
delete myCat.is_stray;

// Objects for lookup values
function alphabet(val) {
  var lookup = {
    A: "Awesome",
    B: "Bad",
    C: "Chase",
    D: "Doog"
  };

  return lookup[val];
  // switch (val) {
  //   case "A":
  //     result = "Awesome";
  //     break;
  //   case "B":
  //     result = "Bad";
  //     break;
  //   case "D":
  //     result = "Doable";
  //     break;
  //   case "C":
  //     result = "Chase";
  //     break;
  //   default:
  //     result = "What";
  //     break;
  // }
}

// Testing object properties
var thisObj = {
  gift: "box",
  bed: "box"
};

function checkForProperty(objProperty) {
  return thisObj.hasOwnProperty(objProperty);
}

// ParseInt - str to int
function covertToInt(str, base) {
  return PareseInt(str, base);
}

//  Ternary Operator: condition ? statement-if-true : statement if false
function checkEqual(a, b) {
  return a === b ? true : false;
}

// Multiple conditionals
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "Zero";
}

// Var vs Let
// Lets cannot be declared twice in the same scope
let notMyName = "Bob";
// let myName = "Chase"; can't be done
notMyName = "Dylan"; // can be done

/* Use Strict: 
1) elmins some silent errors to throws, 
2) fixes mistakes that degrade optimization performance, 
3) prohibits syntax defined in ECMAScript */
function talkingDog() {
  "use strict";
}

// Let's scope is limited to its block scope
function checkScope() {
  "use strict";
  var i = "function scope"; // var i = block, block
  let j = "function scope"; // let j = block, function
  if (true) {
    i = "block scope";
    let j = "block scope";
    // console.log("block i is: ", i);
    // console.log("block j is: ", j);
  }
  // console.log("funct i is: ", i);
  // console.log("funct j is: ", j);
}

checkScope();

// Const : all features of let but read-only; no-reassign
const sentence = "foo" + "bar";
// sentence += " fubar";
const COLUMNS = 120; // best practice, consts are all-caps

// if you know you'll absolutely never reassign the variable, use const
// else use let (or var in certain circumstances)

// can mutate const arrays
const s = [5, 3, 1];
s[0] = 4;

// Preventing object mutation - object.freeze
const MATH_CONSTS = {
  PI: 3.14,
  GR: 1.618,
  IGR: 0.618
};

Object.freeze(MATH_CONSTS);

// Anonymous Functions / Arrow functions != lambda functions (lambdas are used as data)
var anonFunction = function() {
  return "foo";
};
var arrowFunction = () => {
  return "bar";
};
var shortArrowFunction = () => "foobar";

// Arrows with High Order Array Functions
const squareList = myIntArray => {
  const squaredInts = arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(x => x * x);
  return squaredInts;
};

// High Order Arrows
const incr = (function() {
  return function incr(num, val = 1) {
    return num + val;
  };
})();
// console.log(incr(5, 2));
// console.log(incr(5));

// Rest params - accept an unspecificed amount of params
const sumTheseInts = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
// console.log(sumTheseInts(1, 2, 3));
// console.log(sumTheseInts(1, 2, 3, 4, 5, 6));

// Spread operator - spreads an array into individual parts
// only used as argument or literal
const someVegetables = ["potato", "tomato", "peas", "onion", "garlic"];
let someMoreVegetables;
(function() {
  someMoreVegetables = [...someVegetables];
});

// Destructuring
var voxel = { x: 3.2, y: 5.1, z: 2.68 };

const { x: aaa, y: bbb, z: ccc } = voxel; // a=3.2, b=5.1, c=2.68

// Destructuring with rest paramaters
const source = [1, 2, 3, 4, 5, 6, 7];
function removeTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeTwo(source);
// console.log(arr);
// console.log(source);

// Desctructuring as a function's param - often used with API calls
const stats = {
  max: 35,
  min: -42.1,
  std: 1.35
};

const half = function() {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
};

// Template literals
let userName = "ChaseMD";
const greeting = `Hi, ${userName}`;
// console.log(greeting);

// Concise defining of object literals
const createPerson = (personName, personAge, personGender) => ({
  personName,
  personAge,
  personGender
});

// Concise declarative functions
const bicycle = {
  gear: 2,
  setGear(newGear) {
    // new function
    "use strict";
    this.gear = newGear;
  }
};

// Class syntax for constructor function
// classic way:
var SpaceShuttle = function(target) {
  this.target = target;
};
var zeus = new SpaceShuttle("ISS");

// class syntax:
class Rocket {
  constructor(target) {
    this.target = target;
  }
}
var zeus = new SpaceShuttle("Mars");

// Getters and setters
class Book {
  constructor(author) {
    //   this._author = author;
    //   //getter
    //   get writer() = {
    //     return this._author
    //   }
    //   // setter
    //   set writer(new) = {
    //     this._author = new
    //   }
  }
}

// import vs require
import { capitalizeString } from "capitalizeString";
import * as capitalizeString from "capitalizeString";

// export default = export one thing from a file
// import export default
import capitalizeString from "capitalizeString";
