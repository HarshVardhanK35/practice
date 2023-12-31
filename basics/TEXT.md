This files belongs to basics folder ---|

# Type Script
=============

## Introduction
---
0. TypeScript is strongly typed, object - oriented programing language.
1. This a **superset** of Javascript. TS is a development tool.
2. This allows us to write JS in much precise manner.
3. So, that the code faces less errors during the run time.
4. _Static type checking_

5. The idea behind TypeScript is **Static Checking** which is present in manu langusges like Java and Golang etc.
   **STATIC CHECKING** ---> the syntax is constantly being analysed by the IDEs.
   _Simply... analyse the code as we type._
6. TS -- lot more code than JS.
7. Write the code **.ts** file, while building react app use **.tsx** ---> more for a component level of things, a mixture of _TS and JSX._
8. The Typescript code will be converted into JavaScript code.

#### NOTE:
---> Typescript is all about **TYPE SAFETY**.
ex: 2 + "2" in JS does not give any error.
But in TS it does. (TS allows us to stop this behavior).

#### NOTE:
Use **typescriptlang.org**. On left there are lot of versions of Typescript and on right hand side it produces JavaScript code. (A simple conversion)

# How to install the Typescript
===============================

The way how we are starting TS and the way how we are usind it in the project are two different ways to install the Typescript:

1. first, global system installation.
2. second, additional typescript config file is required. So, that we can put what type of settings we want and we do not want.

## CORE SYSTEM WIDE INSTALLATION
---
_sudo npm install -g typescript_ (Globally for practice only).

### Project Installation
---
_npm install typescript --save-dev_ (Devlopment tool, usually installed as a dev dependency).

### Steps to be followed:
1. Install Node. (If already, just check the version with _node -v_).
2. Install NPM (If already, just check the version with _npm -v_).
3. Now install the typescript with ---> **sudo npm install -g typescript**
4. **npm tsc** (_tsc stands for typescript compiler_)
Helps us to execute the typescript file. (_tsc -v_ ---> to find the version of it).

#### NOTE:
(NPM ---> Node Package Manager, NPX ---> Node Package Executer).

# A Quick Introduction to the code and it's execution...
========================================================
---> Same as the JS syntax, but we execute it with _tsc "filename.ts"_ ---> as this converts the typescript code into a simple javascript code.

---> Lastly, this throws an error in the main TS file. (At last line of the code put _export{}_ to temporarily remove errors).



------------------------------------------------- END_of_9-9-23 ---------------------------------------------------


# TYPESCRIPT and it's types:
============================

## Types:
---

---> A quick intro to how many types are
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Void
7. Object
8. Array
9. Tuples
10. **Any**
11. Never
12. Unknown

# Syntax and it's explanation:
========================================================
_let / const variableName : type = value_
---> All types are lowercased.

(ex): _let firstName : string = "John";_
_console.log(firstName)_

_execute the file with_---> _tsc filename.ts_ and it creates another js file with the same name and we may get an error at first. So, to simply get rid of this error we just use _export {}_ (this removes the error temporarily).

let num = 0;        |
num = "string";     |
                    |---> JS CODE <---
console.log(num);   |

---> But in TS we can not put a Number value, if that variable type was declared as a String type.
---> We can not assign a number to a string type variable in TS as it provides us _Type Safety_.
---> If we typed .toLowercase() instead of .toUpperCase() in TS we get an error with suggestions. (camelCase is missing)
---> After we declared a variable with type STRING... put a dot(.) after that variable to get the suggested methods that we can use them on that variable. All the methods will be fetched by keeping the dot front of that variable.

(ex-0): _let firName : string = "John";_
    *firName.*

# Every Day Types:
================================================================
_The Primitives_: String, Number and Boolean
1. **String**: Sequence of characters that are put in between quotes... _"String"_
2. **Number**: Numbers like 43, 43.5 etc., simply int and float both comes under the number type.
3. **Boolean**: Only two values it holds are... _true_ and _false_.

---> _let / const variableName : string / number / boolean = value;_
---> _variableName._(Put a dot to fetch the methods that we can use on string / number / boolean)

## Type Inference:
---

---> No need to worry about declaring the type with colon immediately after declaring the variable, because typescript can recognise the type of the variable on it's own.
(There is a special case where we can actually use the type declaration).
---> No need of annotation --- _"myName" is inferred as a string_.

(ex-1):
let num : number = 123.45
---> we can declare like in the below way.
let myNum = 678.90

4. **Any**:
---> Usually _any_ keyword is used to escape from the syntax we use in TS.
---> It is used for not to check the type in TS. (used to TURNOFF the type-checking for that variable).
---> **DO NOT USE "ANY" IN YOUR CODE!**

(ex-2):
let hero; at first we do not know what it is get assigned to... it could be a string or a boolean value
function getHero() {
    return "Thor"; after some other programmer writes "return true". that's why hero is inferred as "any" type
}
hero = getHero(); // the var hero got a value from the function i.e., "Thor" that is a string.

---> So we have to declare the type also at first, if we declare it as string, then it can be given string values only.

let name : string;
function getName() {
    return "Vardhan";
    // It must take a string value rather than other type values... Hover over "name" we get string as its type.
    // No value can be assigned to the variable "name"
}
name = getName();

4. **Array**:

#### NOTE:
There is no other way to declare the Int or Float types in TS and JS. We use Number instead.



------------------------------------------------- END_of_10-9-23 ---------------------------------------------------



---> Functions are the basic building blocks of any application.

# Functions in Typescript (Part-01):
====================================

---> If we repeat the same mistakes in TS, as we do in declaring the functions in JS. It returns the the same ANY thing error in TS. Suppose we want to add 2 to a number and if we do the same as in the JS. Then it might be not a good idea.

(ex-3):
function addTwo(num){       |
return num + 2;             |
}                           |---> Function in TS as same as in JS
addTwo(5);                  |
export{}; // To remove errors temporarily |

---> Just hovering over the function "addTwo" and variable "num" it will show as that both function and variable belongs to same data type "ANY". (Means taking the strictness from the code).
---> The inference "ANY" in the function is not so good. If we write the code for numbers but it is accepting the string methods for numbers... then it would be problematic.
---> While declaring functions and it's arguments the type annotations are really needed an compulsory.

**Modified Code**
function addTwo(num: number){   |
return num + 2;                 |---> Functions in TS, declared with type inference / annotation.
}                               |
addTwo(5);                      |

## How to pass more arguments to a function:
---
(ex-5):
function addUser(name: string, email: string, isPaid: boolean){}
addUser("Harsha", "harsha@gmail.com",true);

## Arrow Functions:
---
(ex-6):
let loginUser = (name: string, email: string) => {}
loginUser("name", "name@gmail.com")

## Default Arguments:
---
(ex-7):
let isAdmin = (name: string, email: string, admin: boolean = true) => {};
isAdmin("Vardhan", "vardhan@gmail.com");




------------------------------------------------- END*of_11-9-23*(M) ---------------------------------------------------




# functions in TS (Part-02):
============================

## Functions which return a promise:
---
---> Want to annotate the return type of a function which returns a promise, you should use the Promise type.

(Ex-8):
async function getFavoriteNumber(): Promise<number> {
return 26;
}

## CASE 1:
---
function addTwo(num: number)    |
{                               |
// return num + 2;              |
return "Hello";                 |---> Here the return type of the function is STRING, but it shall return us a NUMBER type
}                               |
addTwo(5);                      |
---> So, we have to specify the return type of the function as number also (in the case of above example).

**Modified Code**

**Normal Function**
function addThree(num: number): number{         |
return num + 3;                                 |---> we specified the return type to the function also i.e., NUMBER
}                                               |
addThree(5);                                    |

**Arrow Function**
const addThree = (num : number):number => {
return num + 1;
}
addThree(2);

#### Note:
----> We have to implicitly specify the return type of the function using the annotations like in the above example.

## CASE 2:
---
---> SPECIFYING MORE THAN ONE RETURN TYPES TO A FUNCTION.
---> IN THIS SCENARIO THE FUNCTION MIGHT RETURN US _true (or) "200 OK"_.

function getValue(myNumber: number){
if(myNumber > 5){
    return true;
}
else{
    return "200 OK";
}
}

**EXTRA TASKS COMPLETED:**
1. HIGHER ORDER FUNCTIONS.



------------------------------------------------- END*of_11-9-23*(E) ---------------------------------------------------




# Syntax for HOF - MAP in TS:
=============================
(ex-9):
const heroes = ["Thor", "IronMan", "BatMan"];
let out = heroes.map((item): string => {
return `My Fav Hero is ${item}`
})
console.log(out);

---> In the above example, the return type that we specified will be strictly a string. So, whenever we overwrites the return type to number it provides us an error.




------------------------------------------------- END_of_14-9-23 ---------------------------------------------------



# Functions in TS (Part-03):
============================

**OBJECT TYPES --- IN FUNCTIONS**:
function printCoord(pt: { x: number; y: number }) {
return ("The coordinate's x value is " + pt.x + "The coordinate's y value is " + pt.y);
};

**OPTIONAL PROPERTIES**:
// We can pass the optional properties while passing an object in a function
(ex-10):
let userDetails = {
    firName: "Harsha",
    lasName: "Vardhan"
};
function fullName(details:{firName: string, lasName?: string}){
    return (`The name is ${details.firName} ${details.lasName}`)
};

_when optional properties are not passed in a function means the value is "undefined"_:

function fullName(details: { firName: string, lasName?: string }) {
// console.log(details.lasName.toUpperCase()); // Returns an error
if (details.lasName !== undefined) {
    console.log(details.lasName.toUpperCase());
}

// A safe alternative to use modern JavaScript syntax:
console.log(details.lasName?.toUpperCase());
};
fullName({ firName: "Harsha"});

**MORE**
_Explicitly mentioning that the return type is "void"_
const consoleError = (errMsg: string): void => { // Here the return type is "void" means it returns nothing
console.log(errMsg);
}

_If we want to make our functions robust and handle the error, then specify the return type to "never"._
const handleError = (errorMsg: string): never => {
throw new Error(errorMsg);
};

// ---> Some functions never return a value, that means very close to the void type
// ---> Specially made to handle some error, means that we can handle some type of an error.
// ---> Intentional crash for a function.

#### NOTE:
---> The _never_ type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.



-------------------------------------------------------------------------------------------------------------------



## OBJECTS:
===========

---> Objects are used in javascript to make any entry in the database. Objects are used to collect all the values in the object format and pass them to the backend controller, it modifies all the values and then passes them to the database.

_The normal usecase for objects is_:
(ex-11):
const user = {
    name: 'John',
    email: 'john@example.com',
    isActive: true
};

_The typescript usecase_:
---> The usecase of the objects are through the functions, we have to pass these objects into a function or we have to return these objects from a function.

_The Basic Syntax_:
(ex-12):
function createUser({name: string, isActive: boolean = true}){};
createUser({name: 'John', isActive: false});

_The lot confusing part of object declaration in TS_:
---> The lot confusing part is that how we define the syntax for the return type of the function is also a object.
---> Specifying the return type as an object which has to return an object --- (_fun funName():{}{}_).

(ex-13):
function createAdmin():{}{ //---> Promised to return an object
    return {}
};
---> The strict behavior of objects in TS is:

(ex-14):
function addStudent():{name: string, course: string}{
//---> Now as we strictly specified that there must be only two params.
//---> But if we want to pass another parameter other than the required, then it gives us an error (as below example).
return {name: "Vardhan", course: "Typescript", isPaid: true}; //------------> THIS IS NOT ACCEPTABLE.
};

---> The weird behavior of objects in TS is:
---> The behaviour is that we can pass as many parameters as we can through another variable, than we declared in the function declaration.

const empDet = {name: "Vardhan", band: "TeamRainbow", isPermanent: false};
function addEmployee():{name: string, band: string}{
return (empDet); // it returns an error, if we want to add another parameter
};

#### CONCLUSION:
There is a better way of defining the functions and objects, we will learn more about them in the **interface** topic.



---------------------------------------------------- END_of_15-9-23 -----------------------------------------------------



# TYPE ALIASES:
===============

**USECASE**:
---> Creating a user object that has some properties may be there are more than one function that uses these properties.
---> We’ve been using object types by writing them directly in type annotations. This is convenient, but it’s common that we want to use the same type more than once and refer to it by a single name.

_Syntax_:
type User = {
name: string;
email: string;
isActive: boolean
};

---> Same as the constants.
---> Once we defined the "User" we have to define the properties and we just do not pass values but we just pass the type of value that going to come up into that.
---> In TS, we are creating the types like "string", "boolean"... with type aliases.

(ex-15):
type Mystring = string;
function createStudent(student: Mystring){} // here we passed _Mystring_ instead of _string_ type

(ex-16):
type Student = {
name: string;
email: string;
isActive: boolean
};

function createStudent(student: Student): Student{
return ({name: "", email: "", isActive: false});
};
createStudent({name:"", email:"", isActive: true});

---

# Keyword - readonly || optional properties:
---> The _readonly_ keyword before any property in an object creation, where we can not modify that property.
_USECASE_: There will be some non changeable properties in an object, while saving an abject into a database it gives a unique "id" which must non changeable property.

(ex-17):
type Emp = {
readonly \_id: string; -----> _readonly_ property \_id.
name: string;
email: string;
isPassed?: boolean ------> _optional_ property - no problem when we do not pass the "property: value".
};

let employee: Emp = {
\_id: "12345",
name: "vardhan",
email: "v@v.com"
};
employee.\_id = "123"; -----> returns an error that "cannot assign to \_id cause it is a readonly property".

_QUESTION_:
If id would be an array, can we push values into that array if it is **READONLY** property?

(ex-18):
type cardNumber = {
cardnumber: string;
};

type expiryDate = {
cardDate: string;
};

type cardDetails = cardNumber & expiryDate & {
cvv: number;
};

_usecase_: where we define a new type based on the types declared previously.
---



# Arrays in TS:
===============

**1st Syntax**:
(ex-19):
const heroes: string[] = [];
heroes.push("IronMan", "Captain", "spidy");
---> Accepts a string type values inside an array.

const strength: number[] = [];
strength.push(2, 3, 4);
---> Accepts a number type values inside an array.

**2nd Syntax**:
const numbers: Array<number> = [];

**Arrays using an existing type**:
(ex-20):
type User = {
name: string
email: string
};
const allUsers: Array<User> =
[
    {name: "John", email: "j@gmail.com"},
    {name: "HV", email: "hv@gmail.com"}
];
allUsers.push({name: "Harry", email: "hp@gmail.com"});
---> The object _allUsers_ accepts the properties that are defined in the _type User_.

**Two or Multi - Dimensional Arrays**:
1. const userDetails: string[][] = [["string", "", ""],["number"],["boolean"]];
---> Allows one or more than one strings in the above array.
---> Array of an array consists only of string values.

2. const billableUser: [string, string][] = [["hel", "boo"], ["hgh", "1"]];
---> Target allows only 2 string types in the above array, it does not allow other data types into it.

**2-D using an existing type**:
(ex-21):
type Student = {
name: string;
email: string;
};
const students: Student[][] = [
[{name: "weasley", email: "weasley@gmail.com"}],
[{name: "Herm", email: "Herm@gmail.com"}]
];
---> Allows more arrays with the type of Student defined.

**Read-only 2-D arrays**:
const emp: Readonly<[string, string][]> = [["ifjhg", "jdsfji"], ["jkhjkef", "kjwefh",], ["", ""]];
---> Method push does not work on this above object, Read-only 2-D arrays does not allow us to modify the array.



---------------------------------------------------- END_of_16-9-23 -----------------------------------------------------



## Union in TS:
===============
---> A true alternative for "any".

(ex-22):
let score: number | string = 22;
score = "33";
---> In the above example, the score variable allows only two data types that will be only "number" and "string" types.

---> **Unions used in existing types**:
(ex-23):
type User = {
name: string;
id: number;

};

type Admin = {

userName: string;

id: number;

};

let emp: User | Admin = {name: "Harsha", id: 333};

emp = {userName: "Vardhan", id: 333};

---> In the above example, there can only be two types that an employee _emp_ variable can hold that are created by us are _User_ and _Admin_

---> **Unions used in functions**:

(ex-24):

getDdId(3);

getDdId("3abc");

function getDdId(id: number | string){

if(typeof id === "string"){

    console.log(id.toUpperCase());

}

else{

    console.log(id)

}

};

---> In functions, we have to check the what type of value we are getting from the db as per the above example.

---> We can only perform the specific data type methods by checking the type, if it is string then we can only perform string methods on that value.

---> **Unions in Arrays**:

(ex-25):

1. const data: string[] = ["", "", ""];

2. const data1: number[] = [1, 2, 3];

3. const data2: number[] | string[] = [1, 2];

4. // const data2: number[] | string[] = ["1", "2"];

5. const data3: (number | string)[] = [1, 2, 3, "4", "5"];

---> When an array is declared of type "number" then we can only pass the nuber type values into it. So, it does not allow other data types into it.

---> From line #3 an #4 the array can only allow us either a number or a string values into it.

---> But we have to use paranthesis to allow both the number and string values _(number | string)[]_ into the array.

---

# Tuples:

=========

---> The order of the values in that array really matters.

---> A kind of specialised array with some restrictions on that array.

---> It is used during API calls, where the array contain structured data in a very specific format.

_syntax_:

let data: [string, number, boolean];

data = ["", 1, true];

---> it allows the values in the given format. But not in the reverse format.

**Creating types with Tuples**:

(ex-26):

type User = [string, number];

let employee: User = ["harsha", 122];

**Cons with the Tuples**:

_Con-1_:

---> We can change values in the tuple;

employee[1] = 333;

---> We can also push more than allowed values inside the tuple. In the above example we can push only two values string type on 0th position and number type on 1st position. but using the push method we can push more than allowed values.

employee.push(331);

_Con-2_:

---> But we can not assign values inside the tuple with other types as declared during the assignment of values.

type Scholar = [number, string];

let trainee: Scholar = [333, "Harsha", 123];

---> Here it returns an error, we can not assign values inside the type _Scholar_ with more than allowed values, here this tuple only allows 2 values.

_Solution for the drawback of tuples_:

---> Declare the variable with _const_ and _readonly_ so that we can not do push, pop etc., methods on that variable.

// A better solution

const trainee: readonly [number, string] = [333, "Harsha"];

----------------------------------------------------- END_of_18-9-23 ------------------------------------------------------

# Enums:

========

_Usecase_---> Enums exists that to restrict somebody's choice with the values that they offered.

_syntax_:

enum SeatChoice {

AISLE = "aisle",

MIDDLE = 3,

WINDOW,

FOURTH

};

const seat = SeatChoice.AISLE;

---

# INTERFACES:

=============

---> Loose form of a class.

_syntax_:

interface Emp {

readonly dbId: number;

name: string;

empId: number;

email?: string;

greet(): string;

getSalary(id: number, hoursWorked: number): number;

};

(ex-27):

interface Emp {

readonly dbId: number;

name: string;

empId: number;

email?: string;

greet(): string;

getSalary(id: number, hoursWorked: number): number;

};

const harsha: Emp = {

dbId: 333,

name: "Harsha",

empId: 20464592,

email: "harsha@example.com",

greet() {

    return `Hello ${this.name}`;

},

getSalary(id, hoursWorked){

    return hoursWorked * 31.25;

}

};

console.log(harsha.getSalary(20464592, 24));

---

## Interface vs Types:

---

---> We can reopen an interface and inject new values into preexisting interface.

interface Emp{

empStatus: string,

};

---> Inheritance is possible with interface but not with types.

interface Admin extends Emp{

role: "CEO" | "Manager";

};

---> Interface is always extensible, Interface inherits fields from another interface and it could be more interfaces. (simply put a comma(,))

interface Admin extends Emp, OtherUser{

role: "CEO" | "Manager";

};

(ex-28):

const Administrator: Admin = {

role: "CEO",

dbId: 333,

name: "Harsha",

empId: 20464592,

email: "harsha@example.com",

empStatus: "active",

greet() {

    return `Hello ${this.name}`;

},

getSalary(id, hoursWorked){

    return hoursWorked * 31.25;

},

getCoupon(couponName, value){

    return 10;

}

};

---

# Learned how to setup the basic typescript files for our project.

----------------------------------------------------- END_of_19-9-23 ------------------------------------------------------
