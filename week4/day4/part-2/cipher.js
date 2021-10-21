//  abcdefghijklmnopqrstuvwxyz
//  %the1big?dwarf2only6jumps!

//I love cyptography = ? a2u1 hso62il%ogs

const alpha = Array.from(Array(26)).map((e, i) => i + 65)
const alphabet = alpha.map((x) => String.fromCharCode(x))
let setting = alphabet.join().toLowerCase()
let finalAlpha = setting.split(',')

const cipher = Array.from('%the1big?dwarf2only6jumps!')

const code = (sentence) => {
    let newSentence = sentence.toLowerCase()
    let newCode = ''

    for(let i = 0; i < newSentence.length; i++) {
        if(newSentence[i] !== ' ') {
            for(let j = 0; j < finalAlpha.length; j++) {
                if(newSentence[i] === finalAlpha[j]) {
                    newCode += cipher[j]          
                }
            }
        } else{
            newCode += (' ')
        }
    }
    return newCode
}

console.log(code('running and gunning'))

const decipher = (code) => {
    let arr = Array.from(code)
    let ciphArr = Array.from(cipher)
    let message = ''
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== ' ') {
            for(let j = 0; j < ciphArr.length; j++) {
                if(arr[i] === ciphArr[j]) {
                    message += finalAlpha[j]
                }
            }
        } else {
            message += ' '
        }
    }
    return message
}

console.log(decipher('ljff?fi %fe ijff?fi'))