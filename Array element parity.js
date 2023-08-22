function solve(arr){
    for (let i = 0 ; i < arr.length; i ++) {
        if (!arr.includes(arr[i] * -1)){
            return arr[i]
        }
    }
    return arr
};