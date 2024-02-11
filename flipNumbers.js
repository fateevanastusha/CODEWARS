function flipNumber (n)  {
    let array = n.split('').reverse()
    for (let i = 1; i < array.length; i ++) {
        array = [...array.slice(0,i), ...array.slice(i).reverse()]
    }
    return array.join('')
}