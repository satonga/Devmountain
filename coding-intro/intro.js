const firstName = `Spencer`

let age = 21

//console.log(firstName, age)

let isCool = true

let height = undefined

//console.log(height)

let x = 4
let y = 10 
let z = 7 + 8

let sum = x + y + z

//console.log(sum)

let str = "string"
let str2 = "string"
let str3 = "string"

//consol.log(str, str2, str3)

const lastName = "Tonga"

//console.log(`Hello ` + firstName + ` ` + lastName)
//console.log(`Hello ${firstName} ${lastName}`)
//console.log(`Hello my name is ${firstName}`)

let greeting = `Hello my name is ${firstName}`

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Hody, what is your name?` , function(answer) {
    console.log(`Hi, ${answer}`)
})