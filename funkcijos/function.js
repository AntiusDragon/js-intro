/*
FUNCTION - funkcija

perpanaudojamas logikos blokas
*/

console.clear();

function tuscia() {
    // tuscias logikos blokas
    // return undefined;
}
console.log('tuscia', tuscia());
console.log('tuscia', tuscia());

console.log('-----');
function tuscia2() {
    return undefined;
}
console.log('tuscia2', tuscia2());
console.log('tuscia2', tuscia2());

console.log('-----');
function tuscia3() {
    return;
}
console.log('tuscia3', tuscia3());
console.log('tuscia3', tuscia3());

console.log('-----');
function duokPenkis() {
    // grazziname penkis
    return 5;
}
console.log(duokPenkis());

console.log('-----');
function arVedes() {
    return true;
}

console.log('arVedes', arVedes());

function labasRytas() {
    return 'Labas rytas, Lietuva'
}

console.log(labasRytas());


console.log('-----');
// 1 ) ####

const userName1 = 'Jonas'
const userAge1 = 99;
// 99 = 9 * 10 + 9

// Jonas turejo 9 jubileju/-s!
// const user1Jubiliejai = userAge1 % 10; // 9
// const user1Jubiliejai = (userAge1 - userAge1 % 10); // 90
const user1Jubiliejai = (userAge1 - userAge1 % 10) / 10;
const user1Str = `${userName1} turejo ${user1Jubiliejai} jubileju/-s!`;
console.log(user1Str);

// 2 ) ####
const userName2 = 'Maryte'
const userAge2 = 88;
// Maryte turejo 9 jubileju/-s!
const user2Jubiliejai = (userAge2 - userAge2 % 10) / 10;
const user2Str = `${userName2} turejo ${user2Jubiliejai} jubileju/-s!`;
console.log(user2Str);

// 3 ) ####
const userName3 = 'Petras'
const userAge3 = 55;
// Maryte turejo 4 jubileju/-s!
const user3Jubiliejai = (userAge3 - userAge3 % 10) / 10;
const user3Str = `${userName3} turejo ${user3Jubiliejai} jubileju/-s!`;
console.log(user3Str);

// 3 ) ####
const userName4 = 'Ona'
const userAge4 = 44;
// Maryte turejo 4 jubileju/-s!
const user4Jubiliejai = (userAge4 - userAge4 % 10) / 10;
const user4Str = `${userName4} turejo ${user4Jubiliejai} jubileju/-s!`;
console.log(user4Str);

console.log('-----');

function jubiliejai(username, age) {
    const count = (age - age % 10) / 10;
    return `${username} turejo ${count} jubilieju/-s!`;
}

console.log(jubiliejai('Jonas', 99));
console.log(jubiliejai('Maryte', 88));
console.log(jubiliejai('Petras', 55));
console.log(jubiliejai('Ona', 44));

console.log('-----');

function studentAvarage(name, marks) {
    let totalSum = 0;
    let i = 0;
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    const avarage = totalSum / marks.length;
    return `${name}: pazymiu vidurkis yra ${avarage}.`;
}


console.log(studentAvarage('Jonas', [10, 2, 8, 4, 6]));
console.log(studentAvarage('Maryte', [10, 9, 8, 7, 6]));
console.log(studentAvarage('Petras', [5, 6, 7, 8, 9]));
console.log(studentAvarage('Ona', [9, 9, 9 ,9, 9, ]));




function testEven(n) {
    const n0 = n % 2;
    const n1 = true;
    skaicius = n0 / n1 ;
    return `tastEvent fot ${n} = ${skaicius}`;
}
console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));

