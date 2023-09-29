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

// Skaiciai intervale nuo 3 iki 8 imtinai yra: 3, 4, 5, 6, 7, 8.
console.log('\n\rnext');

let numeriuCiklas2 = '';
for (let i = start; i < finish; i++) {
    numeriuCiklas2 += i + ', ';
}
const numberLine2 = `Skaiciai intervale nuo ${start} iki ${finish} 
imtinai yra: ${numeriuCiklas2}${finish}.`;
console.log(numberLine2);

console.log('\n\rnext');

let numeriuCiklas3 = start;
for (let i = start + 1; i < finish; i++) {
    numeriuCiklas3 += ', ' + i;
}
const numberLine3 = `Skaiciai intervale nuo ${start} iki ${finish} 
imtinai yra: ${numeriuCiklas3}.`;
console.log(numberLine3);

console.log('\n\r-----');

for (let i = 0; i <= 10; i += 2) {
    if (i % 2 === 0) {
        console.log(i, 'lyginis');
    } else {
        console.log(i, 'ne');
    }
}

console.log('\n\r-----');

function arTestiCikla(index) {
    if (index <= 10) {
        return true
    } else {
        false
    }
}

let i = 0;
for (; arTestiCikla(i);) {
    console.log(i, 'ciklas');
    i += 2
}

console.log(i, 'uz ciklo');

console.log('\n\r-----');

const word = 'zodis'

for (let i = 0; i < word.length; i++){
    console.log(`Raide: ${word[i]}`);
}

console.log('\n\r-----');

const pazymiai = [10,2,8,4,6];

let pazymiuSuma = 0;
const kiekis = pazymiai.length

for (let i = 0; i < kiekis; i++) {
    pazymiuSuma += pazymiai[i];
}

console.log('demo', pazymiuSuma / kiekis);