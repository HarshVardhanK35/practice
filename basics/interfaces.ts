//-----------------------------------------------------TYPE
type User = {
  readonly dbId: number;
  name: string;
  email: string;
  googleID?: number;
  greet(): string;
};
const emp: User = {
  dbId: 2211,
  name: "John",
  email: "John@example.com",
  greet() {
    return `Hello ${this.name}`;
  },
};
console.log(emp.greet());

//------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------INTERFACES
interface Emp {
  readonly dbId: number;
  name: string;
  empId: number;
  email?: string;
  greet(): string;
  getSalary(id: number, hoursWorked: number): number;
  getCoupon(couponName: string, value: number): number;
}

//------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------INTERFACES vs TYPES

// Re-opening of the Interface:
interface Emp {
  empStatus: string;
}

// Inheritance in Interfaces:
interface Admin extends Emp {
  role: "CEO" | "Manager";
}

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
  getSalary(id, hoursWorked) {
    return hoursWorked * 31.25;
  },
  getCoupon(couponName, value) {
    return 10;
  },
};

const harsha: Emp = {
  dbId: 333,
  name: "Harsha",
  empId: 20464592,
  email: "harsha@example.com",
  empStatus: "active",
  greet() {
    return `Hello ${this.name}`;
  },
  getSalary(id, hoursWorked) {
    return hoursWorked * 31.25;
  },
  getCoupon(couponName, value) {
    return 10;
  },
};

export {};