// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

for (let i = 0; i > array.length; i++) {
    for ( let y = 6; y < array.length; y--) {
        if (array[i] + array[y] == 0 && i != y) {
            console.log(array[i] , array[y] , `add to zero!`)
        }
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[0] + array[i] == 0 && i != array[0]) {
        console.log(array[0] , array[i] , `add to zero!`)
    } else if (array[1] + array[i] === 0 && i !== array[1]) {
        console.log(array[1] , array[i] , `add to zero!`)
    } else if (array[2] + array[i] === 0 && i !== array[2]) {
        console.log(array[2] , array[i] , `add to zero!`)
    } else if (array[3] + array[i] === 0 && i !== array[3]) {
        console.log(array[3] , array[i] , `add to zero!`)
    } else if (array[4] + array[i] === 0 && i !== array[4]) {
        console.log(array[4] , array[i] , `add to zero!`)
    } else if (array[5] + array[i] === 0 && i !== array[5]) {
        console.log(array[5] , array[i] , `add to zero!`)
    } else if (array[6] + array[i] === 0 && i != array[6]) {
        console.log(array[6] , array[i] , `add to zero!`)
    } 
}
