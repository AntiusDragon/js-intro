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