/*
ARRAY - sąrašas / masyvas / kolekcija / listas / matrica / arėjas
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

// Masytvas vietovardziu.
// Suformuojant sakini:
// "Mano aplankytos vietos: Vieta1, Vieta2, Vieta3."

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