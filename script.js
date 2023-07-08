const calculateBtn = document.querySelector('.calculate');
const clearBtn = document.querySelector('.clear');

calculateBtn.addEventListener('click', () => {
	let weight = document.querySelector('#weight').value;
	let height = document.querySelector('#height').value;
	let imc = parseInt(weight / (height * height)).toFixed(2);

	let result = document.createElement('p');
	result.classList.add('result');
	result.innerHTML = imc;

	let main = document.querySelector('#main')

	main.appendChild(result);
});

clearBtn.addEventListener('click', () => {

});