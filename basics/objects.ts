// Normal Usecase:
const user = {
  name: "John",
  email: "john@example.com",
  isActive: true,
};

// The TypeScript usecase:
/*
  The usecase of the objects are through the functions, we have to pass these objects into a function
    or we have to return these objects from a function.
*/

function createUser({ name: string, isActive: boolean = true }) {}
createUser({ name: "John", isActive: false });

function createCourse(): { name: string; fee: number } {
  return { name: "Typescript", fee: 100 };
}

// Strictness of the objects in TS:
function addStudent(): { name: string; course: string } {
  return { name: "Vardhan", course: "Typescripti" }; // it returns an error, if we want to add another parameter
}

// Wierd behaviour of objects in TS:
// ---> The wierd behaviour is we can pass more parameters than we declared in the function through another variable.
const empDet = { name: "Vardhan", band: "TeamRainbow", isPermanent: false };

function addEmployee(): { name: string; band: string } {
  return empDet; // it returns an error, if we want to add another parameter
}

//-----------------------------------------------------TYPE ALIASES------------------------------------------------------
type Student = {
  name: string;
  email: string;
  isActive: boolean;
};

type Mystring = string;
function createStudent(student: Student): Student {
  return { name: "", email: "", isActive: false };
}

createStudent({ name: "", email: "", isActive: true });

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  return (
    "The coordinate's x value is " + pt.x + ", " + "The coordinate's y value is " + pt.y);
};
let res = printCoord({ x: 100, y: 100 });

//----------------------------------------------------------------------------------------------------------------

type Emp = {
  readonly _id: string; // readonly property
  name: string;
  email: string;
  isPassed?: boolean; // optional property
};

let employee: Emp = {
  _id: "12345",
  name: "Harsha",
  email: "h@h.com",
};
// employee._id = "123";

type cardNumber = {
  cardnumber: string;
};
type expiryDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  expiryDate & {
    cvv: number;
};

export {};