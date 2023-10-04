console.clear();
/*
Duodamas testas.
Jame yra tarpai.
Ka reikia padaryti?
- pradzioje nebutu tarpu;
- pabaigoje nebutu tarpu;
- jei tarp zodziu yra is eiles einanciu daugiau nei 
vienas tarpas, tai turi likti tik 1 tarpas;
*/

const str1 = '     labas    ';
const ats1 = 'labas';
const bandimas1 = str1.trim();

const str2 = '     labas     rytas          tau     ';
const ats2 = 'labas rytas tau';

const str3 = 'ka    tu?    ka     vakare?';
const ats3 = 'ka tu? ka vakare?';

function isvalymas(text1) {
    let ats = text1.trim();
    for (; text1.includes('  ');) {
        text1 = text1.replaceAll('  ', ' ');
    }
    return text1
}

console.log(isvalymas(str1), '\n\r', ats1, '\n\r\-----');
console.log(isvalymas(str2), '\n\r', ats2, '\n\r\-----');
console.log(isvalymas(str3), '\n\r', ats3, '\n\r\-----');