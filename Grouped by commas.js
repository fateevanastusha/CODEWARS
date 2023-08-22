function groupByCommas(n) {
    n = n.toString()
    if (n.length < 4) return n;
    const array = n.split('');
    let c = array.length - 3;
    let ceil = Math.floor(array.length/3) === array.length /3 ? Math.floor(array.length/3) - 1  : Math.floor(array.length/3)
    for (let i = 0; i < ceil ; i ++){
        array.splice(c , 0 , ',')
        c -= 3
    }
    return array.join('')
}

