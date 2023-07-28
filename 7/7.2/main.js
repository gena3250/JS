 // add element, style and class
 let input = document.createElement('input');
 input.classList.add('input')
 input.type = 'text';

 let h2 = document.createElement('h2');
 h2.classList.add('head')
 document.body.append(input);
 document.body.append(h2);

 // function
 // Ищем элементы по классу
 let classInput = document.querySelector('.input');
 let classHead = document.querySelector('.head');
 
 // Пустая переменная для взаимодействия с ( clearTimeout() ) и ( setTimeout() )
 let timeout;
 
 // Функция которая выводит текст из ( input ) в ( h2 )
 function inputText() {
	  // используем ( .textContent ) чтобы избежать неприятностей :)
	  classHead.textContent = classInput.value;
 }

 // Функция которая дает нам задержку
 function outputText() {
	  // Здесь будет очищаться наш таймаут.
	  // Пока текст набирают со скоростью 300мс и меньше(оооочень быстро),
	  // то текст не покажется в заголовке
	  timeout = clearTimeout(timeout);
	  // Здесь выводиться текст в заголовке с задержкой в 300мс
	  // Используем нашу функцию что выше ( inputText )
	  timeout = setTimeout(inputText, 5000);
 }
 
 // Запускаем нашу функцию ( outputText ) по событию ( input )
 // input - ввод(взаимодействие) текста(с нашей строкой ввода)
classInput.addEventListener('input', outputText);
