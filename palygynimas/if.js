/*
IF - palyginimo sakinys/salyga

Palyginimo operatoriai:
- visi: > , < , ==, ===, >=, <=, !=, !==
- naudotini: > , < , ===, >=, <=, !==
- nenaudotini: ==, !=

Loginiai operatoriai:
&&, ||, !

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if() {}
if () {} ... else if() { } ... else { }
*/

console. clear();

if (4 > 2) {
    console.log('4 yra daugiau uz 2');
}

if (5 < 0) {
    console.log('5 yra daugiau uz 0');
}

console.log('-----');
if (true) {
    console.log(true);
}

if (false) {
    console.log(false);
}

const a = 7;
const b = 55;

if (a > b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A yra maziau arba lygu uz B');
}

// 0+1  2  3  4  5  6  7
// 7+1  9 10 11 12 13 14
//14+1 16 17 18 19 20 21
//21+1 23 24 25 26 27 28

const day = 21;
if (day % 7 == 1 ) {
    console.log('Pirmadienis');
} else if (day % 7 == 2) {
    console.log('Antradienis');
} else if (day % 7 == 3) {
    console.log('Treciadienis');
} else if (day % 7 == 4) {
    console.log('Ketvirtadienis');
} else if (day % 7 == 5) {
    console.log('Penktadienis');
} else if (day % 7 == 6) {
    console.log('Sestadienis');
} else if (day % 7 == 0) {
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja!');
}


console.log('------');

// Kodo nestinimas

const  diena = 8;

if (diena === 1) {
    console.log('Pirmadienis');
} else {
    if (diena === 2) {
        console.log('Antradienis');
    } else {
        if (diena === 3) {
            console.log('Treciadienis');            
        } else {
            if (diena === 5) {
                console.log('Penktadienis');
            } else {
                if (diena === 6) {
                    console.log('Sestadienis');                    
                } else {
                    if (diena === 7) {
                        console.log('Sekmadienis');
                    } else {
                        console.log('Tokia diena neegzistuoja!');                        
                    }
                }
            }
        }
    }
}

console.log('------');

/*
Gali buti:
- diena /naktis
- lyja / nelyja
console.log('Panasu, jog naktis.. 👀');
*/

const parosMetas ='diena';
const arLyja = true;
const temp = 25;
const kadaSilta = 20;
const arAsSuStriuke = false;

if (parosMetas === 'diena' && arLyja && temp >= kadaSilta) {
    console.log('Einam sokti lietuje! 😏');
} else if (parosMetas === 'diena' && arLyja && temp < kadaSilta) {
    console.log('Saltas lietus... niekur neisiu sokti.. 💧');
} else if (parosMetas === 'diena' && !arLyja && temp >= kadaSilta) {
    console.log('Eiline diena rojuje ✌️');
} else if (parosMetas === 'diena' && !arLyja && temp < kadaSilta) {
    console.log('Eiline diena rojuje... nors ir nelabai silta.. ✌️');
} else if (parosMetas === 'naktis' && arLyja && temp >= kadaSilta) {
    console.log('Siedim namie, bet gal ir galima butu iseiti 👀');
} else if (parosMetas === 'naktis' && arLyja && temp < kadaSilta) {
    console.log('Siedim namie!!! 👀');
} else if (parosMetas === 'naktis' && !arLyja && temp >= kadaSilta) {
    console.log('Galim eiti paziureti zvaigzdiu ⭐');
} else if (parosMetas === 'naktis' && !arLyja && temp < kadaSilta) {
    console.log('Galeisiu miegoti ⭐');
}

if (parosMetas ==='diena') {
    if (arLyja) {
        if (temp >= kadaSilta) {
            if (arAsSuStriuke) {
                console.log('Einam sokti lietuje! 😏');
            } else {
                console.log('Einam sokti lietuje ir suslapsim! 😏');
            }
        } else {
            if (arAsSuStriuke) {
                console.log('Saltas lietus... eisiu sokti. 💧');
            } else {
                console.log('Saltas lietus... niekur neisiu sokti.. 💧');
            }            
        }        
    } else {
        if (temp >= kadaSilta) {
            if (arAsSuStriuke) {
                console.log('Eiline diena rojuje. taciau kur dieti striuke? 😒');
            } else {
                console.log('Eiline diena rojuje ✌️');
            }            
        } else {
            if (condition) {
                console.log('Eiline diena rojuje... gerai, kad turiu striuke. ✌️');
            } else {
                console.log('Eiline diena rojuje... nors ir nelabai silta.. ✌️');
            }            
        }        
    }
} else {
    if (arLyja) {
        if (temp >= kadaSilta) {
            if (arAsSuStriuke) {
                console.log('Siedim namie, nors turiu striuke 👀');
            } else {
                console.log('Siedim namie, bet gal ir galima butu iseiti 👀');
            }
        } else {            
            if (arAsSuStriuke) {
                console.log('Siedim namie, nors esu su striuke 👀');
            } else {
                console.log('Siedim namie!!! 👀');
            }
        }
    } else {
        if (temp >= kadaSilta) {
            if (arAsSuStriuke) {
                console.log('Galim eiti paziureti zvaigzdiu, taciau kur dieti striuke? ⭐');
            } else {
                console.log('Galim eiti paziureti zvaigzdiu ⭐');
            }
        } else {
            if (arAsSuStriuke) {
                console.log('Galeisiu miegoti nors turiu stiuke ⭐');
            } else {
                console.log('Galeisiu miegoti ⭐');
            }            
        }        
    }
}

console.log('-----');

const g = 7;
const h = 5;

if (g !== h) {
    console.log('Daugiau ar lygu');
} else {
    console.log('Maziau');
}

// !== vs !=
// === (Tikrina tipus)
// vs == (Tikrina skaicius)



if (7 === '7') {
    console.log('aa');
} else {
    console.log('bb');
}

const w = 'a'
const e = 'b'

if (w > e) {
    console.log(`${w} yra daugiau uz ${e}`);
} else {
    console.log(`${w} yra maziau uz ${e}`);
}

console.log('\n\r-----');
// !true
// !false
if (!true) {
    console.log('gg');
} else {
    console.log('fail...');
}