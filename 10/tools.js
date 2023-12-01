let student = [
	{
		name: "Геннадий",
		famel: "Дмитриев",
		surname: "Олегович",
		date: new Date("1985-11-07"),
		year: 2007,
		faculty: "Информационные системы и техноогии"
	},
	{
		name: "Александр",
		famel: "Александров",
		surname: "Александрович",
		date: new Date("1980-11-07"),
		year: 2010,
		faculty: "Информационные системы и техноогии"
	},
	{ 	name: "Петр",
	 	famel: "Петров",
	 	surname: "Алексеевич",
	 	date: new Date("1996-01-27"),
	 	year: 2013,
	 	faculty: "Информационные системы и техноогии" 
	},
	{ 	name: "Василий",
	 	famel: "Васильев",
	 	surname: "Хренович",
	 	date: new Date("2001/02/17"),
	 	year: 2011,
	 	faculty: "Информационные системы и техноогии" 
	},
	{ 	name: "Алексей",
	 	famel: "Алушкин",
	 	surname: "Владимирович",
	 	date: new Date(1992,11,17),
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


buttonInput.textContent = "Добавить";
buttonInput.classList.add('btn', 'btn-primary')
buttonInput.classList.add('mb-3')

console.log(facultyInput)





//Таблица

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let tableTr = document.createElement('tr');
let tableFioTh = document.createElement('th');
let tableFacultyTh = document.createElement('th');
let tableDateTh = document.createElement('th');
let tableYearTh = document.createElement('th');


tableFioTh.textContent = "ФИО";
tableFacultyTh.textContent = "Факультет";
tableDateTh.textContent = "ДР и возраст";
tableYearTh.textContent = "Годы обучения";




table.classList.add("table", "table-dark")
stud.append(form);
form.append(nameInput);
form.append(famelInput);
form.append(surnameInput);
form.append(dateInput);
form.append(yearInput);
form.append(facultyInput);
form.append(buttonInput);
stud.append(table);
table.append(thead);
tableTr.append(tableFioTh);
tableTr.append(tableFacultyTh);
tableTr.append(tableDateTh);
tableTr.append(tableYearTh);
thead.append(tableTr); 


let students = student.slice();



for (let oneUser of students) {
	oneUser.fio = oneUser.famel + " " + oneUser.name + " " + oneUser.surname;
	oneUser.birthYear = 2023 - oneUser.date.getFullYear()
}



for (let oneUser of students) {
	let tableTrtD = document.createElement('tr');
	let tableFioTd = document.createElement('td');
	let tableFacultyTd = document.createElement('td');
	let tableDateTd = document.createElement('td');
	let tableYearTd = document.createElement('td');

	tableFioTd.textContent = oneUser.fio;
	tableFacultyTd.textContent = oneUser.faculty;
	tableDateTd.textContent = oneUser.date.toISOString().slice(0, 10) + " Возраст:"+ oneUser.birthYear;
	tableYearTd.textContent = oneUser.year;

	table.append(tbody);
	tableTrtD.append(tableFioTd);
	tableTrtD.append(tableFacultyTd);
	tableTrtD.append(tableDateTd);
	tableTrtD.append(tableYearTd);
	tbody.append(tableTrtD);
}




