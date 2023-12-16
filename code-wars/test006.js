const I = 1;
const V = 5;
const X = 10;
const L = 50;
const C = 100;
const D = 500;
const M = 1000;

class RomanNumerals {
    // static toRoman(num) {
    //   return 'IV';
    // }
  
    static fromRoman(str) {
        const txt = str.split("");
      return txt;
    }
  }

//  console.log(RomanNumerals.toRoman(1000), 'M');
//  console.log(RomanNumerals.toRoman(4), 'IV');
//  console.log(RomanNumerals.toRoman(1), 'I');
//  console.log(RomanNumerals.toRoman(1990), 'MCMXC');
//  console.log(RomanNumerals.toRoman(2008), 'MMVIII');

 console.log(RomanNumerals.fromRoman('XXI'), 21);
 console.log(RomanNumerals.fromRoman('I'), 1);
 console.log(RomanNumerals.fromRoman('IV'), 4);
 console.log(RomanNumerals.fromRoman('MMVIII'), 2008);
 console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666);

 