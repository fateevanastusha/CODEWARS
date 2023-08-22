function twoSum(numbers, target) {
    if (numbers.length == 2) return [0,1];
    for (let i = 0 ; i < numbers.length ; i ++ ) {
     for (let k = 1; k < numbers.length; k ++){

         if ((numbers[i] + numbers[k]) === target && numbers[i] !== numbers[k]){
             return [i,k]
         }
     }
    }
}

console.log(twoSum([750, 439, -35, 672, -270, 568, 568, -206, 934], 1136))