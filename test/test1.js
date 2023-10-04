console.clear();


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(findAverage([1,1,1]), 1);
//     assert.strictEqual(findAverage([1,2,3]), 2);
//     assert.strictEqual(findAverage([1,2,3,4]), 2.5);
//   });
// });  


function findAverage1(pazimei) {
    let totalSum = 0;
    let i = 0;
    totalSum += pazimei[i++];
    totalSum += pazimei[i++];
    totalSum += pazimei[i++];
    const avarage = totalSum / pazimei.length;
    return `${avarage}`
  }

  console.log(findAverage1([1,1,1]));


  function findAverage2(pazimei) {
    let totalSum = 0;
    let i = 0;
    totalSum += pazimei[i++];
    totalSum += pazimei[i++];
    totalSum += pazimei[i++];
    const avarage = totalSum / pazimei.length;
    return `${avarage}`
  }

  console.log(findAverage2([1,2,3]));


  function findAverage3(pazimei) {
    let totalSum = 0;
    let i = 0;
    totalSum += pazimei[i++];
    totalSum += pazimei[i++];
    totalSum += pazimei[i++];
    totalSum += pazimei[i++];
    const avarage = totalSum / pazimei.length;
    return `${avarage}`
  }

  console.log(findAverage3([1,2,3,4]));

  console.log('\n\r-----Nuorodos');

// const nuoroda = ['https://formlabs.com/store/materials/grey-resin/https://formlabs.com/store/materials/clear-resin/', 'https://formlabs.com/store/materials/white-resin/', 'https://formlabs.com/store/materials/black-resin/', 'https://formlabs.com/store/materials/draft-v2-resin/', 'https://formlabs.com/store/materials/grey-pro-resin/', 'https://formlabs.com/store/materials/tough-2000-resin/', 'https://formlabs.com/store/materials/tough-1500-resin/', 'https://formlabs.com/store/materials/durable-resin/', 'https://formlabs.com/store/materials/rigid-10k-resin/', 'https://formlabs.com/store/materials/rigid-resin/', 'https://formlabs.com/store/materials/esd-resin/', 'https://formlabs.com/store/materials/flexible-80a-resin/', 'https://formlabs.com/store/materials/elastic-resin/', 'https://formlabs.com/store/materials/pu-rigid-1000-resin/', 'https://formlabs.com/store/materials/pu-rigid-650-resin/', 'https://formlabs.com/store/materials/high-temp-resin/', 'https://formlabs.com/store/materials/castable-wax-resin/', 'https://formlabs.com/store/materials/castable-wax-40-resin/', 'https://formlabs.com/store/materials/color-kit/]'];
// let nuorodosSuma = 0;
// const nuoroduYraIsViso = nuoroda.length;
// let atmintine = ''
// for (let i = 0; i < nuoroduYraIsViso; i++) {
//     atmintine += `${i + 1}. ${nuoroda[i]}\n\r\n\r`
// }

// console.log(atmintine);


console.log('\n\r-----CodeWars1');

function mergeArrays(a, b) {
  let x = 0;
  let y = [];
  const suma1 = a.length - 1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
       y.push(a[i]) + y.push(b[i]);
    } else {
      if (a[i] > b[i]) {
        y.push(b[i]) + y.push(a[i]);
      } else {
        y.push(a[i]);
      }      
    }
  }
  return y;
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeArrays([2, 4, 8], [2, 4, 6]));

console.log('\n\r-----CodeWars2');
function getEvenNumbers(numbersArray){
  let evenNumbers = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      evenNumbers.push(numbersArray[i]);
    }
  }
  return evenNumbers
}

console.log(getEvenNumbers([1,2,3,6,8,10]));
console.log(getEvenNumbers([1,2]));
console.log(getEvenNumbers([12,14,15]));
console.log(getEvenNumbers([13,15]));
console.log(getEvenNumbers([1,3,9]));

console.log('\n\r-----CodeWars3');
function getNames(data){
  return data.map(function(item) {
    return item.name;
  });
}

var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
];

var names = getNames(data);
console.log(names);

console.log('\n\r-----CodeWars4');
function divisibleBy(numbers, divisor){
  let Test = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      Test.push(numbers[i]); 
    }
  }
  return Test
}

console.log(divisibleBy([1,2,3,4,5,6], 2));
console.log(divisibleBy([1,2,3,4,5,6], 3));
console.log(divisibleBy([0,1,2,3,4,5,6], 4));
console.log(divisibleBy([0], 4));
console.log(divisibleBy([1,3,5], 2));

console.log('\n\r-----CodeWars4.2');
function divisibleBy(numbers, divisor){
  return numbers.filter(n => n % divisor === 0)
}

console.log(divisibleBy([1,2,3,4,5,6], 2));
console.log(divisibleBy([1,2,3,4,5,6], 3));
console.log(divisibleBy([0,1,2,3,4,5,6], 4));
console.log(divisibleBy([0], 4));
console.log(divisibleBy([1,3,5], 2));

console.log('\n\r-----CodeWars5');

function findDeletedNumber(arr, mixArr) {
  const sumArr = arr.reduce((a, b) => a + b, 0); // Apskaičiuojame pradinio masyvo sumą
  const sumMixArr = mixArr.reduce((a, b) => a + b, 0); // Apskaičiuojame mišraus masyvo sumą
  return sumArr - sumMixArr; // Rasti skirtumą tarp pradinio ir mišraus masyvų sumų
}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]));
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]));
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]));

console.log('\n\r-----CodeWars6?');
function doMath(s) {
  // Žingsnis 1: Išskaidyti tekstą į skaičius ir operacijas
  const parts = s.split(' ');
  let result = 0;
  let currentOperator = '+';
  // Žingsnis 2: Atlikti matematinius veiksmus
  for (const part of parts) {
    if (/[0-9]/.test(part)) {
      const number = parseInt(part);
      if (currentOperator === '+') {
        result += number;
      } else if (currentOperator === '-') {
        result -= number;
      } else if (currentOperator === '*') {
        result *= number;
      } else if (currentOperator === '/') {
        result /= number;
      }
    } else if (/[+\-*/]/.test(part)) {
      currentOperator = part;
    }
  }
  // Žingsnis 3: Grąžinti galutinį rezultatą
  return result;
}

console.log(doMath("24z6 1z23 y369 89z 900b"),1414);
console.log(doMath("24z6 1x23 y369 89a 900b"),1299);
console.log(doMath("10a 90x 14b 78u 45a 7b 34y"),60);
console.log(doMath("111a 222c 444y 777u 999a 888p"),1459);
console.log(doMath("1z 2t 3q 5x 6u 8a 7b"),8);