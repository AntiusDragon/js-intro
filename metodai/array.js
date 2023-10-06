console.clear();
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

console.log([10, 2, 8, 4, 6]);
console.log([10, 2, 8, 4, 6].length);
console.log([10, 2, 8, 4, 6][0]);
console.log([10, 2, 8, 4, 6][1]);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][888]);
console.log([10, 2, 8, 4, 6][-1]);

console.log('\n\r-----at');
console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(1));
console.log([10, 2, 8, 4, 6].at(-1));

console.log('\n\r-----concat');
const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [5, 6];
const a4 = [7, 8];
const a12 = a1.concat(a2);
const a123 = a1.concat(a2, a3);
const a1234 = a1.concat(a2, a3, a4);
const a134 = a1.concat(a3, a4);
console.log(a1, a2, a12);
console.log(a123);
console.log(a1234);
console.log(a134);

const a1111 = a1.concat(a1, a1, a1);
console.log(a1111);

console.log('\n\r-----includes');
const marks = [10, 2, 8, 4, 6];
console.log(marks.includes(10));

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentai.includes('maryte'));
console.log(studentai.includes('Maryte'));

console.log(marks.indexOf(10));
console.log(marks.indexOf(2));
console.log(marks.indexOf(8));
console.log(marks.indexOf(4));
console.log(marks.indexOf(6));
console.log(marks.indexOf(-5));

console.log('\n\r-----typeof');
console.log(typeof 5);
console.log(typeof 'asd');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log('\n\r-----Array.isArray');
console.log(Array.isArray(5));
console.log(Array.isArray('asd'));
console.log(Array.isArray(true));
console.log(Array.isArray(undefined));
console.log(Array.isArray(null));
console.log(Array.isArray({}));
console.log('-----');
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray(['a', 'b', 'c']));
console.log(Array.isArray(['a', 'b', 5151, true, 'c']));

console.log('\n\r-----join');
const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const abcJoin = abc.join();
const abcJoin2 = abc.join('-');
const abcJoin3 = abc.join(' ');
const abcJoinHip = abc.join(' -=- ');

console.log(abcJoin, typeof abcJoin);
console.log(abcJoin2);
console.log(abcJoin3);
console.log(abcJoinHip);

console.log('\n\r-----push');
const  flowers = [];
console.log(flowers);

flowers.push('roze');
console.log(flowers);

flowers.push('tulpe');
console.log(flowers);

flowers.push('narcizas');
console.log(flowers);

console.log('\n\r-----pop');
flowers.pop();
console.log(flowers);

console.log('\n\r-----shift');
flowers.shift();
console.log(flowers);

console.log('\n\r-----unshift');
flowers.unshift('ruta');
console.log(flowers);

console.log('\n\r-----reverse');
console.log(flowers);
console.log(flowers.reverse());
console.log(flowers.reverse());

console.log('\n\r-----slice');
const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers46 = numbers.slice(4, 6);
console.log(numbers46);

console.log('\n\r-----splice');
console.log(numbers);
numbers.splice(3, 3, 1, 2, 3, 4);
console.log(numbers);