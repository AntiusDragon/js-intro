console.clear();

const n1 = 7;
const n2 = 5;

// function declaration
function suma(a, b ) {
    return a + b;
}
console.log(suma(n1, n2));
console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);

// kintamajam priskirti anonimine funkcija
const skirtumas = function (a, b ) {
    return a - b;
}
console.log(`${n1} - ${n2} = `, skirtumas(n1, n2));

// arrow (rodykline) function
const sandauga = (a, b ) => {
    return a * b;
}
console.log(`${n1} * ${n2} = `, sandauga(n1, n2));

// arrow function
// jeigu, logikos bloke yra tik 1 procedura (statement)
// tai galime nerasyti {return}
const dalmuo = (a, b ) => a / b;
console.log(`${n1} / ${n2} = `, dalmuo(n1, n2));

// arrow function
// jeigu, parametru bloke yra tik 1 parametras
// tai galima nerasyti: ( )
const kvadratu = a => a ** 2
console.log(`${n1} ** 2 = `, kvadratu(n1));
console.log(`${n2} ** 2 = `, kvadratu(n2));