
// const obj = {};
// obj.nextLevel = {courserId: 'level2'};
// obj[course1] = {courserId: 'level1'};

// console.log(obj);




const course1 = {name: "Programming Hero"};
const course2 = {name: "Next Level Web Development"};

const courses = [[course1, "level1"], [course2, "level2"]];

const map = new Map(courses);

// map.set(course1,  {courseId: "level1"})
// map.set(course2,  {courseId: "level2"})

// map.forEach((value, key) => key.name = 'Sohoj Sorol Simple ' + key.name);

// for(let key of map.keys()){
//    key.name = 'Sohoj Sorol Simple ' + key.name
// }

console.log(map);


