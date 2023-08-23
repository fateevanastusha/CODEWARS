function camelize(str){
    return str
        .split(/[^a-zA-ZА-Яа-яЁё0-9]/)
        .filter(a => a)
        .map(word => word.toLowerCase())
        .map(word => {
            return word[0].toUpperCase() + word.slice(1)
        })
        .join('')
}

console.log(camelize("rugby lcdas 3324"))