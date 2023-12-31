// 1st Syntax:
const heroes: string[] = [];
heroes.push("IronMan", "Captain", "spidy");

const strength: number[] = [];
strength.push(2, 3, 4);

// 2nd Syntax:
const numbers: Array<number> = [];

// Type Aliases in Arrays:
type User = {
  name: string;
  email: string;
};
const allUsers: Array<User> = [
  { name: "John", email: "j@gmail.com" },
  { name: "HV", email: "hv@gmail.com" },
];
allUsers.push({ name: "Harry", email: "hp@gmail.com" });

// Two or Multi - Dimensional Arrays:
const userDetails: string[][] = [
  ["string", "", "", ""],
  ["number"],
  ["boolean"],
];

const billableUser: [string, string][] = [
  ["hel", "boo"],
  ["hgh", "1"],
];

// 2-D using an existing type:
type Student = {
  name: string;
  email: string;
};
const students: Student[][] = [
  [{ name: "weasley", email: "weasley@gmail.com" }],
  [{ name: "Herm", email: "Herm@gmail.com" }],
];

// Read-only 2-D arrays:
const emp: Readonly<[string, string][]> = [
  ["ifjhg", "jdsfji"],
  ["jkhjkef", "kjwefh"],
  ["", ""],
];

export {};