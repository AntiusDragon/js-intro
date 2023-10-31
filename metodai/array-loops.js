const marks = [10, 2, 8, 4,6];

const doubleMarksFor = [];

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    const doubleMark = mark * 2;
    doubleMarksFor.push(doubleMark);

    // doubleMarksFor.push(marks[i] * 2);
}

console.log(doubleMarksFor);

const doubleMarksOf = [];
for (const  mark of marks) {
    doubleMarksOf.push(mark * 2);
}
console.log(doubleMarksOf);

console.log('\n\r----------MAP');

// function doubleOrNothing1(number) {
//     return number * 2;
// }
// const doubleMarkMap1 = marks.map(doubleOrNothing1);

// console.log('MAP1:',doubleMarkMap1);

console.log('\n\r----------');

// const doubleOrNothing2 = n => n * 2;
// const doubleMarkMap2 = marks.map(doubleOrNothing2);

// console.log('MAP2:',doubleMarkMap2);

console.log('\n\r----------');

const doubleOrNothing3 = n => n * 2;
const doubleMarkMap3 = marks.map(n => n * 2);

console.log('MAP3:',doubleMarkMap3);

console.log('\n\r----------');

const badMarks = [100, 11, 10, 2, true, [], -6, -14, 8, 4, 0, NaN, 3.14, Math.PI, 'Blogas pazymys'];

function arSkaicius(number) {
    if (typeof number === 'string') {
        return false;
    }
    if (number <= 0) {
        return false;
    }
    if (isNaN(number)) {
        return false;
    }
    if (number % 1 !== 0) {
        return false
    }
    return true;
}

const goodMarksOnly1 = badMarks.filter(arSkaicius);
console.log(goodMarksOnly1);

const goodMarksOnly2 = badMarks
    .filter(n => typeof n === 'number')
    .filter(n => isFinite(n))
    .filter(n => n > 0)
    .filter(n => n < 11)
    .filter(n => Number.isInteger(n));
console.log(goodMarksOnly2);

const goodMarksOnly3 = badMarks
    .filter(n => typeof n === 'number' 
        && isFinite(n) 
        && n > 0 
        && n < 11 
        && Number.isInteger(n));
console.log(goodMarksOnly3);

const goodMarksOnly4 = badMarks
    .filter(n => Number.isInteger(n) && n > 0 && n < 11);
console.log(goodMarksOnly4);

console.log('\n\r----------');

const stringList = ['a', 'A', 'b', 'B', 'ab', 'AB', 'labas', 'rytas'];
console.log(stringList);

stringList.sort();
console.log(stringList);

const numberList = [10, 2, 8, 4, 6, 20, 22, 24, 26];
console.log(numberList);

numberList.sort((a, b) => a - b);
console.log(numberList);

console.log('\n\r----------');
//#######################
const family = [
    {name: 'Maryte', age: 88},
    {name: 'Jonas', age: 99},
    {name: 'Ona', age: 66},
    {name: 'Petras', age: 77},
]

const fancyFamily = family
    .sort((a, b) => a.age - b.age)
    .map(user => user.name)
    .join(', ') + '.';

console.log(fancyFamily);

//-----
family.sort((a, b) => a.age - b.age);

//-----
const namesMap = family.map(user => user.name);
const familyString1 = namesMap.join(', ') + '.';
console.log(familyString1);

//-----
const names = [];
for (const user of family) {
    names.push(user.name);
}
const familyString2 = names.join(', ') + '.';
console.log(familyString2);

console.log('\n\r----------reduce');
//#######################
const pazymiai = [10, 2, 8, 4, 6];
let pazymiuSuma = 0;
for (const pazymys of pazymiai) {
    pazymiuSuma += pazymys;
}
const vidurkis = pazymiuSuma / pazymiai.length;
console.log('Vidurkis:', vidurkis);
//-----
function redFunc(total, number) {
    return total + number;
}
const redSuma1 = pazymiai.reduce(redFunc);

const redSuma2 = pazymiai.reduce((t, n) => t + n);
console.log(redSuma2);

const redSuma3 = pazymiai.reduce((t, n) => t + n, 0);
console.log(redSuma3);

const red1 = [1, 2, 3, 4].reduce((t, n) => t + n);
console.log(red1);

const red2 = [1, 2, 3, 4].reduce((t, n) => t + n, 0);
console.log(red2);

const red3 = [1, 2, 3, 4].reduce((t, n) => t - n);
console.log(red3);
// 1-2-3-4
const red4 = [1, 2, 3, 4].reduce((t, n) => t - n, 0);
// 0-1-2-3-4
console.log(red4);

const red5 = [1, 2, 3, 4].reduce((t, n) => t * n);
console.log(red5);
// 1*2*3*4
const red6 = [1, 2, 3, 4].reduce((t, n) => t * n, 0);
// 0*1*2*3*4
console.log(red6);
const red7 = [1, 2, 3, 4].reduce((t, n) => t * n, 1);
// 1*1*2*3*4
console.log(red7);

console.log('\n\r----------');
//#######################

const students = [
    {
        name: 'Maryte',
        marks: [88, 'asd', 10, 2], 
    },
    {
        name: 'Jonas',
        marks: [99, true], 
    },
    {
        name: 'Ona',
        marks: [66, [], Infinity, 7, 7, 7, 7, 7, 7, 7], 
    },
    {
        name: 'Antanas',
        marks: [77, null, undefined, {}, 2, 4, 6, 8, 10], 
    },
]

/*
Vardenis1: 2;
Vardenis2: 3;
Vardenis3: 4;
*/

const teacher1 = students
    .map(student => (
        {
            name:student.name,
            marks: student.marks
                .filter(n => Number.isInteger(n) && n > 0 && n < 11)
        }
    ))
    .map(student => (
        {
            name: student.name,
            // marks: student.marks,
            // total: student.marks.reduce((t, n) => t + n, 0),
            avarage: student.marks.reduce((t, n) => t + n, 0) / student.marks.length || -1,
        }
    ))
    .sort((s1, s2) => s1.avarage - s2.avarage)
    .map(student => `${student.name}: ${student.avarage === -1 ? 'Neturi pazymiu' : student.avarage};`)
    .join('\n\r');

console.log(teacher1);

console.log('\n\r----------');
const teacher2 = students
    .map(student => (
        {
            ...student,
            marks: student.marks
                .filter(n => Number.isInteger(n) && n > 0 && n < 11)
        }
    ))
    .map(student => (
        {
            ...student,
            avarage: student.marks.reduce((t, n) => t + n, 0) / student.marks.length || -1,
        }
    ))
    .sort((s1, s2) => s1.avarage - s2.avarage)
    .map(student => `${student.name}: ${student.avarage === -1 ? 'Neturi pazymiu' : student.avarage};`)
    .join('\n\r');

console.log(teacher2);