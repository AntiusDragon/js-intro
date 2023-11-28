console.clear();
console.log('------');
const input = '37774034752708817917238923469512665084631649866027591495384628907596331718415424532876151699204777413851021398252603326935878843611287875341554712702331527';

let skaitmenuPasikartojimai = {};

for (let i = 0; i < input.length; i++) {
    const skaitmenuPora = input.substring(i - 1, i + 1)
    // console.log(skaitmenuPora);
    if (skaitmenuPasikartojimai[skaitmenuPora]) {
        skaitmenuPasikartojimai[skaitmenuPora]++;
    } else {
        skaitmenuPasikartojimai[skaitmenuPora] = 1;
    }
}
// console.log(skaitmenuPasikartojimai)

let daugiausiaiPasikartojimu = 0;
let daugiausiaiPasikartojanciosPoros = [];

for (const pora in skaitmenuPasikartojimai) {
    if (skaitmenuPasikartojimai[pora] > daugiausiaiPasikartojimu) {
        daugiausiaiPasikartojimu = skaitmenuPasikartojimai[pora];
        daugiausiaiPasikartojanciosPoros = [pora];
    } else if (skaitmenuPasikartojimai[pora] === daugiausiaiPasikartojimu) {
        daugiausiaiPasikartojanciosPoros.push(pora);
    }
}

console.log(`sie skaiciai: ${daugiausiaiPasikartojanciosPoros} kartojasi: ${daugiausiaiPasikartojimu} kartus`);

