
const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')


// test returnTwo

test('returnTwo should return number 2', () =>{
    expect(returnTwo()).toEqual(2)
})


// test greeting

test('greeting should return Hello + name', () =>{
    expect(typeof greeting('John')).toBe('string')
})


// test add

test('add should return a combined number', () => {
    expect(typeof add(2, 4)).toBe('number')
})