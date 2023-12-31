//String
let firstName: string = "John";
firstName.toLowerCase();
console.log(firstName);

// Number
let num: number = 123.45;
// or else we can declare like in the below way.
// No need of annotation.
let myNum = 678.9;

// Boolean
let bool: boolean = true;

// Any
let hero; // at first we do not know what it is get assigned to... it could be a string or a boolean value
function getHero() {
  return "Thor"; // after some other programmer writes "return true". that's why hero is inferred as "any" type
}
hero = getHero(); // the var hero got a value from the function i.e., "Thor" that is a string.

let name: string;
function getName() {
  return "Vardhan"; // It must take a string value rather than other type values...
}
name = getName();

export {};