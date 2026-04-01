function modifySentence(sentence) {
    let words = sentence.split(" ");
    // console.log (words)
    let modifiedWords = words.map(word => {
        let result = word.toUpperCase()
        if (word.length > 4) {
           result += "!"
        }
        return result
    })
    return modifiedWords;
}
console.log(modifySentence("javascript is awesome"));
