
// Sort
const numbers = [40, 10, 100, 1, 20, 50, 25];
const sortedNumbers = numbers.sort((a, b) => a - b);


const fruits = ["Banana", "apple", "Cherry", "date"];
fruits.sort((a, b) => a.localeCompare(b));

// console.log(fruits);


// Nested array flat

const arr = [1, 2, [3, 4, [5, [6, [7]]]]]

// const flatArr = arr.flat(4);
const flatArr = arr.flat();

// console.log(flatArr);

const tagsFromPosts = [
    ["javascript", "react", "css"],
    ["node", "express"],
    ["css", "html", "react"]
]

const filterTags = [...new Set(tagsFromPosts.flat())]
console.log(filterTags);


