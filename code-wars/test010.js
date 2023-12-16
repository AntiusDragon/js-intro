function whoseMove(lastPlayer, win) {
    if (lastPlayer === 'black' && win === false) {
        return 'white';
    } else if (lastPlayer === 'white' && win === true){
        return 'white';
    } else {
        return 'black';
    }
}

console.log(whoseMove("black",false),"white");
console.log(whoseMove("white",true),"white");
console.log(whoseMove("white",false),"black");