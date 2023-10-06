console.clear();

const amzius = 17;
const limitas = 18;

let zinute1 = '';

if (amzius < limitas) {
    zinute1 = 'Sorry...';
} else {
    zinute1 = 'Uzeik!';
}
console.log('>>>', zinute1);

console.log('\n\r----zinute2');

let zinute2 = 'Uzeik';
if (amzius < limitas) {
    zinute2 = 'Sorry...';
}
console.log('>>>', zinute2);

console.log('\n\r----zinute3');

const zinute3 = amzius < limitas ? 'Sorry...' : 'Uzeik';
console.log('>>>', zinute3);

console.log('\n\r----zinute3');
const q1 = 0 > 1 
                ? 2 
                : 3;
console.log('>>>', q1);

const q2 = 0 < 1 
                ? 2 
                : 3;
console.log('>>>', q2);

const q3 = 0 === 1 
                ? 2 
                : 3;
console.log('>>>', q3);

const q4 = 0 > 1 
                ? 2 
                    ? 3 
                    : 4 
                : 5;
console.log('>>>', q4);

const q5 = 0 < 1 
                ? 2 
                    ? 3 
                    : 4 
                : 5;
console.log('>>>', q5);

const q6 = 0 > 1 
                ? 2 
                    ? 3 
                    : 4 
                : 5 
                    ? 6 
                    : 7;
console.log('>>>', q6);

console.log('\n\r----zinute3');
const q11 = 0 > 1 ? 2 : 3;
console.log('>>>', q11);

const q22 = 0 < 1 ? 2 : 3;
console.log('>>>', q22);

const q33 = 0 === 1 ? 2 : 3;
console.log('>>>', q33);

const q44 = 0 > 1 ? 2 ? 3 : 4 : 5;
console.log('>>>', q44);

const q55 = 0 < 1 ? 2 ? 3 : 4 : 5;
console.log('>>>', q55);

const q66 = 0 > 1 ? 2 ? 3 : 4 : 5 ? 6 : 7;
console.log('>>>', q66);