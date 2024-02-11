function group(arr) {
    const hash = {}
    for (let i = 0; i< arr.length; i++) {
        if (!hash[arr[i]]){
            hash[arr[i]] =1;
        } else {
            hash[arr[i]] = hash[arr[i]] +1;
        }
    }
    const notDublArray =  [... new Set(arr)];
    return notDublArray.map(a => {
        return Array(hash[a]).fill(a)
    })
}

console.log(group([3,2,6,2,1,3]))