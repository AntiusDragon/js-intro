/*
BOOLEAN -logine reiksme

galimos reiksmes: true (1) / false (0);

Operacijops:
- && (and) visi turi buti "true" , jog gauti "true"
- || (or) bent vienas turi buti "true" , jog gauti "true"
*/

console.clear();

const arPilnametis = true;
const arLija = false;

const isSunnyDay = true;
const isNight = false;

console.log(isSunnyDay);
console.log(isNight);

const count1 = false + false + true + true + true + false;
console.log('>>>>', count1);

const count2 = (false + true + true) * (true + true + true);
console.log('>>>>', count2);

const a1 = true && true;
console.log('a1:', a1);

const a2 = true || true;
console.log('a2:', a2);

const a3 = true || false;
console.log('a3:', a3);

const a4 = true && false && true;
console.log('a4:', a4);

const a5 = true && (false || true);
// const e = true && (true);
// const e = true && true;
// const e = true ;
console.log('a5:', a5);

const a6 = true && false || true;
console.log('a6:', a6);

