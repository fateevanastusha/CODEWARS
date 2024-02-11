function repeats(arr){
    const sorted = arr.sort((a,b) => a-b)
    let hash = {}
    for (let i = 0; i < sorted.length; i++) {
        if (hash[sorted[i]]) {
            hash[sorted[i]] = hash[sorted[i]] + 1
        } else {
            hash[sorted[i]] = 1
        }
    }
    let sum = 0
    for(let key in hash) {
        if (hash[key] === 1) {
            sum += parseInt(key)
        }
    }
    return sum
};
console.log(repeats([4,5,7,5,4,8]))