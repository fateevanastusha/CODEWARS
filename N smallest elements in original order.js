function firstNSmallest(array, n){
    const smallest = [];
    const initial = [...array];
    const mapped = array.sort((a,b) => a-b).slice(0,n);
    for (let i = 0; i< initial.length; i++) {
        if(mapped.includes(initial[i])){
            smallest.push(initial[i])
        }
    }
    return smallest.slice(0,n)
}

console.log(firstNSmallest([1,2,3,1,2],3))