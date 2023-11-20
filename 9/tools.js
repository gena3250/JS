
let game=document.getElementById("game")			
			

function startGame(game,cardsCount){

			let cardNumberArray = [];
			let firstCard = null;
			let secondCard = null;




			for (let i = 1; i <= cardsCount; i++){
				cardNumberArray.push(i, i);				
			}
			

			/* Перемешивания массива чисел */
			 for (let i = 0; i < cardNumberArray.length; i++){
				let randomIndex = Math.floor(Math.random() * cardNumberArray.length);
				let temp = cardNumberArray[i];
				cardNumberArray[i] = cardNumberArray[randomIndex];
				cardNumberArray[randomIndex] = temp;
			}

			/* console.log(cardNumberArray); */
			
			//Создание карточки
			for (let cardNumber of cardNumberArray){
			let card = document.createElement('div');
			card.textContent=cardNumber;	
			card.classList.add('card');	

				card.addEventListener('click', function () {

					if (card.classList.contains("loh") || card.classList.contains("success")) {
						return
					}



					if (firstCard !== null && secondCard !== null) {
						firstCard.classList.remove("loh");
						secondCard.classList.remove("loh");
						firstCard = null;
						secondCard = null;
				}
				card.classList.add('loh');
				console.log("Номер карты",card)
				if (firstCard===null) {
					firstCard = card;
				} else {
					secondCard = card;
				}

				if (firstCard !== null && secondCard !== null) {
					let firstCardNumber = firstCard.textContent;
					let secondCardNumber = secondCard.textContent;
					
					if (firstCardNumber === secondCardNumber) {
						firstCard.classList.add("success");
						secondCard.classList.add("success");

					}

				}
					/* let tagsName = ; */
					
		
					if (cardNumberArray.length === document.querySelectorAll(".success").length) {
						
						setTimeout(function () {
							game.innerHTML = "";
							alert("Игра закончилась")
							
							let cardsCount = Number(prompt('Введите кол-во ячеек'));
							startGame(game, cardsCount)
						}, 400)
				
					}
					


			})
			game.after(card);
			}
		}




 let cardsCount = Number(prompt('Введите кол-во ячеек')) / 2;
 startGame(game,cardsCount)