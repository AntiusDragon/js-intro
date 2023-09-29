/*
ARRAY - sąrašas / masyvas / kolekcija / listas / matrica / arėjas

// npm i -D nodemon //instal nodemon
*/

console.clear();

const tuscias = [];
console.log(tuscias, tuscias.length);
//          index: 0  1  2  3  4  5
const pazymiai = [10, 2, 8, 4, 6, 9];
console.log(pazymiai, 'sudaro', pazymiai.length, 'skaiciai');

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentai);

const pirmasPazymys = pazymiai[0];
console.log('1-as_Pazymys', pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log('2-as_Pazymys', antrasPazymys);

const pazymioPozicija = pazymiai.length - 1;
console.log('pazymioPozicija', pazymiai[pazymioPozicija]);

// paskutinis pazimis
const paskutinisPazymys = pazymiai[pazymiai.length - 1]
console.log('paskutinisPazymys', paskutinisPazymys);

// Masyvas pazymiu.
// Suskaicioti pazimiu vidurki ir isvesti kaip sakini:
// "Studento pazymiu vidurkis yra 7."

const marks = [10, 2, 8, 4, 6];
// const marksSum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
let marksSum = marks[0];
// marksSum = marksSum + marks[1]; // 0 + 10
// marksSum = marksSum + marks[2]; // 10 + 2
// marksSum = marksSum + marks[3]; // 12 + 8
// marksSum = marksSum + marks[4]; // 20 + 6
marksSum += marks[1]
marksSum += marks[2]
marksSum += marks[3]
marksSum += marks[4]

// pvz:
const a = 7;
const b = 5;
const c = 3;
let d = 0;
d += a + b; //atnaujina 'd' reiksme
console.log('d =', d);

const marksAaverage = marksSum / marks.length;
const studentMarks = `Studento pazymiu vidurkis yra ${marksAaverage}.`;
console.log(studentMarks);

// Masytvas vietovardziu.
// Suformuojant sakini:
// "Mano aplankytos vietos: Vieta1, Vieta2, Vieta3."

const places = ['Siaures asigalis', 'Menulis', 'Pusiaujas'];
// const placesStr = 'Virta1, Virta2, Vieta3';
// const placesStr = `${places[0]}, ${places[1]}, ${places[2]}`;
let placesStr = places[0];
placesStr += ', ';
placesStr += places[1];
placesStr += ', ';
placesStr += places[2];

const placesSentence = `Mano aplankytos vietos: ${placesStr}`
console.log(placesSentence);

/*
const index1 = pazymiai[0]
const index2 = pazymiai[1]
const index3 = pazymiai[2]
const index4 = pazymiai[3]
const index5 = pazymiai[4]
const index6 = pazymiai[5]
const indexSum = index1 + index2 + index3 + index4 + index5 + index6
console.log(indexSum);
const pazymiuVidurkis = (indexSum) / (pazymiai.length);
console.log('Studento pazymiu vidurkis yra', pazymiuVidurkis);
*/

/*
console.log('pazimiuVidurkis', pazymiai.reduce((a, b) => a + b));
console.log(pazymiai.indexOf);

const val1 = 6;
const val2 = 4;

if (val1) {
    console.log(val1);
}

val2 && console.log(val1);

const arr1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
console.log(new Set(arr1));
*/


console.log('-----');

const colors = ['geltonas', 'zalia', 'raudona' ];
console.log(colors);
console.log(colors[1]);

colors[1] = 777;
console.log(colors[1]);

colors[1] = 'žalias';
console.log(colors);

let name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

name[0] = 'H';
console.log(name);

name = 'Hhuck';
console.log(name);


console.log('-----');
let y = 5;
let x = 7;

// x = x + ++y; // 13
// x = x++ + y; // 12
// x = x +++ y; // 12
console.log(x);
console.log(x);