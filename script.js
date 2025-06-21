// In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase — before code is executed.

// 1. function declaration

// Function declarations are fully hoisted — both the name and the body.

// greet();

// function greet() {
//   console.log("hello");
// }

// greet();

// 2. var declaration

// Only the declaration is hoisted, not the initialization.

// console.log(a);
// var a = 5;

// var a;
// console.log(a);
// a = 5;

// 3. let and const - They are hoisted, but not initialized. They exist in a "Temporal Dead Zone" (TDZ)" until the line where they are declared.

// console.log(b);
// let b = 4;

// Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution. Only declarations are hoisted, not initializations.

// •	var declarations are hoisted and initialized with undefined.
// •	let and const are hoisted but not initialized (they are in a "temporal dead zone" until their declaration is evaluated).

// -- closure
// In JavaScript, a closure is created when a function retains access to variables from its outer (enclosing) scope, even after that outer function has finished executing.

// A closure is a function that "remembers" its lexical scope even when it's executed outside that scope.

//inner function outer function ki updated value ko hold krke rkhega

// function hello() {
//   var count = 0;
//   return function () {
//     count += 1;

//     return count;
//   };
// }

// const counter = hello();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }

// const counter = outer(); // `outer` returns `inner`, and `count` is preserved
// counter();
// counter();
// counter();
// counter();

// function greet(name) {
//   return function (message) {
//     console.log(`${message}, ${name}!`);
//   };
// }

// const greetNadeem = greet("Nadeem");
// greetNadeem("Hello"); // Hello, Nadeem!
// greetNadeem("Welcome"); // Welcome, Nadeem!

// 2. data type
// String, number, boolean, null, undefined, object, symbol.

// let isActive = true;
// let score = 100;

// 3. Operators
// JavaScript provides arithmetic, assignment, comparison, and logical operators.
// Arithmetic Operators:
// •	+ Addition: 5 + 2 results in 7
// •	- Subtraction: 5 - 2 results in 3
// •	* Multiplication: 5 * 2 results in 10
// •	/ Division: 5 / 2 results in 2.5
// •	% Modulus (remainder): 5 % 2 results in 1
// •	** Exponentiation: 2 ** 3 results in 8
// Assignment Operators:
// •	= Assign value: x = 10
// •	+= Add and assign: x += 5 is the same as x = x + 5
// •	-= Subtract and assign: x -= 3 is the same as x = x - 3
// •	*= Multiply and assign: x *= 2 is the same as x = x * 2
// •	/= Divide and assign: x /= 4 is the same as x = x / 4
// •	%= Modulus and assign: x %= 2 is the same as x = x % 2
// Comparison Operators:
// •	== Equal (loose): '5' == 5 is true
// •	=== Equal (strict): '5' === 5 is false
// •	!= Not equal (loose): '5' != 5 is false
// •	!== Not equal (strict): '5' !== 5 is true
// •	> Greater than: 6 > 5 is true
// •	< Less than: 4 < 5 is true
// •	>= Greater than or equal: 5 >= 5 is true
// •	<= Less than or equal: 3 <= 2 is false
// Logical Operators:
// •	&& Logical AND: true && false is false
// •	|| Logical OR: true || false is true
// •	! Logical NOT: !true is false
// Pre-Increment vs Post-Increment:
// •	++a (pre-increment): Increments first, then returns the new value.
// let a = 5;
// let b = ++a; // a = 6, b = 6

// •	a++ (post-increment): Returns the current value, then increments.
// let a = 5;
// let b = a++; // b = 5, a = 6

// •	The same applies to --a vs a-- (pre and post-decrement).
// Example:
// let sum = 5 + 3;
// let isEqual = (10 === '10'); // false

// let a = 10;
// // let b = ++a;
// let c = a++;
// console.log(a, c);

// let a = 10;
// let b = --a;
// // let c = a--;
// console.log(a, b);

// 4. Conditionals (if, else, switch)
// Conditionals are used to perform different actions based on conditions.
// Example (if):
// if (score > 90) {
//     console.log("Excellent");
// }

// Example (switch):
// const grade = 'B';

// switch (grade) {
//     case 'A':
//         console.log("Great job!");
//         break;
//     case 'B':
//         console.log("Good work!");
//         break;
//     case 'C':
//         console.log("Keep improving!");
//         break;
//     default:
//         console.log("Try harder next time!");
// }

// 5. Loops (for, while, do-while, for...of, for...in)
// Loops repeat actions until a condition is false.
// for Loop
// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
// }

// while Loop
// let count = 0;
// while (count < 3) {
//     console.log(count); // 0, 1, 2
// count++;
// }

// do...while Loop
// let num = 0;
// do {
//     console.log(num); // 0, 1, 2
//     num++;
// } while (num < 3);

// for...of Loop (Iterates over iterable objects like arrays)
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log(fruit); // apple, banana, cherry
// }

// for...in Loop (Iterates over enumerable properties of an object)
// const user = { name: "Alice", age: 30 };
// for (const key in user) {
//     console.log(key, user[key]); // name Alice, age 30
// }

// -> for loop
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write("* ");
//   }
//   document.write("</br>");
// }

// // -> while loop
// let j = 1;
// while (j <= 5) {
//   console.log("while" + j);
//   j++;
// }

// // -> do while

// let k = 1;
// do {
//   console.log("do while" + k);
//   k++;
// } while (k <= 5);

// // -> for of loop

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (const el of arr) {
//   console.log(el);
// }

// const fruits = ["apple", "mango", "kiwi", "banana"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // -> for in loop

// const user = { name: "nadeem", age: 27 };

// for (const key in user) {
//   console.log(key + " : " + user[key]);
// }

// // 6. Functions (Declaration, Expression, Arrow)
// // Functions allow code reuse. Arrow functions provide a shorter syntax.

// // -> arrow function

// const greet = (name) => console.log(`hello ${name}`);

// greet("nadeem, how are you");

// // -> function declaration

// function greet1(name) {
//   console.log(`hello ${name}`);
// }

// greet1("function declaration");

// //function expresion

// const greet2 = function (name) {
//   console.log(`hello ${name}`);
// };

// greet2("function expresion");

// // 7. Template Literals
// // Template literals allow embedded expressions using backticks

// const name = "template literals";

// console.log(`hello ${name}`);

// 8. Truthy & Falsy Values
// Certain values evaluate to true or false in conditionals.
// These values are considered false when evaluated in a Boolean context:
// Example:
// if (0) console.log("No"); // Won't run

// False,0,-0, Null Undefined, NaN
// 0n       // BigInt zero
// ""       // Empty string

// Any value not falsy is considered truthy, including:
// true
// {}       // Empty object
// []       // Empty array
// " "      // Non-empty string (even just a space)
// "false"  // Non-empty string

// ("use strict");
// a = 10;
// console.log(a);

// Why use strict mode?
// •	Makes debugging easier
// •	Prevents silent bugs
// •	Ensures better compatibility with future JavaScript versions

// -> string method

// const str = "  Javascript Is a Best ";

// console.log(str.length);
// console.log(str.charAt(4));
// console.log(str.charCodeAt(3));

// //text conversion
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// //searching & matching
// console.log(str.includes("es")); //return true & false
// console.log(str.indexOf("a")); //retuen index value
// console.log(str.lastIndexOf("B"));
// console.log(str.startsWith("Jav"));
// console.log(str.endsWith("est"));

// //extraction
// console.log(str.slice(0, -1)); //extract part of a string
// console.log(str.substring(1, 6)); //similar to slice but does not accept negative indexes
// console.log(str.substr(5, 10));

// //replacing and modifying
// console.log(str.replace("Best", "programing language")); //replace the first match
// console.log(str.replace("B", "c"));
// console.log(str.replaceAll("a", "b")); //replce all the matches
// // console.log(str.trim()); //remove white space both ends
// console.log(str.trimStart()); //remove white space from starting
// console.log(str.trimEnd()); //remove white space from ending

// //spliting and joining
// console.log("a,b,c".split(",")); //splits a stirng into array
// console.log("string".split("")); //convert into array
// console.log(str.concat("programing language")); //combines string
// console.log("nadeem".repeat(5));

// Objects
// 1. Object Creation & Access
// Objects store key-value pairs and can be accessed using dot or bracket notation.
// Example:
// const user = { name: "Alice", age: 30 };
// console.log(user.name, user.age);
// console.log(user["name"], user["age"]);

// const { name: userName, age: userAge, job = "devloper" } = user;
// console.log(userName, userAge, job);

// const person = {
//   greet() {
//     return "hi";
//   },
// };

// const greet = person.greet();
// console.log(greet);

// // Object.keys(obj): Returns an array of the object&#39;s own property names.
// console.log(Object.keys(user));
// const objKeys = Object.keys(user);
// console.log(objKeys);

// // Object.values(obj): Returns an array of the object&#39;s own property values.
// console.log(Object.values(user));

// //  Object.entries(obj): Returns an array of [key, value] pairs.
// console.log(Object.entries(user));
// const objEntries = Object.entries(user);
// console.log(objEntries[0][1]);
// console.log(objEntries[1][1]);

// // hasOwnProperty(prop): Checks if the object has the specified property as its
// // own (not inherited).

// console.log(user.hasOwnProperty("name"));
// console.log(user.hasOwnProperty("age"));
// console.log(user.hasOwnProperty("Name"));

// // Object.hasOwn(obj, prop): (ES2022+) Checks if the object has the property as
// // its own.

// console.log(Object.hasOwn(user, "name"));
// console.log(Object.hasOwn(user, "Name"));

// // Object.assign(target, ...sources): Copies properties from source objects to a
// // target object.

// const extra = { role: "admin" };
// const merged = Object.assign({}, user, extra);
// console.log(merged);

// //array of object

// const arr = [
//   { name: "nadeem", email: "abc@gmail.com" },
//   { name: "juber", email: "jub@gmail.com" },
//   { name: "baseer", email: "bas@gmail.com" },
// ];

// const newArr = ([{ name: devName, email }] = arr);
// // console.log(devName, email);
// console.log(newArr);
// console.log(arr);
// console.log(devName);

// //spread operator
// // Used to expand elements of an array or object.

// //in array
// const nums = [1, 2, 3];
// const newNums = [...nums, 4, 5, 6];
// console.log(newNums);

// //in object
// const updatedUser = { ...user, age: 50, city: "delhi" };
// console.log(updatedUser);

// //in function
// function add(a, b, c) {
//   console.log(a + b + c);
// }

// const number = [10, 2, 3];
// add(...number);

// array.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, initialValue);
// accumulator: stores the result from the previous iteration

// currentValue: the current array element

// initialValue: the starting value for the accumulator

// 🧠 Example 1: Sum of Array Elements
// javascript
// Copy
// Edit
// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10

//rest operator
// Used to collect remaining elements into an array or object.

//in function
// function add1(...args) {
//   return args.reduce((total, num) => total + num, 0);
// }

// console.log(add1(1, 2, 3, 4, 5, 6, 7, 8));

// //in object destructuring

// const person = { name: "nadeem", age: "27", city: "jodhpur" };
// console.log(person);

// const { name: userName, ...other } = person;
// console.log(userName, other);

// optional chaining (?.)
// Optional chaining allows you to safely access deeply nested properties of an object without having to check each level manually.

// const users = [{ name: "Bob" }];
// console.log(users?.[0]?.name); // 'Bob'
// console.log(users?.[1]?.name); // undefined

// const user = {
//   name: "nadeem",
//   address: {
//     city: "jodhpur",
//   },
// };

// console.log(user.address?.city);
// console.log(user.address?.pin);
// console.log(user.address?.bio);

//ARRAY
// Arrays hold lists of items and are accessed by index.

// const fruits = ["apple", "banana"];
// console.log(fruits[0]);

// //array method

// console.log(fruits);
// console.log(fruits.push("mango")); //add item to end
// console.log(fruits);
// fruits.pop(); //remove item to end
// console.log(fruits);
// fruits.shift(); //remove item to start
// console.log(fruits);
// fruits.unshift("mango"); //add item to start
// console.log(fruits);

// const nums = [1, 2, 3, 4, 5, 6];
// const squres = nums.map((n) => n * n); //Transform each item
// console.log(squres);
// console.log(nums);

// const even = nums.filter((n) => n % 2 == 0); //filter item
// console.log(even);

// const sum = nums.reduce((a, b) => a + b, 0); //reduce to single value-sum
// console.log(sum);

// nums.forEach((item) => console.log(item)); //loop through array

// const users = [{ id: 1 }, { id: 2 }];
// const user = users.find((u) => u.id === 2); // { id: 2 } // find first match

// console.log(nums.includes(5));

// fruits.push("mango");
// console.log(fruits);

// console.log(fruits.indexOf("mango"));
// console.log(fruits.lastIndexOf("mango"));

// const part = nums.slice(1, 5); //Extract portion (doesn’t modify original)
// console.log(part);

// nums.splice(1, 4); //Add/remove items (modifies original)
// console.log(nums);

// const nums1 = [2, 1, 5, 3, 8, 6, 4, 7];
// console.log(nums1.sort());

// console.log(nums1.reverse());

// //SET
// // A Set is a collection of unique values (no duplicates allowed).

// // add(value)	    Adds a value
// // delete(value)	Deletes a value
// // has(value)	    Checks if value exists
// // clear()	        Removes all values
// // size	            Number of items

// const mySet = new Set([1, 2, 3, 4, 2, 3, 5]);
// console.log(mySet);

// mySet.add(7);
// mySet.add(8);
// mySet.add(9);
// console.log(mySet);
// mySet.delete(8);
// console.log(mySet);
// console.log(mySet.has(2));
// console.log(mySet.size);
// // mySet.clear();
// // console.log(mySet);

// //looping though a set
// for (let set of mySet) {
//   console.log(set);
// }

// //MAP

// // A Map is a key-value pair collection where keys can be of any type.
// //Collection of key-value pairs (like an object but more powerful)

// const map = new Map();
// console.log(map);
// map.set("name", "nadeem");
// map.set("age", 30);
// console.log(map);

// //method
// // set(key, value)	 Adds/updates value
// // get(key)	         Retrieves value
// // has(key)	         Checks if key exists
// // delete(key)	     Removes key
// // clear()	         Clears map
// // size	             Number of entries

// console.log(map.get("name"));
// map.set(1, "jodhpur");
// map.set(2, "jaipur");
// console.log(map.get(2));

//1. Arrow Functions
// Arrow functions provide a shorter syntax and lexical this.

// const add = (a, b) => a + b;
// console.log(add(5, 10));

// // No need for the function keyword.
// // Implicit return for single expressions (no need for {} and return).
// // No parentheses needed for a single parameter.

// // Arrow functions do not have their own this. They inherit it from the surrounding scope.

// // const user = {
// //   name: "nadeem",
// //   greet: () => {
// //     console.log(this.name);
// //   },
// // };

// // user.greet(); // not print name because of arrow function have not own this keyword

// const user = {
//   name: "nadeem",
//   greet: function () {
//     console.log(this.name);
//   },
// };

// user.greet(); //print name

// // CLOSURE
// // Closure तब बनता है जब कोई inner function, अपने outer function के variables को उसके execution के बाद भी access करता है।
// //एक ऐसा function जो अपने आस-पास के environment (scope) को "याद" रखता है, भले ही outer function खत्म हो चुका हो।

// function outer() {
//   const name = "nadeem";

//   function inner() {
//     console.log(`hello ${name}`);
//   }
//   return inner;
// }

// const greet = outer();
// greet();

// //outer() खत्म हो गया, लेकिन उसका variable name अभी भी memory में है।
// // क्योंकि inner() function ने उसे "बंद" (close) करके रख लिया — यही है closure।

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = createCounter();
// counter();
// counter();
// counter();
// counter();

//4. Destructuring (Array & Object)
//Destructuring allows you to pull values from arrays or objects into variables.

//array destructuring
//Array destructuring is a way to unpack values from arrays into individual variables using a simple and clean syntax. It was introduced in ES6 (ES2015).

// const arr = [10, 20, 30, 40, 50, 60];

// const [a, b, c, d] = arr; //in simple way using destructuring
// console.log(a, b, c, d);

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// console.log(a, b, c, d); //using array index

//skip elements

// const [first, , , last] = arr;
// console.log(first, last);

// //string convet into array
// const str = "nadeem";
// const strArr = [...str];
// console.log(strArr);

// //values convert into array
// // const a = 1;
// // const b = 2;
// // const c = 3;

// // const arr = [a, b, c];
// // console.log(arr);

// //using rest operator
// const [a, b, ...others] = arr;
// console.log(a, b, others);

// //default value

// const arr1 = [10];
// const [i = 1, j = 2] = arr1;
// console.log(i, j);

// //swaping values

// const originalVal = ["first", "second"];

// const [second, first] = originalVal;
// console.log(first, second);

// let x = 1,
//   y = 2;
// console.log("before swaping");
// console.log("x :" + x, "y: " + y);
// [x, y] = [y, x];
// console.log("after swaping");
// console.log("x :" + x, "y: " + y);

//nested destructuring

// const arr2 = [10, 20, [30, 40]];
// console.log(arr2);

// const [a, b, [c, d]] = arr2;
// console.log(a, b, c, d);

// //object destructuring

// // Object destructuring allows you to extract properties from an object and assign them to variables using a clean, shorthand syntax. Introduced in ES6, it improves code readability and efficiency.

// const user = { name: "nadeem", age: 27 };
// const { name, age } = user;
// console.log(name, age);

//rename variable

// const [{ name: userName, age: userAge }] = user;
// console.log(userName, userAge);

// console.log(user);

//default value
// const { name, age, city = "jodhpur" } = user;
// console.log(name, age, city);

const obj = [
  { name: "nadeem", city: "jodhpur" },
  { name: "zuber", city: "jaipur" },
  { name: "baseer", city: "ajmer" },
];

console.log(obj);

const newObj = ([{ name: userName, city }] = obj);
console.log(newObj);
console.log(userName);

// const [{ name: userName, city }] = obj;
// console.log(userName, city);

//rename keys
const users = [
  { name: "nadeem", city: "jodhpur" },
  { name: "zuber", city: "jaipur" },
];
console.log(users);
const updatedUsers = users.map(({ name, ...rest }) => ({
  userName: name,
  ...rest,
}));

console.log(updatedUsers);

// 1. Exporting and Importing

//Modules in JavaScript help you split your code into smaller, reusable files. They keep code organized, maintainable, and easier to manage — especially in large projects.

//✅ Why Use Modules?
// Break big programs into smaller parts (files)
// Reuse code across different files
// Avoid polluting global scope
// Keep code clean and modular

// ➤ export – Share values/functions/objects
// ➤ import – Bring values/functions/objects into another file

// export const add = (a, b) => a + b;
// console.log(add(2, 4));
// export default script;

//export default
//const user = { name: "Nadeem", age: 25 };
// export default user;

// import user from './user.js';
// console.log(user.name); // Nadeem

// rename import export

// import { add as addition } from './math.js';

//Export All from Another File

//export * from './math.js';

//Asynchronous programing

// console.log("start");

// setTimeout(() => {
//   console.log("task  done after 2 second");
// }, 3000);

// console.log("end");

// A callback function is a function that is passed as an argument to another function.
// 👉 The main function will call this callback function after it finishes its task.

function greet(name, callback) {
  console.log("hello " + name);
  callback();
}

function goodBye() {
  console.log("goodbye");
}

greet("nadeem", goodBye);
