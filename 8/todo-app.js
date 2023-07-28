(function () {
	function createAppTitle(title) {
		let appTitle = document.createElement('h2');
		appTitle.innerHTML = title;
		return appTitle;
	}


	function createTodoItemForm() {
		let form = document.createElement('form');
		let input = document.createElement('input');
		let buttonWrapper = document.createElement('div');
		let button = document.createElement('button');
		
		form.classList.add('input-group', 'mb-3');
		input.classList.add('form-control');
		input.placeholder = 'Введите название нового дела';
		buttonWrapper.classList.add('input-group-append');
		button.classList.add('btn', 'btn-primary');
		button.textContent = 'Добавить дело';
		button.disabled = true;

		

		buttonWrapper.append(button);
		form.append(input);
		form.append(buttonWrapper);
	

		input.addEventListener('input', function (e) {
			e.preventDefault();
			if (input.value.length > 0) {
				button.disabled = false;
			} else if (input.value.length == 0) {
				button.disabled = true;
			}
		});
		


		return {
			form,
			input,
			button,
		};
	
	}

	function createTodoList() {
		let list = document.createElement('ul');
		list.classList.add('list-group');
		return list;
	}

	function createTodoItem(name) {
		let item = document.createElement('li');
		let buttonGroup = document.createElement('div');
		let doneButton = document.createElement('button');
		let deleteButton = document.createElement('button');


		item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
		
		item.textContent = name;


		buttonGroup.classList.add('btn-group', 'btn-group-sm');
		doneButton.classList.add('btn', 'btn-success');
		doneButton.textContent = 'Готово';
		deleteButton.classList.add('btn', 'btn-danger');
		deleteButton.textContent = 'Удалить';



		buttonGroup.append(doneButton);
		buttonGroup.append(deleteButton);
		item.append(buttonGroup);

		return {
			item,
			doneButton,
			deleteButton,
		};
		
	};
	
	function createTodoApp(container, title = 'Список дела') {

/* 		let container = document.getElementById('todo-app'); */
		let todoAppTitle = createAppTitle(title);
		let todoItemForm = createTodoItemForm();
		let todoList = createTodoList();
		container.append(todoAppTitle);
		container.append(todoItemForm.form);
		container.append(todoList);
		var k = 0;
		let test1 = JSON.parse(localStorage.getItem(`number1`));
		container.append(test1);
		console.log(test1);
		
		todoItemForm.form.addEventListener('submit', function (e) {
			e.preventDefault();
			if (!todoItemForm.input.value) {
				return;
			 }
			let todoItem = createTodoItem(todoItemForm.input.value);
			k++;
			console.log(k);



			todoItem.doneButton.addEventListener('click', function () {
				todoItem.item.classList.toggle('list-group-item-success');

			});

			todoItem.deleteButton.addEventListener('click', function () {
				if (confirm('Вы уверенны?')) {
					todoItem.item.remove();
					/* localStorage.removeItem(`number${k}`); */
					/* localStorage.setItem(`number`,todoItemForm.input.value); */
				}
			});


			todoList.append(todoItem.item);
			let test=JSON.stringify(todoItemForm)
			localStorage.setItem(`number1`,test);

			todoItemForm.input.value = '';

		});
	
	}
	


	/* document.addEventListener('DOMContentLoaded', function () {
		createTodoApp(document.getElementById('my-todos'), 'Мои дела');
		createTodoApp(document.getElementById('mom-todos'), 'Дела для мамы');
		createTodoApp(document.getElementById('dad-todos'), 'Дела для Папы');
	}); */
	
	window.createTodoApp = createTodoApp;

})();