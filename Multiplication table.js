multiplicationTable = function(n) {
    let bigArray = [];
    let littleArray = [];
    for (let i = 1; i <= n; i++){
        littleArray.push(i)
    }
    for (let k = 1; k <= n; k++){
        bigArray.push(littleArray.map(item => item*k))
    }
    return bigArray
}