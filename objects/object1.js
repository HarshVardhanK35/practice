// SingleTon
// Object.create //---> Constructor method used to create an Object.


// Object Literals
const JsUser = {
    name: "John",
    age: 22,
    email: "john@email.com",
    isLoggedIn: false
};


// Accessing Values in Objects using Keys {key1: val1, key2: val2}
// Using two methods:
// Method 1: Dot Notation (.)
// Method 2: Square Notation (["key"])
// console.log(JsUser.age);
// console.log(JsUser["age"]);


// How to declare a symbol(Data Type) as a key in an object.
const mySym = Symbol("key1");
const SymObj = {
    name: "Symbol Data-Type",
    [mySym]: "value1" //---> We declare a symbol as a key using Square-Brackets"[]"
};
// console.log(SymObj[mySym]);


// How to change the values in an object...
JsUser["age"] = 23;
// console.log(JsUser["age"]);


// How to freeze an object so that we can not change the values in that object.
JsUser["isLoggedIn"] = true;
// console.log(JsUser["isLoggedIn"]);

Object.freeze(JsUser); //---> Use Object.freeze()
JsUser["name"] = "Jane"; // After freezing we are changing the value of a key
// console.log(JsUser);


SymObj.greet = function(){
    return `Hello! this is ${this.name}` //---> Used String Interpolation, Used "this" to refer the same Object.
}
// console.log(SymObj.greet()); //---> We called the Function and it returns the value
// console.log(SymObj.greet); //---> We get the Function Reference





// Conclusion:
                    /* ALWAYS USE THE SQUARE BRACKET NOTATION */