let jonSnowHealth = 100

String(jonSnowHealth)

//console.log(jonSnowHealth)

//jonSnowHealth + ` `

//console.log(jonSnowHealth)

let theWinnerIs = `Jamie is the winner.`

//console.log(theWinnerIs)

let newWinner = theWinnerIs.replace(`Jamie`, `Jon`)

//console.log(newWinner)

if (newWinner.includes(`Jon`)) {
    // console.log(`Replaced Jamie with Jon`)
}

let newWinnerLower = newWinner.toLowerCase()
let newWinnerSplit = newWinnerLower.split(` `)
let newWinnerKebob = newWinnerSplit.join(`-`)

//console.log(newWinnerKebob)

newWinnerKebob = newWinnerLower.replaceAll(` `, `-`)
// console.log(newWinnerKebob)

function isJonAlive(){
    if(jonSnowHealth > 0) {
        console.log(`Jon is alive`)
    } else {
        console.log(`Rest In Peace Jon Snow`)
    }
}

isJonAlive()

function supriseAttack(attack) {
    jonSnowHealth -= attack
    console.log(`Jon Snow's Health is ${jonSnowHealth}.`)
    isJonAlive()
}

supriseAttack(28)
// supriseAttack(28)
// supriseAttack(28)
// supriseAttack(28)

function greeting(person1 , person2){
    console.log(`${person1} says hello to ${person2}`)
}

greeting(`Jon Snow` , `Ned Stark`)
greeting(`Spencer` , `Andrew`)
greeting(`Spencer`)

function rollDie() {
    let sides = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * sides.length)
    return sides[randomNumber]
}

let firstRoll = rollDie()
let secondRoll = rollDie()
// console.log(firstRoll , secondRoll)

// function rollDice() {
//     let firstRoll = rollDie()
//     let secondRoll = rollDie()
//     return firstRoll + secondRoll
// }

// let diceTotal = rollDice()

// console.log(diceTotal)

function rollDice(number) {
    let rolls = []
    let total = 0
    for (let i = 0; i < number; i++) {
        rolls.push(rollDie())
    }
    for (let i = 0; i > rolls.length; i++) {
        total += rolls[i]
    }
    return total
}

let diceRoll = rollDice(4)
console.log(diceRoll)

// let sides = [1, 2, 3, 4, 5, 6]

// let random = Math.random() * sides.length
// console.log(random)
// let roll = Math.floor(random)
// console.log(roll)