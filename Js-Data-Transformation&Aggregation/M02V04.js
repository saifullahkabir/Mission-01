
// Some 

const numbers = [1, 3, 5];
const hasEvenNumbers = numbers.some(number => number % 2 === 0);

// console.log(hasEvenNumbers);

const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) => featureAccessRoles.includes(role));

// console.log(canAccess);

// Array.from()

const arr = Array.from([1, 2, 3], (value, i) => value * value);

// console.log(arr);

const range = (start, stop, step) => 
    Array.from({ length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
);

console.log(range(0, 11, 1));
