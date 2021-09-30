//Code Challenge - FizzBuzz

for (i = 0; i <= 50; i++) {
    if (i % 3) {
        console.log(`fizz`)
    } else if (i % 5) {
        console.log(`buzz`)
    } else if (i % 3 && i % 5) {
        console.log(`fizzbuzz`)
    } else {
        console.log(i)
    }
}