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

console.log('\n\r-----CodeWars7');
// function divisibleBy(numbers, divisor){
//   return numbers.filter(numbers => numbers % divisor === 0)
// }

function divisibleBy(numbers, divisor) {
	var newArr = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % divisor === 0) {
			newArr.push(numbers[i]);
		} 
	}
return newArr;
}
console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1,3,5], 2), []);

console.log('\n\r-----CodeWars8');

function solution(str){
  let CodeWars8 = '';
  for (let i = 0; i < str.length; i++) {
    CodeWars8 += str[(str.length -1) - i];    
  }
  return CodeWars8
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');

console.log('\n\r-----CodeWars9');
function noOdds( values ){
  let CodeWars9 = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      CodeWars9.push(values[i]);
    } 
  }
  return CodeWars9
}

console.log(noOdds( [0,1] ), [0] );
console.log(noOdds( [0,1,2,3] ), [0,2] );

console.log('\n\r-----CodeWars9');
function toUnderScore(text) {
  const abc = 'qwertyuiopasdfghjklzxcvbnm_QWERTYUIOPASDFGHJKLZXCVBNM';
  const nameLowercase = text.toLocaleLowerCase();
  const error = '';
  let sakinis = text[0];
  if (text === '') {
    return 'Error.';
  }

  for (let i = 1; i < text.length; i++) {
    if (text[i].toLowerCase() === text[i]) {
      if (abc.includes(text[i])) {
        sakinis += text[i];
      } else {
        if (abc.includes(text[i - 1])) {
          if (text[i - 1] === '_') {
            sakinis += text[i];
          } else {
            sakinis += '_' + text[i];
          }
        } else {
          sakinis += text[i];
        } 
      }
    } else {
      if (text[i - 1].toLowerCase() === '_') {
        sakinis += text[i];
      } else {
        sakinis += '_' + text[i];
      }
    }
  }
  return sakinis
}

console.log(toUnderScore(""));
console.log(toUnderScore("Abc_123Def"));
console.log(toUnderScore("ThisIsAUnitTest"), '\n\r', "This_Is_A_Unit_Test");
console.log(toUnderScore("ThisShouldBeSplittedCorrectIntoUnderscore"), '\n\r', "This_Should_Be_Splitted_Correct_Into_Underscore");    
console.log('');
console.log(toUnderScore("Calculate1Plus1Equals2"), '\n\r', "Calculate_1_Plus_1_Equals_2");
console.log(toUnderScore("Calculate15Plus5Equals20"), '\n\r', "Calculate_15_Plus_5_Equals_20");
console.log(toUnderScore("Calculate500DividedBy5Equals100"), '\n\r', "Calculate_500_Divided_By_5_Equals_100");
console.log('');
console.log(toUnderScore("This_Is_Already_Splitted_Correct"), '\n\r', "This_Is_Already_Splitted_Correct");
console.log(toUnderScore("ThisIs_Not_SplittedCorrect"), '\n\r', "This_Is_Not_Splitted_Correct");
console.log(toUnderScore("_IfATestStartAndEndsWithUnderscore_ItShouldBeTheSame_"), '\n\r', "_If_A_Test_Start_And_Ends_With_Underscore_It_Should_Be_The_Same_");

console.log('\n\r-----CodeWars10');
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Event' : 'Odd';
}

console.log(evenOrOdd(2), "Even");
console.log(evenOrOdd(7), "Odd");
console.log(evenOrOdd(-42), "Even");
console.log(evenOrOdd(-7), "Odd");
console.log(evenOrOdd(0), "Even");

console.log('\n\r-----CodeWars11');
function neutralise(s1, s2) {
  let CodeWars11 = '';
  for (let i = 0; i < s1.length; i++) {
    s1[i] === s2[i] ? CodeWars11 += s1[i] :CodeWars11 += 0
  }
  return CodeWars11;
}

console.log(neutralise("--++--", "++--++"), "000000");
console.log(neutralise("-+-+-+", "-+-+-+"), "-+-+-+");
console.log(neutralise("-++-", "-+-+"), "-+00");

console.log('\n\r-----CodeWars12');
function arrayPlusArray(arr1, arr2) {
  let CodeWars12 = 0;
  for (let i = 0; i < arr1.length; i++) {
    CodeWars12 += arr1[i] + arr2[i];
  }
  return CodeWars12;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

console.log('\n\r-----CodeWars12');
// const makeNegative = num => num > 0 ? num - num * 2 : num
function makeNegative(num) {
  return num < 0 ? num : -num;
}
console.log(makeNegative(42), -42);
console.log(makeNegative(-2), -2);

console.log('\n\r-----CodeWars13');
function findDifference(a, b) {
  let A13 = 1;
  let B13 = 1;
  for (let i = 0; i < a.length; i++) {
    A13 *= a[i];
    B13 *= b[i];
  }
  return (A13 - B13) < 0 ? B13 - A13 : A13 - B13;
}

console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);

console.log('\n\r-----CodeWars14');

function binToDec(bin) {
  // TODO
}

console.log(binToDec('0'), 0);
console.log(binToDec('1'), 1);
console.log(binToDec('10'), 2);
console.log(binToDec('1001001'), 73);

console.log('\n\r-----CodeWars15');
function countPositivesSumNegatives(input) {
  const newArr = [];
  if (input === null || input.length === 0)
    return newArr;

  let nSkaiciausSuma15 = 0;
  let tSkaiciai15 = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      nSkaiciausSuma15 += input[i];
    } else {
      if (input[i] > 0) {
        tSkaiciai15++;        
      }
    }
  }
  return [tSkaiciai15, nSkaiciausSuma15];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), '=', 10, -65);
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]),'=', 8, -50);
console.log(countPositivesSumNegatives([]), []);
console.log(countPositivesSumNegatives(null),[]);

console.log('\n\r-----CodeWars16');
function mergeArrays(a, b) {
  const sujungtasMasyvas = [...a, ...b];
  const beDublikatu = [...new Set(sujungtasMasyvas)];
  return beDublikatu.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeArrays([2, 4, 8], [2, 4, 6]));
console.log(mergeArrays([2, 3, 4, 8], [2, 4, 6, 1]));

console.log('\n\r-----CodeWars17');
function strictEqual(text) {
  if (text.toUpperCase() == text) {
    return true, `${text} is upper case`;
  } else {
    return false, `${text} is not upper case`;
  }
}
console.log(strictEqual('Hello World'));
console.log(strictEqual('HELLO WORLD'));

console.log('\n\r-----CodeWars18');
const binaryArrayToNumber = arr => {
  const binaryString = arr.join('');
  const decimalNumber = parseInt(binaryString, 2);
  return decimalNumber;
};

console.log(binaryArrayToNumber([0,0,0,1]), 1);
console.log(binaryArrayToNumber([0,0,1,0]), 2);
console.log(binaryArrayToNumber([1,1,1,1]), 15);
console.log(binaryArrayToNumber([0,1,1,0]), 6);

console.log('\n\r-----CodeWars19');
// function noIfsNoButs(a, b) {
//   if (a < b) {
//     return `${a} is smaller than ${b}`;
//   }
//   if (a === b) {
//     return `${a} is equal to ${b}`;
//   }
//   if (a > b) {
//     return `${a} is greater than ${b}`;
//   }
// }

// function noIfsNoButs(a, b) {
//   const relations = {
//     '-1': `${a} is smaller than ${b}`,
//     '0': `${a} is equal to ${b}`,
//     '1': `${a} is greater than ${b}`,
//   };

//   return relations[Math.sign(a - b).toString()];
// }

const noIfsNoButs = (a, b) => a < b && `${a} is smaller than ${b}` 
  || a > b && `${a} is greater than ${b}`
  || `${a} is equal to ${b}`

console.log(noIfsNoButs(45, 51), "45 is smaller than 51");
console.log(noIfsNoButs(1, 2), "1 is smaller than 2");
console.log(noIfsNoButs(-3, 2), "-3 is smaller than 2");
console.log(noIfsNoButs(1, 1), "1 is equal to 1");
console.log(noIfsNoButs(100, 100), "100 is equal to 100");
console.log(noIfsNoButs(100, 80), "100 is greater than 80");
console.log(noIfsNoButs(20, 19), "20 is greater than 19");