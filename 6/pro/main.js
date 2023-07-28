document.addEventListener('DOMContentLoaded ', function () {
	let countDisplay = document.querySelector('.display');
let incrementButton = document.querySelector('.button');

function incrementCount() {
	let currentCount = parseInt(countDisplay.textContent);
	countDisplay.textContent = currentCount + 1;
}

incrementButton.addEventListener('click', incrementCount);
});



document.addEventListener('DOMContentLoaded', function () { 
	let colorInput = document.querySelector('.color-input');
	let colorBlock = document.querySelector('.color-block');
	let clearButton=document.querySelector('.clear-color-button');

	function paintBlock() {
		colorBlock.style.backgroundColor = colorInput.value;
	}
	colorInput.addEventListener('input', paintBlock);
	
	clearButton.addEventListener('click', function () {
		colorBlock.style.removeProperty('background-color');
		colorInput.value = '';
	})
});