let student = [
	{ name: "Геннадий", famel: "Дмитриев", surname: "Олегович", date: "07.11.1990", year: 2007, faculty: "Информационные системы и техноогии" },
	{ name: "Александр", famel: "Александров", surname: "Александрович", date: "07.11.1980", year: 2010, faculty: "Информационные системы и техноогии" },
	{ name: "Петр", famel: "Петров", surname: "Алексеевич", date: "10.12.1985", year: 2013, faculty: "Информационные системы и техноогии" },
	{ name: "Василий", famel: "Васильев", surname: "Хренович", date: "17.05.1993", year: 2011, faculty: "Информационные системы и техноогии" },
	{ name: "Алексей", famel: "Алушкин", surname: "Владимирович", date: "07.11.1990", year: 2012, faculty: "Информационные системы и техноогии" }	
]


//Таблица
let stud = document.getElementById('stud')
let table = document.createElement('h4');
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
console.log(stud);


stud.append(table);
table.append(thead);
tableTr.append(tableFioTh);
tableTr.append(tableFacultyTh);
tableTr.append(tableDateTh);
tableTr.append(tableYearTh);
thead.append(tableTr); 


let students = student.slice();


tableFioTh.addEventListener('click', function () {
	
	students.sort((a, b) => a.name > b.name ? 1 : -1);
	start(students);
})

function start(students){
for (let i = 0; i < students.length; i++) {
	
	students[i].fio = students[i].famel + " " + students[i].name + " " + students[i].surname;
	console.log(student[i].fio)
	let tableTrtD = document.createElement('tr');
	let tableFioTd = document.createElement('td');
	let tableFacultyTd = document.createElement('td');
	let tableDateTd = document.createElement('td');
	let tableYearTd = document.createElement('td');

	tableFioTd.textContent = students[i].fio;
	tableFacultyTd.textContent = students[i].faculty;
	tableDateTd.textContent = students[i].date;
	tableYearTd.textContent = students[i].year;

	table.append(tbody);
	tableTrtD.append(tableFioTd);
	tableTrtD.append(tableFacultyTd);
	tableTrtD.append(tableDateTd);
	tableTrtD.append(tableYearTd);
	tbody.append(tableTrtD);



	return {
		tableFioTd,
		tableFacultyTd,
		tableDateTd,
		tableYearTd,
	};

}
}
start(students);







