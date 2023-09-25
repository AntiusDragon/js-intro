/*
OBJECT - objektas

*/

console.clear();

// vartotojas: vardas, amzius, arvedes

/*
const jonasData = ['Jonas', 99, true];
const maryteData = ['Maryte', 88, false];

const jonasName = jonasData[0];
const jonasAge = jonasData[1];
const jonasIsMarred = jonasData[2];

const maryteName = maryteData[0];
const maryteAge = maryteData[1];
const maryteIsMarred = maryteData[2]

console.log(jonasName, jonasAge, jonasIsMarred);
console.log(maryteName, maryteAge, maryteIsMarred);
*/

// key: value
const jonas = {
    isMarried: true,
    age: 99,
    name: 'Jonas',
};

console.log(jonas);
console.log(jonas['name'], jonas.name);
console.log(jonas['age'], jonas.age);
console.log(jonas['isMarried'], jonas.isMarried);

jonas.age++;
console.log(jonas);