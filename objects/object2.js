// const tinderUser = {};       //---> Non-SingleTon Object


// SingleTon Object
// const tinderUser = new Object;  //---> SingleTon Object


// Object Nesting
const TinderUser = {
    email: "user@email.com",
    details: {
        Name: {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}
// console.log(TinderUser.details.fullName? fullName.firstName: "Nothing Found");  //---> Optional Chaining... if fullName does not exist.
// console.log(TinderUser.details.Name.firstName);

// Copying one or more objects into an object.
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
// const obj = {obj1, obj2};
// const obj = Object.assign({}, obj1, obj2);      //---> Copying the sources into a target which returns an object.
const obj = {...obj1, ...obj2}             //---> Using Spread operator to copy the objects.
// console.log(obj);


