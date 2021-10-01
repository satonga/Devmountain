//password validator tool

console.log(`Welcome to the Password Validator Tool.`)

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Please insert passord:` , name => {
    if (name.length >= 10) {
        console.log(`Password Successful.`)
    } else {
        console.log(`Password needs to be 10 characters long.`)
    }
    readline.close();
});

