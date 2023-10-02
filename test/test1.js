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

  console.log('\n\r-----');

const nuoroda = ['https://formlabs.com/store/materials/grey-resin/https://formlabs.com/store/materials/clear-resin/', 'https://formlabs.com/store/materials/white-resin/', 'https://formlabs.com/store/materials/black-resin/', 'https://formlabs.com/store/materials/draft-v2-resin/', 'https://formlabs.com/store/materials/grey-pro-resin/', 'https://formlabs.com/store/materials/tough-2000-resin/', 'https://formlabs.com/store/materials/tough-1500-resin/', 'https://formlabs.com/store/materials/durable-resin/', 'https://formlabs.com/store/materials/rigid-10k-resin/', 'https://formlabs.com/store/materials/rigid-resin/', 'https://formlabs.com/store/materials/esd-resin/', 'https://formlabs.com/store/materials/flexible-80a-resin/', 'https://formlabs.com/store/materials/elastic-resin/', 'https://formlabs.com/store/materials/pu-rigid-1000-resin/', 'https://formlabs.com/store/materials/pu-rigid-650-resin/', 'https://formlabs.com/store/materials/high-temp-resin/', 'https://formlabs.com/store/materials/castable-wax-resin/', 'https://formlabs.com/store/materials/castable-wax-40-resin/', 'https://formlabs.com/store/materials/color-kit/]'];
let nuorodosSuma = 0;
const nuoroduYraIsViso = nuoroda.length;
let atmintine = ''
for (let i = 0; i < nuoroduYraIsViso; i++) {
    atmintine += `${i + 1}. ${nuoroda[i]}\n\r\n\r`
}

console.log(atmintine);
console.log('\n\r-----');