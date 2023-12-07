const lib = [
  {
    title: "something",
    author: "some one",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "nothing",
    author: "no one",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "everything",
    author: "every one",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
// console.log(lib)


// Case-2:
lib.forEach(element => {
    element.status.read = true;
});
// console.log(lib);


// Case-3:
const {title: firstBook} = lib[0];
// console.log(firstBook);


// Case-4:
const libJSON = JSON.stringify(lib);
// console.log(libJSON);