console.clear();
const input =
  "37774034752708817917238923469512665084631649866027591495384628907596331718415424532876151699204777413851021398252603326935878843611287875341554712702331527";

// const poros = [];

// for (let i = 0; i < 100; i++) {
//     poros.push(0);
// }

// console.log(poros);

// for (let i = 0; i < input.length - 1; i++) {
//     const pora =  (input[i] + input[i + 1]);
//     poros[pora]++;
// }
// console.log(poros);

// const maxKiekis = Math.max(...poros);

// console.log('max:', maxKiekis);

// for (let i = 0; i < 100; i++) {
//     if (poros[i] === maxKiekis) {
//         console.log(i);
//     }

// }

console.log("-----");

const poros = {};

for (let i = 0; i < input.length; i++) {
  const nr = input[i] + input[i + 1];
  if (poros[nr]) {
    poros[nr]++;
  } else poros[nr] = 1;
}

// console.log(poros);

let maxKiekis = 0;

for (const key in poros) {
    if (poros[key] > maxKiekis) {
        maxKiekis = poros[key];
    }
}

console.log(maxKiekis);


const maxPoros = [];

for (const key in poros) {
    if (poros[key] === maxKiekis) {
        maxPoros.push(key);
    }
}

console.log(maxPoros);

// let skaitmenuPasikartojimai = {};
// for (let i = 0; i < input.length; i++) {
//   const a = [input[i] + input[i + 1]]
//   console.log(a);
//   skaitmenuPasikartojimai += input[i] + input[i + 1] + 1
//   // if (input[i] + input[i + 1]) {
//   //   skaitmenuPasikartojimai=input[i] + input[i + 1] + 1
//   // } else {
//   //   skaitmenuPasikartojimai=input[i] + input[i + 1] + 1
//   // }
// }
