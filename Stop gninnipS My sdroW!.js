function spinWords(string){
    return string.split(' ').map(word => {
        if (word.length > 4) {
            return word.split('').reverse().join('');
        }
        return word;
    }).join(' ')
}
console.log(spinWords("Hey fellow warriors"))

