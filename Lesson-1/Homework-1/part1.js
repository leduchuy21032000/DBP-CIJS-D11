/**
 * Caesars Cipher
 */
function rot13(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr[i] = (String.fromCharCode(str.charCodeAt(i) + 13))
    }
    return arr
}

console.log(rot13("PUNEVMNEQ"))
// console.log(rot13("ABC"))


/**
 * Pig Latin
 */
const translatePigLatin = (word)=>{
    let modifiedWord = word
    const vowels = "euoai".split("")
    if (vowels.indexOf(word[0]) != -1) {    //  is vowel
        modifiedWord = `${word}way`

    }
    else {
        let firstVowewlIndex = 0
        for (let i = 0; i < word.length; i++) {
            if (vowels.indexOf(word[i]) != -1) { // =-1 la nguyen am, khac -1 la nguyen am
                firstVowewlIndex = i
                break
            }
        }
        let consonantCluster = word.slice(0,firstVowewlIndex)
        let remain = word.slice(firstVowewlIndex)
        modifiedWord = `${remain}${consonantCluster}ay`
    }
    return modifiedWord
}

// console.log(translatePigLatin("california"))
// console.log(translatePigLatin("paragraphs"))
// console.log(translatePigLatin("algorithm"))
// console.log(translatePigLatin("schwartz"))

/**
 * Padoven sequence
 */
const padovan = (m,n) => {
    const positive = [] // bắt đầu từ 0 -> dương vô cùng
    const negative = [] // 0 -> âm vô cùng
    // Tính positive
    for (let i = 0; i <= n; i++) {
        if (i == 0 || i == 1 || i == 2) {
            positive.push(1)
        }
        else {
            let value = positive[i-3] + positive[i-2]
            positive.push(value)
        }
    }
    // console.log(positive)
    // Tính negative
    for (let i = 0; i < Math.abs(m)+3; i++) {
        if (i == 0 || i == 1 || i == 2) {
            negative.push(1)
        }
        else {
            // Đổi dấu + thành - để chính xác với lại mảnh
            let value = negative[i-3] - negative[i-1]
            negative.push(value)
        }
    }
    // console.log(negative)
    return [...negative.slice(3).reverse(),...positive]
}

// console.log(padovan(-1,1))
// console.log(padovan(-10,10))
// console.log(padovan(-50,1))


