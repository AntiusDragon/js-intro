console.log('\n\r-----1.Užduotis');
// Markas ir Johnas bando palyginti savo KMI (kūno masės indeksą), kuris yra
// apskaičiuojamas pagal formulę:
// KMI = masė / ūgis ** 2 = masė / (ūgis * ūgis) (masė kg ir aukštis metrais).

// Jūsų užduotys:
// 1. Išsaugokite Marko ir Jono masę ir ūgį kintamaisiais
// 2. Apskaičiuokite abiejų jų KMI naudodami formulę 
// 3. Sukurkite true false kintamąjį „markHigherBMI“ su informacija apie ar Marko KMI didesnis nei Jono.

// Bandymo duomenys:
// § 1 duomenys: sveria 78 kg ir yra 1,69 m ūgio. Jonas sveria 92 kg ir yra 1,95 ūgio
// m aukščio.
// § 2 duomenys: sveria 95 kg ir yra 1,88 m ūgio. Jonas sveria 85 kg ir yra 1,76 ūgio
// m aukščio.
const marko = {
    svoris:  78,
    ugis:  1.69,
};
const jono = {
    Svoris:  92,
    Ugis:  1.95,
}

const kmi = function (ugis1, svoris1) {
    return +(svoris1 / (ugis1 ** 2)).toFixed(2);
}

const markoKMI = kmi(marko.ugis, marko.svoris);
const jonoKMI = kmi(jono.Ugis, jono.Svoris)

console.log(kmi(marko.ugis, marko.svoris));
console.log(kmi(jono.Ugis, jono.Svoris));

console.log('\n\r-----2.Užduotis');
// Naudokite KMI pavyzdį iš 1 iššūkio ir kodą, kurį jau parašėte, ir
// pagerinti jį.
// Jūsų užduotys:

// 1. Išspausdinkite gražią išvestį į konsole ar terminalą, nurodydami, kas turi didesnį KMI. Žinutė
// yra arba "Marko KMI didesnis nei Jono!" arba "Jono KMI yra didesnis nei Marko!"

// 2. Naudokite Template literals, kad įtrauktumėte KMI reikšmes į išvestis. Pavyzdys: „Marko
// KMI (28,3) yra didesnis nei Jono (23,9)!
if (markoKMI > jonoKMI) {
    console.log('markHigherBM - true');
}
if (markoKMI < jonoKMI) {
    console.log('markHigherBM - false');
}

console.log('\n\r-----3.Užduotis');
// Yra dvi gimnastikos komandos – delfinai ir koalos. Jie varžosi viena prieš kitą 3 kartus. Nugalėtojas, surinkęs didžiausią balų vidurkį, laimi trofėjų!
// Jūsų užduotys:
// Apskaičiuokite kiekvienos komandos taškų vidurkį, naudodami toliau pateiktus testo duomenis

// 2. Palyginkite komandos balų vidurkį, kad nustatytumėte konkurso nugalėtoją.
// ir atsispausdinkite į konsolę. Nepamirškite, kad gali būti lygios, todėl išbandykite tai
// taip pat (lygiosios reiškia, kad jie turi tą patį vidutinį balą)

// 3.  bonus užduotis: įtraukite reikalavimą turėti mažiausiai 100 balų. Pagal šią taisyklę
// komanda laimi tik tuo atveju, jei ji turi didesnį balą nei kita komanda, ir tuo pačiu
// surinkti ne mažiau kaip 100 taškų. 

// 4. bonus užduotis  Minimalus rezultatas taip pat taikomas lygiosioms! Taigi lygiosios įvyksta tik tada, kai abi komandos turi vienodą rezultatą ir abi turi didesnį arba lygų 100 balų
// taškų. Priešingu atveju jokia komanda nelaimės trofėjaus
// Bandymo duomenys:

// § 1 duomenys: delfinai surinko 96, 108 ir 89 balus. Koalos balai 88, 91 ir 110
// § Duomenų bonus užduočiai 1: delfinų balai 97, 112 ir 101. Koalos balai 109, 95 ir 123
// § 2 duomenų bonus užduočiai: delfinų balai 97, 112 ir 101. Koalos balai 109, 95 ir 106


function vidurkis(delfinai, koalos) {
    let sum1 = 0;
    for (let i = 0; i < delfinai.length; i++) {
        sum1 += delfinai[i];
    }
    const avarage1 = sum1 / delfinai.length;

    let sum2 = 0;
    for (let i = 0; i < koalos.length; i++) {
        sum2 += koalos[i];
    }
    const avarage2 = sum2 / koalos.length;

    if (sum1 > sum2) {
        return `Daugiausiai surinko Delfinai [${avarage1}]`;
    }
    if (sum1 < sum2) {
        return `Daugiausiai surinko Koralos [${avarage2}]`;
    }
}

console.log(vidurkis([96, 112, 101], [88, 91, 110]));


console.log('\n\r-----4.Užduotis');
/*
Evenas nori sukurti labai paprastą arbatpinigių skaičiuotuvą, kai jis eina valgyti į 
restoraną. Jo šalyje įprasta duoti 15 % arbatpinigių, jei sąskaitos vertė yra nuo 50 iki 300. 
Jei vertė skiriasi, arbatpinigiai yra 20%.
Jūsų užduotys:
	
Apskaičiuokite arbatpinigių, priklausomai nuo sąskaitos vertės. Sukurkite kintamąjį pavadinimu „Tip“.
Neleidžiama naudoti if/else teiginio  (Jei jums taip lengviau, galite
pradėti nuo if/else teiginio, tada pabandykite jį konvertuoti į ternery
operator!)

Į konsole atspausdinkite eilutę, kurioje yra sąskaitos vertė, arbatpinigiai ir galutinė vertė
(sąskaita + arbatpinigiai). Pavyzdys: „Sąskaita buvo 275, arbatpinigiai 41,25, o bendra vertė 316,25"

Bandymo duomenys:
§ 1 duomenys: patikrinkite sąskaitos reikšmes 275, 40 ir 430
*/

function tip(money) {
    return 
}

  
console.log(tip, 275);
console.log(tip, 40);
console.log(tip, 430);

console.log('\n\r-----3.1');
/*
1. Sukurti du kintamuosius.
Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis).
Atspausdinti trumpesnį stringą.
*/
let vardas = '';
function aktorius(aktoriausName) {
    vardas = aktoriausName.split(' ');
    return vardas[0] > vardas[1] ?vardas[0] :vardas[1]
}

console.log(aktorius('Dzekis Canas'));
console.log(aktorius('Krisas Takerjs'));

console.log('\n\r-----3.2');
/*
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus 
(nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir 
naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį:
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
*/
const vartotojai = [
    {
    vardas: 'Antanas',
    pavarde: 'Urbanavicius',
    gimimoMetai: [1992],
    },
    {
    vardas: 'Simonas',
    pavarde: 'Mureika',
    gimimoMetai: [1987],
    },
    {
    vardas: 'Kristina',
    pavarde: 'Maciuityte',
    gimimoMetai: [1997],
    },
    {
    vardas: 'Liucija',
    pavarde: 'Rakauskaite',
    gimimoMetai: [1996],
    },
];

// Vartotoju pajjeska
const ieškomasVardas = 'Kristina';
const ieškomasVartotojas = vartotojai.find(vartotojas => {
    return vartotojas.vardas === ieškomasVardas;
  });

  if (ieškomasVartotojas) {
    console.log('Rastas vartotojas:');
    console.log(ieškomasVartotojas);
  } else {
    console.log('Vartotojas nerastas.');
  }

// vartotoju metu skaiciokle
var dabartiniaiMetai = new Date().getFullYear();
for (let i = 0; i < vartotojai.length; i++) {
    const vartotojoMetai = dabartiniaiMetai - vartotojai[i].gimimoMetai;
    console.log(`Aš esu ${vartotojai[i].vardas} ${vartotojai[i].pavarde}. Man yra ${vartotojoMetai} metai(ų)`);
}

console.log('\n\r-----3.3');
/*
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės
kintamųjų raidžių. Jį atspausdinti.
*/
// const aktoriai2 ={
//     vardas1: 'Dzekis Canas',
//     vardas2: 'Krisas Takerjs',
// }
// let vardas2 = '';
// function aktorius(aktoriausName) {
//     vardas2 = aktoriausName.split(' ');
//     return vardas2[0] > vardas2[1] ?vardas2[0] :vardas2[1]
// }

console.log('\n\r-----3.4');
/*
Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” 
(didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/
const tekstas = text => text.replaceAll('O', '*').replaceAll('o', '*');
console.log(tekstas('Once upon a time in hollywood'));


console.log('\n\r-----3.5');
/*
Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
*/

console.log('\n\r-----3.6');
/*
Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

console.log('\n\r-----3.7');
/*
Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.
*/

console.log('\n\r-----3.8');
/*
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

console.log('\n\r-----3.9');
/*
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/

// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
