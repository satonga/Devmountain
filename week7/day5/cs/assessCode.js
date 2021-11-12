// Sum Zero

sample = [1, -2]

const addToZero = (arr) => {
    negativeArr = []
    answers = []
    negative = arr.filter(num => {
        if (num < 0) {
            negativeArr.push(num)
        }
    })
    for(let i = 0; i < negativeArr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if (negativeArr[i] + arr[j] === 0){
                answers.push(negativeArr[i], arr[j])
            }
        }
    }
    if (answers.length === 0) {
        console.log('false')
        return false
    } else {
        console.log(answers , 'true')
        return true
    }
}

// addToZero(sample)



// Unique Characters

const hasUniqueChars = (word) => {
    let splitWord = word.split('')
    let set = new Set()
    splitWord.forEach(letter => set.add(letter))
    console.log(set)
}

// hasUniqueChars('rrrrrrrrrr')


// Pangram Sentence
let trueS = "The quick brown fox jumps over the lazy dog!"
let falseS = "I like cats, but not mice"

const alpha = Array.from(Array(26)).map((e, i) => i +65)
const alphabet = alpha.map((x) => String.fromCharCode(x))

const isPangram = (sent) => {
    let set = new Set()
    let upper = sent.toUpperCase()
    let splitArr = upper.split('')
    for(let i = 0; i < splitArr.length; i++){
        for(let j = 0; j < alphabet.length; j++){
            if(splitArr[i] === alphabet[j]){
                set.add(alphabet[j])
            }
        }
    }
    if(set.size === 26){
        return 'true'
    } else {
        return 'false'
    }
}

// console.log(isPangram(falseS))

//Longest Word
let test = ['hello', 'nope', 'forever']

const findLongestWord = (arr) => {
    let wordLength = []
    arr.map(index => {
        let split = index.split('')
        wordLength.push(split.length)
    })
    wordLength.sort()
    console.log(wordLength[wordLength.length - 1])
}

// findLongestWord(test)