function addTwo(num: number) {
  return num + 2;
}
addTwo(5);

// NORMAL FUNCTIONS
function getLower(val: string) {
  return val.toLowerCase();
}
getLower("vardhan");

// MULTIPLE ARGUMENTS
function addUser(name: string, email: string, isPaid: boolean) {}
addUser("Harsha", "harsha@gmail.com", true);

// ARROW FUNCTIONS
let loginUser = (name: string, email: string) => {};
loginUser("name", "name@gmail.com");

// DEFAULT ARGUMENTS
let isAdmin = (name: string, email: string, admin: boolean = true) => {};
isAdmin("Vardhan", "vardhan@gmail.com");

// STRICT FUNCTIONS - SPECIFYING THE RETURN TYPE FOR A FUNCTION
// NUMBER
const addThree = (num: number): number => {
  return num + 1;
};

// STRING
addThree(2);
let s: string = "Welcome";
const greet = (s: string): string => {
  return `Hello ${s}`;
};

// OBJECT TYPES
function printCoord(pt: { x: number; y: number }) {
  return (
    "The coordinate's x value is " +
    pt.x +
    "The coordinate's y value is " +
    pt.y
  );
}

// OPTIONAL PROPERTIES
// We can pass the optional properties while passing an object in a function

// let userDetails = {
// firName: "Harsha",
// lasName: "Vardhan"
// };
// function fullName(details:{firName: string, lasName?: string}){
// return (`The name is ${details.firName} ${details.lasName}`)
// };

// when optional properties are not passed in a function means the value is "undefined":
function fullName(details: { firName: string; lasName?: string }) {

  // console.log(details.lasName.toUpperCase()); //-----------------------------------------------Returns an error

  if (details.lasName !== undefined) {
    return details.lasName.toUpperCase();
  }
  //------------------------------------------------ A safe alternative to use modern JavaScript syntax:
  // console.log (details.lasName?.toUpperCase());
}

fullName({ firName: "Harsha" });

//--------------------------------------SPECIFYING MORE THAN ONE RETURN TYPES TO A FUNCTION
//--------------------------------IN THIS SCENARIO THE FUNCTION MIGHT RETURN US true : "200 OK"
// function getValue(myNumber: number){
// if(myNumber > 5){
// return true;
// }
// else{
// return "200 OK";
// }
// }


//-------------------------------------------------------------------------HOC
// const heroes = ["Thor", "IronMan", "BatMan"];
// let out = heroes.map((item): string => {
// return `My Fav Hero is ${item}`
// })

//-------------------------------------------------------------------------MORE

// Explicitly mentioning that the return type is "void"
const consoleError = (errMsg: string): void => {
  // Here the return type is "void" means it returns nothing
  console.log(errMsg);
};

// ---> Some functions never return a value, that means very close to the void type
// ---> Specially made to handle some error, means that we can handle some type of an error.
// ---> Intentional crash for a function.
// ---> If we want to make our functions robust and handle the error, then specify the return type to "never".
const handleError = (errorMsg: string): never => {
  throw new Error(errorMsg);
};

export {};