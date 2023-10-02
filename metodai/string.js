/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
console.clear();

console.log('\n\r------at');
console.log('labas'.length);
console.log('     '.length);
console.log('\n\'\\'.length);

console.log('labas'[0],'labas'.at(0));
console.log('labas'[1],'labas'.at(1));
console.log('labas'[2],'labas'.at(2));
console.log('labas'[3],'labas'.at(3));
console.log('labas'[4],'labas'.at(4));
console.log('labas'[5],'labas'.at(5));
console.log('labas'[-1],'labas'.at(-1));
console.log('labas'[-2],'labas'.at(-2));
console.log('labas'[-3],'labas'.at(-3));
console.log('labas'[-4],'labas'.at(-4));
console.log('labas'[-5],'labas'.at(-5));
console.log('labas'[-6],'labas'.at(-6));

const hi = 'labas';
console.log(hi.at(-2), hi[hi.length - 2]);

console.log('\n\r------charCodeAt');

console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
console.log('1.', 'labas'.charCodeAt(0));
console.log('2.', 'labas'.charCodeAt(1));
console.log('3.', 'labas'.charCodeAt(2));
console.log('4.', 'labas'.charCodeAt(3));
console.log('5.', 'labas'.charCodeAt(4));

console.log('\n\r------');

const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));
console.log(str1);


let str3 = 'Hello';
const str4 = 'World';

str3 += ' ';
str3 += str4;

console.log(str3);

let str5 = 'Hello';
str5 += ' ' + str4;
console.log(str5);

console.log('\n\r------concat');

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const start = 'Abecele: ';

let a1 = '';
a1 += start;
a1 += abc[0];
a1 += abc[1];
a1 += abc[2];
a1 += abc[3];
a1 += abc[4];
a1 += abc[5];
console.log(a1);

let a2 = start + abc[0] + abc[1] + abc[2] + abc[3] + abc[4] + abc[5];
console.log(a2);

let a3 = start;

for (let i = 0; i < abc.length; i++) {
    a3 += abc[i];
    
}

console.log(a3);

let a4 = start.concat(...abc);
console.log(a4);

let a5 = start.concat(abc[0], abc[1], abc[2], abc[3], abc[4], abc[5]);
console.log(a5);

console.log('\n\r------includes');
console.log('Labas rytas'.includes('a'));
console.log('Labas rytas'.includes('A'));
console.log('Labas rytas'.includes(' '));
console.log('Labas rytas'.includes('ab'));
console.log('Labas rytas'.includes('as'));
console.log('Labas rytas'.includes('tytas'));
console.log('Labas rytas'.includes('labas'));
console.log('Labas, labas, rytas'.includes('labas'));

console.log('\n\r------indexOf');
//           01234
console.log('Labas rytas'.indexOf('a'));
console.log('Labas rytas'.indexOf('A'));
console.log('Labas rytas'.indexOf(' '));
console.log('Labas rytas'.indexOf('ab'));
console.log('Labas rytas'.indexOf('as'));
console.log('Labas rytas'.indexOf('tytas'));
console.log('Labas rytas'.indexOf('labas'));
console.log('Labas, labas, rytas'.indexOf('labas'));

console.log('\n\r------');
//           01234567890
console.log('Labas rytas'.indexOf('a'));
console.log('Labas rytas'.indexOf('a', 0));
console.log('Labas rytas'.indexOf('a', 1));
console.log('Labas rytas'.indexOf('a', 2));
console.log('Labas rytas'.indexOf('a', 4));
console.log('Labas rytas'.indexOf('a', 10));

console.log('\n\r------uzduotis');

// naudoti tik: for () {} ir if () {}

function kiek(tekstas, raide) {
    let suma = 0;
    for (let i = 0; i < tekstas.length; i++) {
        if (tekstas.indexOf(raide, i) === i) {
            suma += 1
        } else {
            suma += 0
        }        
    }
    return `Tekste "${tekstas}" yra ${suma} "${raide}" raides.`;
}

console.log(kiek('labas', 'a'));


console.log('\n\r------reoeat');

console.log('a'.repeat(6));

console.log('\n\r------replace');

const r1 = 'labas';
const r2 = r1.replace('a', 'x');
console.log(r1, r2);

const r3 = 'Labas rytas';
const r4 = r3.replace('rytas', 'vakaras');
console.log(r3, r4);

const r5 = r3.replace('xxx', 'yyy');
console.log(r3, r5);

const r6 = 'labas';
const r7 = r6.replaceAll('a', '_');
console.log(r6, r7);