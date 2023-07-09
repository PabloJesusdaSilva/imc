const calculateBtn = document.querySelector('.calculate');

calculateBtn.addEventListener('click', () => {
	let weight = document.querySelector('#weight').value;
	let height = document.querySelector('#height').value;

	let imc = (weight / (height * height)).toFixed(2);
	
	let result = document.createElement('p');
	result.classList.add('result');
	result.innerHTML = imc;
	
	let main = document.querySelector('#main');
	
	main.appendChild(result);
});