console.log('-----code_wars_001');

function sumMul(n,m){
    if (n >= m) {
        return "INVALID";
    }
    let sum = 0;
    let na = n;
    for (let i = n; i < m; i) {
        sum += i;
        i += n
    }
    return sum
}

console.log(sumMul(0,0),"INVALID");
console.log(sumMul(2,9),20);
console.log(sumMul(4,-7),"INVALID");