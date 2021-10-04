// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
for (let i = 0; i < array.length; i++) {
    while (array[0] + array[i] != 0) {
        console.log(array[i])
    } 
}