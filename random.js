function getRandomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}

function generateRandom() {
	let max = document.getElementById('max').value;
	alert(max);
}

let button = document.querySelector('button');
button.addEventListener('click', generateRandom);
button.disabled = false;

