console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const compliment = (e) => {
	e.preventDefault()
	alert(`You're Awesome`)
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById('duck').addEventListener('mouseover', compliment)