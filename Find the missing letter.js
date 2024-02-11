function findMissingLetter(array) {
    for (let i = 0 ; i< array.length; i++) {
        if (array[i].charCodeAt(0) + 1 !== array[i+1].charCodeAt(0)){
            return String.fromCharCode(array[i].charCodeAt(0) + 1)
        }
    }
}

console.log(findMissingLetter(['a','b','c','d','f']))