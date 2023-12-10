// function dutyFree(normPrice, discount, hol){
//     const sum1 = hol / (normPrice / 100 * discount);
//     const sum2 = hol / normPrice;
//     return discount === 0 ? +sum2.toFixed(2).slice(0, -3) : +sum1.toFixed(2).slice(0, -3)
// }

const dutyFree = (normPrice, discount, hol) => +(discount === 0 ? hol / normPrice : hol / (normPrice / 100 * discount)).toFixed(2).slice(0, -3);

console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);
console.log(dutyFree(2092, 56, 12837), 10);
console.log(dutyFree(1175, 0, 42), NaN);