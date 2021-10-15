
//functions
const color = (e) => {
    e.preventDefault()
    alert('My favorite color is Red.')
}
const place = (e) => {
    e.preventDefault()
    alert('My favorite place is my bed.')
}
const ritual = (e) => {
    e.preventDefault()
    alert('My favorite ritual is putting my dogs to sleep.')
}




//Event Listeners
document.getElementById('color').addEventListener('click', color)
document.getElementById('place').addEventListener('click', place)
document.getElementById('ritual').addEventListener('click', ritual)