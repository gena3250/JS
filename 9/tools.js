(function () {

	document.addEventListener('DOMContentLoaded', function () {
		function cardNew(quan) {
			/* let card; */
			let cardsCount = quan / 2;
			let cardNumberArray = [];
			let cardNumberArray1 = [];

			for (let i = 1; i <= cardsCount; i++){
				cardNumberArray.push(i, i);
				
			}



			for (let i = 0; i < cardNumberArray.length; i++){
				let randomIndex = Math.floor(Math.random() * cardNumberArray.length);
				let temp = cardNumberArray[i];
				cardNumberArray[i] = cardNumberArray[randomIndex];
				cardNumberArray[randomIndex] = temp;
			}

			console.log(cardNumberArray);

			

			for (let i = 0; i < quan;i++){
			let card= document.createElement('div');
			card.classList.add('io');
			card.textContent = cardNumberArray[i];
				ol.after(card);
				console.log(card);
			card.addEventListener('click', function (event) {
				card.classList.add('loh');
				cardNumberArray1.push(card.textContent);
				console.log(cardNumberArray1);
				})
			}
		}
		
			cardNew(8);
			
	});
})();