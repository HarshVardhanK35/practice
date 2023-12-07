// console.log("Higher Order Array Methods!!!");

// =======================================================================
// Challenge - 1

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@email.com",
    phone: "111-111-111",
    age: 30,
  },
  {
    firstName: "Eren",
    lastName: "Yeager",
    email: "eren@email.com",
    phone: "222-222-222",
    age: 25,
  },
  {
    firstName: "Light",
    lastName: "Yagami",
    email: "light@email.com",
    phone: "555-627-938",
    age: 45,
  },
  {
    firstName: "Tanjiro",
    lastName: "Kamada",
    email: "tanjiro@email.com",
    phone: "111-111-111",
    age: 19,
  },
  {
    firstName: "Gojo",
    lastName: "Satorou",
    email: "gojo@email.com",
    phone: "111-111-111",
    age: 23,
  },
];

const youngPeople = people
  .filter((person) => {
    return person.age <= 25;
  })
  .map((person) => {
    return {
      name: `${person.firstName} ${person.lastName}`,
      email: person.email,
    };
  });
// console.log(youngPeople);

// =======================================================================
// Challenge - 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((num) => {
    return num >= 0;
  })
  .reduce((pre, cur) => {
    return pre + cur;
  });
// console.log(positiveSum);

// =======================================================================
// Challenge - 3

const names = ["erwin", "levi ackerman", "mikasa ackerman"];

const capitalize = names.map((name)=>{
  return (name.charAt(0).toUpperCase() + name.substring(1, name.length))
});
console.log("normal capitalization", capitalize);

const noSpace = names
  .filter((name) => {
    return !name.includes(" ");
  })
  .map((name) => {
    return name.charAt(0).toUpperCase() + name.substring(1);
  });
// console.log(noSpace);

const withSpace = names
  .filter((name) => {
    return name.includes(" ");
  })
  .map((name) => {
    let len = name.length;
    let spaceIndex = name.indexOf(" ");
    return (name.charAt(0).toUpperCase() + name.substring(1, spaceIndex) + " " + name.charAt(spaceIndex + 1).toUpperCase() + name.substring(spaceIndex + 2))
  });
// console.log(withSpace);


const personNames = [...noSpace, ...withSpace];
console.log(personNames)