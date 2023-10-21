module.exports = function reverse (n) {
    let newN = Math.abs(n).toString();
    console.log (newN);
    let result = '';
    let newNumber = '';
    let lengthR = newN.length;
    for (let i = lengthR - 1; i >= 0; i--) {
        newNumber += newN[i];
    }
    if (+newNumber[0] === 0 ){
        newNumber = newNumber.slice(1, lengthR + 1);
        result = newNumber;
    }
    return newNumber;
}

