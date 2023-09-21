/*
STRING

Iniciavimas kabutemis: "", '', `` (backtick)

Teksto ilgis: kintamasis.length
Teksto ilgis: 'labas'.length
*/

console.clear();

const txt1 = "tekstas1";
console.log(txt1);

const txt2 = 'tekstas2';
console.log(txt2);

// Vienguba kabute (').
const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Dvyguba kabute (")
const kabute2 = 'Dvyguba kabute (").';
console.log(kabute2);

// Vienguba (') dvyguba kabute (") kabutes.
const kabute3 = 'Vienguba (\') dvyguba (\") kabutes.';
console.log(kabute3);

// \n = new line (nusileidzia zemin)
// \r = return (grista i eilutes pradzia)
const formatuotasTekstas2 = 'Labas\n\r\
rytas,\n\r\
Lietuva!';
console.log(formatuotasTekstas2);

/* \n
Labas
     rytas
         Lietuva
*/

/* \r
Labas\rrytas\rLietuva
Lietuva
*/

const gg = '123456789\raaa\rbbbbb\rxx'
console.log(gg);

const backtick = `Labas
rytas
Lietuva`;
console.log(backtick);

// ISVALO SARASA
console.clear();

const vardas = 'Chuck';
console.log(vardas, '=', vardas.length, 'simboliai');

const pavarde = 'Norris';
const pilnasVardas = 'Chuck Norris'
console.log(pilnasVardas, pilnasVardas.length);

const fullname = vardas + ' ' + pavarde;
console.log(fullname, fullname.length);

const labas = 'Labas';
const parosMetas = 'vakaras';
const valstybe = 'Latvija';

const lr1 = labas + ' ' + parosMetas + ', ' + valstybe + '!'
console.log(lr1, lr1.length);

const lr2 = `${labas} ${parosMetas}, ${valstybe}!`;
console.log(lr2);

// ISVALO SARASA
console.clear();

const n1 = 5 + 7;
console.log(n1);

const n2 = 5 + '7';
console.log(n2);

const n3 = '5' + 7;
console.log(n3);

const n4 = '5' + '7';
console.log(n4);

const n5 = 7 - 5;
console.log(n5);

const n6 = '7' - 5;
console.log(n6);

const n7 = 7 - '5';
console.log(n7);

const n8 = '7' - '5';
console.log(n8);

const ll1 = 'labas' - 'l';
console.log(ll1);

const ll2 = 'labas' / 'l';
console.log(ll2);