function total(arr){
    let sum = 0;
    for (let j = 0; j < arr.length; j ++) {
        let flag = false;
        for (let i = 2; i < Math.sqrt(j); i++) {
            if (j % i === 0){
                flag = true;
                break;
            }
        }
        if (!flag && j > 1) {
            sum += arr[j];
        }
    }
    return sum

};

console.log(total([1,2,3,4,5,6,7,8]))