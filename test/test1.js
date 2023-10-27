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

console.log('\n\r-----CodeWars20');
function SubstringTest(str1, str2){
  const str11 = str1.toLowerCase();
  const str22 = str2.toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    const str23 = str22[i];

    if (!str11.includes(str23)) {
      return false;
    }
  }
  return true;
}


console.log(SubstringTest("Something","Home"), true);
console.log(SubstringTest("Something","Fun"), false);

console.log('\n\r-----CodeWars21');
function excludingVatPrice(price){
  if (price === null) {
    return -1;
  }
  const price1 = price / 115 * 100;
  const price2 = price1.toFixed(2);
  const price3 = Number(price2);
  return price3;
}

console.log(excludingVatPrice(230), 200.00);
console.log(excludingVatPrice(123), 106.96);
console.log(excludingVatPrice(0), -1);

console.log('\n\r-----CodeWars22');
function findMissing(arr1, arr2) {
  const arr10 = arr1.sort();
  const arr20 = arr2.sort();
  let arr01 = [];
  let arr02 = [];

  for (let i = 0; i < arr1.length; i++) {
    const arr11 = arr1[i]
    if (arr10[i] - arr20[i] === 0) {
      continue
    } else {
      return arr1[i];
    }
  }
}

console.log(findMissing([1, 2, 3], [1, 3]), 2);
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8);
console.log(findMissing([7], []), 7);
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3);
console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0);

console.log('\n\r-----CodeWars22');
function tetration(x,y){
  let xSum1 = x;
  if (y === 0) {
    return 1;
  } else {
    for (let i = 1; i < y; i++) {
      xSum1 = x ** xSum1;
    }
  }
  return xSum1;
}

console.log(tetration(4,0), 1);
console.log(tetration(7,1), 7);
console.log(tetration(5,2), 3125);
console.log(tetration(2,3), 16);


console.log('\n\r-----CodeWars23');
function asd1(a, b) {
  let ab1 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      ab1 = [...ab1, ...b];
    } else {
      ab1 = [...ab1, ...a];
    }
  }
  return 1;
}

console.log(asd1([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]), [23, 64, 53, 17, 88]);
console.log(asd1([34, -64, 15, 17, 88], [23, 14, 53, 17, 80]), [34, 14, 53, 17, 88]);

console.log('\n\r-----CodeWars24');
function removeChar(str){
  return str.slice(1, str.length - 1)
 };
 
 console.log(removeChar('eloquent'), 'loquen');
 console.log(removeChar('country'), 'ountr');
 console.log(removeChar('person'), 'erso');
 console.log(removeChar('place'), 'lac');
 console.log(removeChar('ooopsss'), 'oopss');

 console.log('\n\r-----CodeWars25');
function grow(x){
  let sum = 1;
  for (let i = 0; i < x.length; i++) {
    sum *= x[i];
 }
 return sum;
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16); 
console.log(grow([2, 2, 2, 2, 2, 2]), 64); 

console.log('\n\r-----CodeWars26');
// const sekmadienis = 'Sunday';
// const pirmadienis = 'Monday';
// const antradienis = 'Tuesday';
// const treciadienis = 'Wednesday';
// const ketvirtadienis = 'Thursday';
// const penktadienis = 'Friday';
// const sestadienis = 'Saturday';
// const wrong = 'Wrong, please enter a number between 1 and 7';
// const dayList = [sekmadienis, pirmadienis, antradienis, treciadienis, ketvirtadienis, penktadienis, sestadienis];
// function whatday(num) { 
//   if (num <= 0) {
//     return wrong;
//   }
//   if (num === undefined) {
//     return wrong;
//   }

//   for (let i = 0; i < dayList.length; i++) {
//     if (num > 7) {
//       return wrong;
//     } else {
//       if (num === i + 1) {
//         return dayList[i];
//       } else {
//         continue;
//       }
//     }
//   }
// }

const whatday = (num) => { 
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}

console.log(whatday(1),'Sunday')
console.log(whatday(2), 'Monday')
console.log(whatday(3),'Tuesday')
console.log(whatday(8),  'Wrong, please enter a number between 1 and 7')
console.log(whatday(),  'Wrong, please enter a number between 1 and 7')

console.log('\n\r-----CodeWars27');
const bloodAlcoholContent = (drinks, weight, sex, time) => 
+((drinks.ounces * drinks.abv * 5.14 / weight * (sex === 'male' ?0.73 :0.66)) - 0.015 * time).toFixed(4);

console.log(bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1), 0.0837);
console.log(bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1), 0.1758);
console.log(bloodAlcoholContent({ounces:50, abv:0.14}, 250,'male', 3), 0.0601);
console.log(bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2), 0.2414);

console.log('\n\r-----CodeWars28');
var TempleStrings = function(obj, feature) {
  return obj + ' are ' + feature;
}

console.log(TempleStrings("Animals","Good"), 'Animals are Good')

console.log('\n\r-----CodeWars29');
// function maps(x) {
//   return x.map(function (value) {
//     return value * 2;
//   });
// }
maps = (x) => x.map(values => values * 2);

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 

console.log('\n\r-----CodeWars30');
const toFreud = str => !str ? '' : str.split(' ').map(text => 'sex').join(' ');

console.log(toFreud(""), "");
console.log(toFreud("test"), "1");
console.log(toFreud("This is a test"), "4");
console.log(toFreud("This is a longer test"), "5");
console.log(toFreud("You're becoming a true freudian expert"), "6");

console.log('\n\r-----CodeWars31');
function eachCons(array, n) {
  const result = [];
  for (let i = 0; i <= array.length - n; i++) {
    result.push(array.slice(i, i + n))
  }
  return result;
}

console.log(eachCons([3, 5, 8, 13], 2));
console.log(eachCons([3, 5, 8, 13], 3));

console.log('\n\r-----CodeWars32');
// function betterThanAverage(classPoints, yourPoints) {
//   console.log(suma.classPoints);
//   let classPointsSum = 0;
//   let classPointsSum2 = 0;
//   for (let i = 0; i < classPoints.length; i++) {
//     classPointsSum += classPoints[i];
//   }
//   classPointsSum2 = classPointsSum / classPoints.length;
//   if (classPointsSum2 > yourPoints) {
//     return false;
//   } else {
//     return true;
//   }
// }

// const betterThanAverage = (classPoints, yourPoints) => {
//   const avarage = classPoints.reduce((sum, point) =>sum + point, 0) / classPoints.length;
//   return avarage < yourPoints
// };

const betterThanAverage = (classPoints, yourPoints) =>(classPoints.reduce((sum, point) =>sum + point, 0) / classPoints.length) < yourPoints;

console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);

console.log('\n\r-----CodeWars33');
const areYouPlayingBanjo = name => name[0].toUpperCase() === 'R' ? `${name} plays banjo` : `${name} does not play banjo`;

console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");

console.log('\n\r-----CodeWars34');
const getMiddle = s => (s.length % 2) === 0 ? s.slice(((s.length - 1)/ 2), ((s.length / 2) + 1)) : s.at(s.length / 2)

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");

console.log('\n\r-----CodeWars35'); 
const filter_list = l => 'For input ' + JSON.stringify(l);

console.log(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
console.log(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
console.log(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');

console.log('\n\r-----CodeWars36');
const fakeBin = x => x.split('').map(value => value < 5 ? 0 : 1).join().replaceAll(',', '');

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

console.log('\n\r-----CodeWars37');
function between(a, b) {
  var skaiciai = [];
  for (var i = a; i <= b; i++) {
    skaiciai.push(i);
  }
  return skaiciai;
}

console.log(between(1, 4)); // [1, 2, 3, 4]
console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]

console.log('\n\r-----CodeWars38');
// const positiveSum = arr => arr.map(params => params > 0 ? params : 0).reduce((sum, point) =>sum + point, 0);
const positiveSum = arr => arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);

console.log('\n\r-----CodeWars39');
const isDivisible = (n, x, y) => (n % x) === 0 && (n % y) === 0 ? true : false;

console.log(isDivisible(3,3,4),false);
console.log(isDivisible(12,3,4),true);
console.log(isDivisible(8,3,4),false);
console.log(isDivisible(48,3,4),true);

console.log('\n\r-----CodeWars40');
const twoSort = s => s.sort()[0].split('').join('***');

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));

console.log('\n\r-----CodeWars41');
function findMultiples(integer, limit) {
  let a = integer;
  let multiples = [];

  while (a <= limit) {
    multiples.push(a);
    a += integer;
  }
  
  return multiples;
}

console.log(findMultiples(5, 25), [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2), [1, 2])
console.log(findMultiples(5, 7), [5])
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
console.log(findMultiples(11, 54), [11, 22, 33, 44])

console.log('\n\r-----CodeWars42');
const chromosomeCheck = sperm => sperm === 'XX' 
                                          ? "Congratulations! You're going to have a daughter." 
                                          : "Congratulations! You're going to have a son.";

console.log(chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
console.log(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.")

console.log('\n\r-----CodeWars43');
function billboard(name, price = 30){
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += price;
  }
  return sum
} 

console.log(billboard("Jeong-Ho Aristotelis"), 600);
console.log(billboard("Abishai Charalampos"), 570);
console.log(billboard("Idwal Augustin"), 420);
console.log(billboard("Hadufuns John",20), 260);
console.log(billboard("Zoroaster Donnchadh"), 570);
console.log(billboard("Claude Miljenko"), 450);
console.log(billboard("Werner Vígi",15), 165);
console.log(billboard("Anani Fridumar"), 420);
console.log(billboard("Paolo Oli"), 270);
console.log(billboard("Hjalmar Liupold",40), 600);
console.log(billboard("Simon Eadwulf"), 390);

console.log('\n\r-----CodeWars44');
function array(string) {
  const explode1 = string.split(',');
  if (explode1.length < 3) {
    return null
  } else {
    return explode1.slice(1, -1).join(" ");
  }
}

console.log(array(''));
console.log(array('1'));
console.log(array('A1,B2'));
console.log(array('1,2,3'));
console.log(array('1,2,3,4'));
console.log(array('A1,B2,C3,D4,E5'));
console.log(array('A,1,23,456,78,9,Z'));

console.log('\n\r-----CodeWars45');
const whoIsPaying = (name) => name.length > 2 ? [name, name.slice(0, 2) +""] : [name.slice(0, 2) +""];

console.log(whoIsPaying("Mexico"),["Mexico", "Me"]);
console.log(whoIsPaying("Melania"),["Melania", "Me"]);
console.log(whoIsPaying("Melissa"),["Melissa", "Me"]);
console.log(whoIsPaying("Me"),["Me"]);
console.log(whoIsPaying(""), [""]);
console.log(whoIsPaying("I"), ["I"]);

console.log('\n\r-----CodeWars46');
const areaOrPerimeter = (l , w) => w === l ?l * w : (l + w) * 2

// const areaOrPerimeter = (l, w) => w < 10 
//                                       ? l < 10 
//                                       ? l * w 
//                                       : (l + w) * 2 
//                                       : (l + w) * 2

console.log(areaOrPerimeter(3, 3),  9);
console.log(areaOrPerimeter(6, 10), 32);
console.log(areaOrPerimeter(35, 35), 32);