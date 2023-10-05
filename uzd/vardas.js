console.clear();
/*
Duodamas vardas.. ar bant rai jau galvojama...
Ka daryti?
- raikia nustatyi, ar dave varda, ar ne?
*/

// Jonas -> true
// Maryte -> true
// 123456 -> false
// labas -> false
// Labas -> true
// Azolas -> false
// Egle -> false

function lookLineName(text) {
    // jeigu, Pirma raide nera didzioji
    // graziname: false
    if (text[0] !== text[0].toUpperCase()) {
        return 'Klaida: pirma raide privalo buti didzioji';
    }

    //jeigu, visi kiti simboliai, apart pirmo, yra ne mazosios raides
    // graziname: false
    const likusiosRaides = text.slice(1);
    if (likusiosRaides !== likusiosRaides.toLowerCase()) {
            return 'Klaida: visos likusios raides privalo buti mazosios';
        }

    // jeigu, yra simbolis 0, 1, 2 ... 9 (skaitmuo)
    // graziname: false

    const neleistiniSimboliai = '0123456789';
    for (let i = 0; i < neleistiniSimboliai.length; i++) {
        const simbolis = neleistiniSimboliai[i];
        if (text.includes(simbolis)) {
            return `Klaida:"${simbolis}" nera leistinas simbolis`
        }
    }
    // for (let i = 0; i <= 9; i++) {
    //     if (text.includes(i)) {
    //         return 'Klaida:';
    //     }
    // }

    // jeigu, neradau kaip atmesti, kodel "text" negaletu buti tinkamas vardas
    // graziname: true
    return true;
}

console.log(lookLineName('Jonas'), true);
console.log(lookLineName('Maryte'), true);
console.log(lookLineName('123456'), false);
console.log(lookLineName('labas'), false);
console.log(lookLineName('Labas'), true);
console.log(lookLineName('Azuolas'), true);
console.log(lookLineName('5Azuolas'), false);
console.log(lookLineName('Azuolas5'), false);
console.log(lookLineName('Azuo9las'), false);
console.log(lookLineName('Egle'), true);

console.log('\n\r------');
function isName(name) {
    if (typeof name !== 'string') {
        return 'Klaida: netinkamas duomens ipas, privalo butis "string".';
    }

    const minNameLength = 2;
    if (name.length < minNameLength) {
        return `Klaida: per trumpas vardas; minimum ${minNameLength} simboliai`;
    }

    const MaxNameLength = 20;
    if (name.length > MaxNameLength) {
        return `Klaida: per trumpas vardas; maximum ${MaxNameLength} simboliai`;
    }

    const pirmaRaide = name[0];
    if (pirmaRaide[0].toUpperCase() !== pirmaRaide[0]) {
        return 'Klaida: Pirma raide privalo buti didzioji';
    }

    const likusiosRaides = name.slice(1);
    if (likusiosRaides.toLocaleLowerCase() !== likusiosRaides) {
        return 'Klaida: likusios (apart pirmos) raides privalo buti mazosios';
    }

    const abc = 'qwertyuiopasdfghjklzxcvbnm';
    const ABC = abc.toUpperCase();
    const nameLowercase = name. toLocaleLowerCase();    
    for (let i = 0; i < nameLowercase.length; i++) {
        const raide = nameLowercase[i];

        if (abc.includes(raide)) {
            return `Klaida: neleistinas simbolis varde "${raide}"`;
        }
    }
    return 'Ok';
}

console.log(isName());
console.log(isName(undefined));
console.log(isName(13));
console.log(isName(NaN));
console.log(isName(Infinity));
console.log(isName(true));
console.log(isName(false));
console.log(isName([]));
console.log(isName({}));
console.log(isName(isName), '\n\r');

console.log(isName(''));
console.log(isName('L'));
console.log(isName('Liiiiiiiiiiiiiiiiiiii'));
console.log(isName('marYte'));
console.log(isName('JonAs'), '\n\r');

console.log(isName('Jonas'));
console.log(isName('9onas'));
console.log(isName('👀'));
console.log(isName('J nas'), '\n\r');

console.log(isName('Li'));
console.log(isName('Jonas'));

console.log('\n\r-----');

const miestas = 'Miestas';
let error = '';

if (miestas.length < 10) {
    error += 'Per trumpas pavadinimas; ';
}

if (miestas.length > 20) {
    error += 'Per ilgas pavadinimas; ';
}

if (miestas[0].toUpperCase() !== miestas[0]) {
    error += 'Pirmas simbolis turi buti didzioji raide; ';
}

if (error === '') {
    console.log('OK!!!');
} else {
    console.log(error);
}