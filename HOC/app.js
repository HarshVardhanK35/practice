// ---------------------------------------------- Filter - Method:

const numbers = [1, 2, 3, 4, 5, 6];


// const evenArr = numbers.filter((num)=>{
//   return (num % 2 === 0);
// });
// console.log(evenArr);

const companies = [
  {
    name: "one",
    category: "finance",
    start: 1981,
    end: 2004,
  },
  {
    name: "two",
    category: "retail",
    start: 1992,
    end: 2008,
  },
  {
    name: "three",
    category: "auto",
    start: 1999,
    end: 2007,
  },
  {
    name: "four",
    category: "retail",
    start: 1989,
    end: 2010,
  },
  {
    name: "five",
    category: "tech",
    start: 2009,
    end: 2014,
  },
  {
    name: "six",
    category: "finance",
    start: 1987,
    end: 2010,
  },
  {
    name: "seven",
    category: "auto",
    start: 1986,
    end: 1996,
  },
  {
    name: "eight",
    category: "tech",
    start: 2011,
    end: 2016,
  },
];


// Get only retail companies.
// let retailCompanies = companies.filter((company) => {
//   return company.category === "retail";
// });
// console.log(retailCompanies);


// Get companies details started in/after 1980 and ended in/before 2005
// let companyTenure = companies.filter((company)=>{
//   return (company.start >= 1980 && company.end <= 2005);
// });
// console.log(companyTenure);


// Get companies that lasted 10 yrs or more
// let details = companies.filter((company)=>{
//   return (company.end - company.start >= 10);
// });
// console.log(details);

// =======================================================================

// -------------------------------------------------- map() method
// const numbers = [1, 2, 3, 4, 5];
// const dobArr = numbers.map((number)=>{
//   return number * 2;
// })
// console.log(dobArr);


// Create an array of company names
const companyNames = companies.map((company)=>{
  return company.name
})
// console.log(companyNames)


// Create an object of {name: 'companyName', category: 'companyCategory'}
const companyDetails = companies.map((comp)=>{
  return ({
    name: comp.name,
    category: comp.category,
    tenure: `${comp.end - comp.start} years`
  })
});
// console.log(companyDetails);


// Chaining Map Methods:
const sqrAndDbl = numbers.map((numSqr)=>{
  return (numSqr ** (1/2)).toFixed(2);
}).map((numDbl) => {
  return +numDbl * 2;
});
// console.log(sqrAndDbl);