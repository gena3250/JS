let student = [
	{ name: "Геннадий", famel: "Дмитриев", surname: "Олегович", date: "07.11.1990", year: 2007, faculty: "Информационные системы и техноогии" },
	{ name: "Александр", famel: "Александров", surname: "Александрович", date: "07.11.1980", year: 2010, faculty: "Информационные системы и техноогии" },
	{ name: "Петр", famel: "Петров", surname: "Алексеевич", date: "10.12.1985", year: 2013, faculty: "Информационные системы и техноогии" },
	{ name: "Василий", famel: "Васильев", surname: "Хренович", date: "17.05.1993", year: 2011, faculty: "Информационные системы и техноогии" },
	{ name: "Алексей", famel: "Алушкин", surname: "Владимирович", date: "07.11.1990", year: 2012, faculty: "Информационные системы и техноогии" }	
]

const students = student.slice();
for (let userStudent of students) {
	userStudent.fio = userStudent.famel + " " + userStudent.name + " " + userStudent.surname;
}




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







/* tableTr.append(tableFioTh);
tableTr.append(tableFacultyTh);
tableTr.append(tableDateTh);
tableTr.append(tableYearTh);

thead.append(tableTr);
table.append(thead);
table.append(tbody);
studId.append(table); */

