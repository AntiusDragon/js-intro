const zodynas = ['labas', 'rytas', 'Lietuva', 'dar', 'idomiau'];

function pakeisk(zodis, idx, arr) {
    return `<div>${idx + 1}) ${zodis} ${arr}</div>`;
}

const html = zodynas.map(pakeisk);
const html2 = zodynas.map((zodis, idx) => {`<div>${idx + 1}) ${zodis}</div>`});

console.log(html);
console.log(html2);