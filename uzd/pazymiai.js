console.clear();

 const marks0 = [10, 2, 8, 4, 6];
 const marks1 = [10, 2, 8, 'a',  4, 6];
 const marks2 = [];
 const marks3 = [10, -2, -10, 2, 3.14, 8, 2.72, 4, 0, 80, 99, 120, 6];
 
 function marksAvarage(marksList) {
     let totalSum = 0;
     let count = 0;
     for (let i = 0; i < marksList.length; i++) {
        if (typeof marksList[i] !== 'number') {
            continue;
        }

        if (marksList[i] > 10) {
            continue;
        }

        if (marksList[i] < 1) {
            continue;
        }
        
        // '3.14' .includes('.') -> true

        // '3' .split('.').length -> ['3'] -> 1
        // '3.14' .split('.').length -> ['3', '14'] -> 2

        // parseInt('3.14') === 3.14 -> 3 === 3.14 -> false
        // parseFloat('3.14') === 3.14 -> true
        if (!Number.isInteger(marksList[i])) {
            continue;
        }

        totalSum += marksList[i];
        count++;
    }
    const avarage = totalSum / count;
    // return count === 0 ? 'Neiskaityta' : avarage;
    // return count > 0 ? avarage : 'Neiskaityta';
    return count ? avarage : 'Neiskaityta';
}

console.log(marksAvarage(marks0),  '->', 6);
console.log(marksAvarage(marks1),  '->', 6);
console.log(marksAvarage(marks2),  '->', 6);
console.log(marksAvarage(marks3),  '->', 6);

console.log('\n\r-----');
const marks00 = [10, 2, 8, 4, 6];
const marks01 = [10, 2, 8, 'a',  4, 6];
const marks02 = [];
const marks03 = [10, -2, -10, 2, 3.14, 8, 2.72, 4, 0, 80, 99, 120, 6];
const marks04 = [10, 2, 8, NaN, Infinity, -Infinity, 4, 6];
const marks05 = 'labas';
const marks06 = [];

function marksAvarage(marksList) {
    if (!Array.isArray(marksList)) {
        return 'Error: duok masyva!';
    }

    if (marksList.length < 1) {
        return ' Error: ';
    }

    let totalSum = 0;
    let count = 0;
    for (let i = 0; i < marksList.length; i++) {
       if (typeof marksList[i] !== 'number'
            || marksList[i] % 1 !== 0
            || marksList[i] > 10
            || marksList[i] < 1){
            // || !Number.isInteger(marksList[i])){
           continue;
       }
       totalSum += marksList[i];
       count++;
   }
   const avarage = totalSum / count;
   return count ? avarage : 'Neiskaityta';
}

console.log('marks00:', marksAvarage(marks00),  '->', 6);
console.log('marks01:', marksAvarage(marks01),  '->', 6);
console.log('marks02:', marksAvarage(marks02),  '->', 6);
console.log('marks03:', marksAvarage(marks03),  '->', 6);
console.log('marks04:', marksAvarage(marks04),  '->', 6);
console.log('marks05:', marksAvarage(marks05),  '->', 6);
console.log('marks06:', marksAvarage(marks06),  '->', 6);