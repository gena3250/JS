let colIndex = -1;

let student = [
	{
		name: "Геннадий",
		famel: "Дмитриев",
		surname: "Олегович",
		date: "01.02.2003",
		year: 2007,
		faculty: "Информационные системы и техноогии"
	},
	{
		name: "Александр",
		famel: "Александров",
		surname: "Александрович",
		date: "01.02.2003",
		year: 2010,
		faculty: "Информационные системы и техноогии"
	},
	{ 	name: "Петр",
	 	famel: "Петров",
	 	surname: "Алексеевич",
	 	date: "01.02.2002",
	 	year: 2013,
	 	faculty: "Анформационные системы и техноогии" 
	},
	{ 	name: "Василий",
	 	famel: "Васильев",
	 	surname: "Хренович",
	 	date: "01.02.2004",
	 	year: 2011,
	 	faculty: "Информационные системы и техноогии" 
	},
	{ 	name: "Алексей",
	 	famel: "Алушкин",
	 	surname: "Владимирович",
	 	date: "01.02.2005",
	 	year: 2012,
	 	faculty: "Информационные системы и техноогии" 
	}
]


//Формы
let stud = document.getElementById('stud')
		this.form = document.createElement('form');
		this.nameInput = document.createElement('input');
		this.famelInput = document.createElement('input');
		this.surnameInput = document.createElement('input');
		this.dateInput=document.createElement('input');
		this.yearInput=document.createElement('input');
		this.facultyInput = document.createElement('input');
		this.buttonInput = document.createElement('button');

nameInput.placeholder ="Введите имя:";
famelInput.placeholder ="Введите фамилию:" ;
surnameInput.placeholder = "Введите отчество:" ;
dateInput.type = "date";
dateInput.value = "1990-01-01";
yearInput.placeholder="Год обучения:";
facultyInput.placeholder = "Факультет:";
		
buttonInput.textContent = "Добавить";
buttonInput.classList.add('btn', 'btn-primary');
buttonInput.classList.add('mb-3');
		

//Добавление формы ввода

stud.append(form);
form.append(nameInput);
form.append(famelInput);
form.append(surnameInput);
form.append(dateInput);
form.append(yearInput);
form.append(facultyInput);
form.append(buttonInput);

//Фильтрация таблицы 
		this.formFilter = document.createElement('form');
		this.fioFilter = document.createElement('input');
		this.facultyFilter = document.createElement('input');
		this.dateFilter = document.createElement('input');
		this.yearFilter = document.createElement('input');
		this.buttonFilter = document.createElement('button');
		this.buttonFilterClear = document.createElement('button');
	
formFilter.classList.add('formFilterClass')
buttonFilter.textContent = "Фильтровать";
buttonFilter.classList.add('btn', 'btn-primary');
buttonFilter.classList.add('mb-3');
buttonFilterClear.textContent = "Очистить";
buttonFilterClear.classList.add('btn', 'btn-primary');
buttonFilterClear.classList.add('mb-3');
		
fioFilter.placeholder = "ФИО";
facultyFilter.placeholder = "Факультет";
dateFilter.placeholder = "Возраст";
yearFilter.placeholder = "Годы обучения";
		

		stud.append(formFilter);
		formFilter.append(fioFilter);
		formFilter.append(facultyFilter);
		formFilter.append(dateFilter);
		formFilter.append(yearFilter);
		formFilter.append(buttonFilter);
		formFilter.append(buttonFilterClear);
		
		

		







//Таблица

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let tableTr = document.createElement('tr');
let tableFioTh = document.createElement('th');
let tableFacultyTh = document.createElement('th');
let tableDateTh = document.createElement('th');
let tableYearTh = document.createElement('th');

//Дбавление заголовков таблицы на страницу
tableFioTh.textContent = "ФИО";
tableFioTh.setAttribute('data-type','string');
tableFacultyTh.textContent = "Факультет";
tableFacultyTh.setAttribute('data-type','string');
tableDateTh.textContent = "ДР и возраст";
tableDateTh.setAttribute('data-type','number');
tableYearTh.textContent = "Годы обучения";
tableYearTh.setAttribute('data-type','number');
table.classList.add("table", "table-dark")


//Вывод заголовков таблицы
stud.append(table);
table.append(thead);
tableTr.append(tableFioTh);
tableTr.append(tableFacultyTh);
tableTr.append(tableDateTh);
tableTr.append(tableYearTh);
thead.append(tableTr); 







//Функция вывода фильтра

function filter(arr,prop,value) {
	let result = [];
	let copy = [...arr]
	for (let item of copy) {
		if(String(item[prop]).includes(value)==true) result.push(item)
	}
	return result
}



//Функция вывода таблицы
function render(arr) {
	let students = arr.slice();
	let massFilter = [];
for (let oneUser of students) {
		oneUser.fio = oneUser.famel + " " + oneUser.name + " " + oneUser.surname;
		oneUser.birthYear = 2023 - Number(oneUser.date.slice(-4));//Сколько студенту лет
		massFilter.push(oneUser);
}

let newMass=[...massFilter]
	if (facultyFilter.value !== '') newMass = filter(newMass, 'faculty', facultyFilter.value);
	if (fioFilter.value !== '') newMass = filter(newMass, 'fio', fioFilter.value);
	if (dateFilter.value !== '') newMass = filter(newMass, 'birthYear', dateFilter.value);
	if (yearFilter.value !== '') newMass = filter(newMass, 'year', yearFilter.value);
//Добавить фильтры

	for (let oneUser of newMass) {
	let tableTrtD = document.createElement('tr');
	let tableFioTd = document.createElement('td');
	let tableFacultyTd = document.createElement('td');
	let tableDateTd = document.createElement('td');
	let tableYearTd = document.createElement('td');
	
	tableFioTd.textContent = oneUser.fio;
	tableFacultyTd.textContent = oneUser.faculty;
	tableDateTd.textContent = oneUser.date + " Возраст:"+ oneUser.birthYear;
	tableYearTd.textContent = oneUser.year;

	table.append(tbody);
	tableTrtD.append(tableFioTd);
	tableTrtD.append(tableFacultyTd);
	tableTrtD.append(tableDateTd);
	tableTrtD.append(tableYearTd);
	tbody.append(tableTrtD);
	}
	
};

render(student);




//Кнопка для фильтра
buttonFilter.addEventListener('click', function (e) {
	e.preventDefault();
	tbody.innerHTML = ' ';	
	render(student);
	
})

buttonFilterClear.addEventListener('click', function () {
	facultyFilter.value == '';
	fioFilter.value == '';
	dateFilter.value == '';
	yearFilter.value == '';
})

//Добавление в таблицу

buttonInput.addEventListener("click", function (event) {
	tbody.innerHTML = '';
	event.preventDefault();
	let nameInputStr = nameInput.value.trim();
		 famelInputStr = famelInput.value.trim();
		 surnameInputStr = surnameInput.value.trim();
		 facultyInputStr =facultyInput.value.trim();
		 dateNorm = dateInput.value.split("-").reverse().join(".");
	student.push({
		name: nameInputStr[0].toUpperCase() + nameInputStr.slice(1),
		famel: famelInputStr[0].toUpperCase() + famelInputStr.slice(1),
		surname: surnameInputStr[0].toUpperCase() + surnameInputStr.slice(1),
		date: dateNorm,
		year: yearInput.value,
		faculty: facultyInputStr[0].toUpperCase() + facultyInputStr.slice(1),
	});
	nameInput.value = nameInput.placeholder;
	famelInput.value = ' ';
	surnameInput.value = ' ';
	facultyInput.value = ' ';
	dateInput.value = ' ';
	yearInput.value=' '
	render(student)
})

//Сортировка таблицы по столбцам ,доделать в обратную сторону!!!
table.addEventListener('click', function(event) {
	if (event.target.tagName != 'TH') return
	let th = event.target;
	
	sortTable(th.cellIndex, th.dataset.type, colIndex == th.cellIndex);
	colIndex = (colIndex == th.cellIndex) ? -1 : th.cellIndex;
});


//Функция сортировки таблицы
 function sortTable(colNum, type,isSorted) {
	let rowsArrey = Array.from(tbody.rows)

	let compare;
	switch (type) {
		case 'number':
			compare = function (rowA, rowB) {
				return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
			}
			break;
		case 'string':
			compare = function (rowA, rowB) {
				return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
			}
			break;
	}

	rowsArrey.sort(compare)
	if (isSorted) rowsArrey.reverse();

	tbody.append(...rowsArrey)
}


