// function reverseList(list) {
//     // const a = list.split("");
//     let b = [];
//     for (let i = 1; i < list.length + 1; i++) {
//         b.push(list.at(-i))
//         // console.log(b);
//     }
//     return b;
// }

const reverseList = list => list.reverse();

console.log(reverseList([1,2,3,4]), [4,3,2,1]);
console.log(reverseList([3,1,5,4]), [4,5,1,3]);