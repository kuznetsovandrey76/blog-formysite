// Выбрать DOM элемент  
function select(elem) {
	return document.querySelector(elem);
};

var select_tbody = select('tbody');

// Создаем новую строку
// которая будет показывать год, месяц или статью
// note - название статьи // элемент из data.js
function article(note) {

	// создание DOM элемента
	// elem - создаваемый элемент 
	function create(elem) {
		return document.createElement(elem);
	};

	// Новая строка для таблицы 
	var tr = create('tr'),
		// год, месяц или число 
		th = create('th');

	// Проверка чем является note
	// год, месяц или статья
	if (note.indexOf('note') != -1) {
		var	td = create('td'),

			a = create('a');
			a.id = note.slice(5, 13);
			
			// Название статьи, пока просто link
			a.textContent = 'link';
			a.href = 'notes/' + note.slice(5, 13);	

		// Преобразуем note в дату 
		var date = note.slice(5, 13).replace(/_/g, '.');

	} else {
		var date = note;
	}

	// Левый столбик таблицы
	th.textContent = date;
	tr.appendChild(th);

	// Добавлянм ссылку только для даты 
	if (note.indexOf('note') != -1) {
		// Правый столбик таблицы
		td.appendChild(a);
		tr.appendChild(td);
	}

	//Ввозвращаем строку таблицы
	return tr;				
}		

// Пробегаем по всем статьям
for (i = 0, max = notes.length; i < max; i++) {

	// notes берем из home.handlebars 
	select_tbody.appendChild(article(notes[i]));			
}