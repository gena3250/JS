(function () {

	document.addEventListener('DOMContentLoaded', function () {
		function cardNew(quan) {
			let cardsCount = quan/2;
			let cardNumberArray = [];

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
			let card = document.createElement('div');
			card.classList.add('io');
			card.textContent = cardNumberArray[i];
			ol.after(card);
			}
			/* return card; */
		}
		
			cardNew(8);
		
	});
})();