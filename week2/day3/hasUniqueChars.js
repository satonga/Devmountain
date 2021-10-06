// Write your code below

function unique(word) {
    
    let splitWord = word.split(``)
    const mySet = new Set();
    
    for (let i = 0; i < splitWord.length; i++) {
        mySet.add(splitWord[i])
      }
      return mySet.size === word.length
}

console.log(unique(`yes`))