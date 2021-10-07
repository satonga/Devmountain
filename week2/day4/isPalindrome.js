// Write your code below

const readline = require(`readline`)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`What word would you like to use? `, paliWord => {


const palindrome = word => {
    let noSpaceWord = word.trim()
    let splitWord = noSpaceWord.split(``)
    let arrBackward= []
    for(let j = splitWord.length - 1; j >= 0; j--) {
        arrBackward.push(splitWord[j])
    }
    let final1 = splitWord.join(``)
    let final2 = arrBackward.join(``)
    return final1 == final2
}


console.log(palindrome(paliWord))

rl.close()
})