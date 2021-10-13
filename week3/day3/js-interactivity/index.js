let message = document.querySelector('#message')

//add movie function
const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span') 

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    inputField.value = ('')

    document.querySelector('ul').appendChild(movie)
}
document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}