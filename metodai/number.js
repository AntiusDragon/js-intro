/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/
console.clear();

console.log(isFinite(5));
console.log(isFinite(3.14));

console.log(isFinite(-5));
console.log(isFinite(-3.14));
console.log(isFinite(0));
console.log(isFinite(999999999999));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

const a = 7;
if (isFinite(a)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.log('\n\r-----');
console.log(Number.isInteger(5));
console.log(isFinite(5));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(-3.14));

console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));

console.log('\n\r-----');
const b = 7.7;

if (isFinite(b) && Number.isInteger(b)) {
    console.log('Sveikasis skaicius');
} else if (isFinite(b) && !Number.isInteger(b)) {
    console.log('Desimtainis skaicius');
} else {
    console.log('Ne normalus skaisius');
}

if (isFinite) {
    if (Number.isInteger(b)) {
        console.log('Sveikasis skaicius');
    } else {
        console.log('Desimtaonis skaicius');
    }
} else {
    console.log('Ne normalus skaicius: NaN arba Infinity');
}

console.log('\n\r-----');

console.log(parseInt(false));
console.log(parseInt([]));
console.log(parseInt(''));
console.log(parseInt('asd'));
console.log(parseInt('6'));
console.log(parseInt('penki'));
console.log(parseInt('123'));
console.log(parseInt('asd123'));
console.log(parseInt('123asd45'));
console.log(parseInt('123.456'));

console.log('\n\r-----parseFloat');
console.log(parseFloat(''));
console.log(parseFloat('789.0'));
console.log(parseFloat('789.101'));
console.log(parseFloat('-789.0'));
console.log(parseFloat('-789.101'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-789.101asd'));
console.log(parseFloat('asd-789.101asd'));

console.log('\n\r-----isNaN');
console.log(isNaN(5));
console.log(isNaN(3.14));
console.log(isNaN(Infinity));
console.log(isNaN(NaN));

console.log('\n\r-----toFixed');

const kaina = 3.14;
console.log(kaina, '3.14');
console.log(kaina.toFixed());
console.log(kaina.toFixed(0));
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));
console.log(kaina.toFixed(3));
console.log(kaina.toFixed(4));
console.log(kaina.toFixed(5));

const kaistasSkaicius = 0.1 + 0.2;
console.log(kaistasSkaicius);

const kaistasSkaicius2 = kaistasSkaicius.toFixed(6)
console.log(kaistasSkaicius2);

const kaistasSkaicius3 = parseInt(kaistasSkaicius2);
console.log(kaistasSkaicius3);

const kaistasSkaicius4 = parseFloat(kaistasSkaicius2);
console.log(kaistasSkaicius4);

const kaistasSkaicius5 = + '1.23';
console.log(kaistasSkaicius5);

const kaistasSkaicius6 = + kaistasSkaicius2;
console.log(kaistasSkaicius6);

const c = 6.999999999999999;
console.log('c:', c);
console.log('c:', c.toFixed(5));

console.log('\n\r-----');
const e = 5.6784;
console.log('e:', e.toFixed(6));
console.log('e:', e.toFixed(5));
console.log('e:', e.toFixed(4));
console.log('e:', e.toFixed(3));