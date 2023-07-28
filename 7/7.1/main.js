document.addEventListener('DOMContentLoaded', function() {
let numberInput = document.querySelector('.number');
let buttonStart = document.querySelector('.start');
let startInput = document.querySelector('.time-start');
let timeId;
let current = 0;

function startTimer() {
	startInput.textContent = --current;
	if (current <= 0)
		timeId = clearInterval(timeId);
}

function inputBlock() {   
	timeId=clearInterval(timeId);
	current = +numberInput.value;
	if (current) {
		startInput.textContent = current;
		timeId = setInterval(startTimer, 1000);
	}
	
};


buttonStart.addEventListener('click', inputBlock); 

});

