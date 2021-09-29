const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function(input){
	let tokens = input.split(' ');
	
	
    let mathSymbol = tokens[0];
	    let num1 = Number(tokens[1]);
	    let num2 = Number(tokens[2]);


            //addition
        if (mathSymbol === "+"){
            console.log(num1 + num2)
            //subtraction
        } else if (mathSymbol === "-"){
            console.log(num1 - num2)
             //multiplication
        } else if (mathSymbol === "*"){
            console.log(num1 * num2)
            //division
        } else if (mathSymbol === "/"){
            console.log(num1 / num2)
            //squareRoot
        } else if (mathSymbol === "^"){
            console.log(num1 * num1)
        } else {
            console.log("Please insert data as, symbol number number.")
        }

	// This line closes the connection to the command line interface.
	reader.close()

});
