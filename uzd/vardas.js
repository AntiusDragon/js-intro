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