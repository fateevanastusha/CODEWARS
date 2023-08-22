function expandedForm(num) {
    let array = []
    for (let i  = Math.pow(10, num.toString().length-1); i >= 1 ; i /= 10){
        array.push(num - num % i);
        num %= i
    }
    return array.filter(a => a).join(' + ')
}