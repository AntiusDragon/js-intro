/*
FOR - "for" ciklas
bazinis is visu gal imu ciklu
*/

console.clear();

console.log('START');

// intervalas: [0, 5)
for (let i = 0; i < 5; i++) {
    console.log('i:', i);
}

console.log('PAUSE');

// intervalas: [-2, 7]
for (let i = -2; i <= 7; i ++) {
    console.log('i:', i);
}

console.log('FINISH');

console.log('\n\r-----');

for (let f = 0; f < 7; f++) {
    const sentence = `Numeris yra: ${f + 1}.`;
    console.log(sentence);
}

console.log('\n\r-----');

// Skaiciai intervale nuo 3 iki 8 imtinai yra: 3 4 5 6 7 8.

const start = 3;
const finish = 8;
let numeriuCiklas = '';
for (let i = start; i <= finish; i++) {
    numeriuCiklas += ' ' + i;
}
const numberLine = `Skaiciai intervale nuo ${start} iki ${finish} 
imtinai yra:${numeriuCiklas}.`;
console.log(numberLine);