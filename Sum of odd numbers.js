function rowSumOddNumbers(n) {
	let NewArray = [];
    let number = n*(n-1)+1
    for (let i = 0; i < n; i++){
        NewArray.push(number)
        number += 2
    }
    return NewArray.reduce((item,accum)=>accum+item)
}