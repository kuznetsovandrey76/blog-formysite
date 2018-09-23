var notes = [
	'2018',

	'september',
	'note_23_09_18.txt', 
	'note_21_09_18.txt', // friday
];
	
// Выбрать DOM элемент  
function select(elem) {
	return document.querySelector(elem);
};

var select_tbody = select('tbody');

// Создаем новую строку
// которая будет показывать год, месяц или статью
// note - название статьи
function article(note) {

	// Проверка чем является note
	// год, месяц или статья
	if (note.indexOf('.txt') > 0) {
		// Преобразуем note в дату 
		var date = note.slice(5, 13).replace(/_/g, '.');
	} else {
		var date = note;
	}

	// создание DOM элемента
	// elem - создаваемый элемент
	function create(elem) {
		return document.createElement(elem);
	};

	var tr = create('tr'),
		// год, месяц или число 
		th = create('th'),
		td = create('td'),
		// название статьи
		a = create('a');

	// Берем заголовок из первой строки 
	// $.ajax({
	// 	type: 'GET',	
	// 	url: 'notes/' + note,
	// 	success: function(data) {
	// 	  	// Добавляем в ссылку только первую строку
	// 		a.textContent = data.slice(0, data.indexOf('\n'));
	// 		a.href = 'notes/' + note;
	// 	}
	// });

	// [Аналог] Для моего телефона
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'notes/' + note, true);

	xhr.onload = function() {
		if (this.status == 200) {
			a.textContent = this.response.slice(0, this.response.indexOf('\n'));
			a.href = 'notes/' + note;	
		}
	}
	xhr.send();


	td.appendChild(a);
	th.textContent = date;

	tr.appendChild(th);
	tr.appendChild(td);

	//Ввозвращаем строку таблицы
	return tr;				
}		

// Пробегаем по всем статьям
for (i = 0, max = notes.length; i < max; i++) {
	select_tbody.appendChild(article(notes[i]));			
}