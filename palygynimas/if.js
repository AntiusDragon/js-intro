/*
IF - palyginimo sakinys/salyga

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




