function factorial(n) {
    if (n > 12 || n < 0) {
        throw('RangeError')
    }
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1)
    }
}

console.log(factorial(13))