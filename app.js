$( document ).ready(function() {
	$(function() {

		// Список всех статей
		notes = [
			'2018',
			'october',
			'note_21_10_18.txt',
			'september',
			'note_21_09_18.txt',
			'note_20_09_18.txt',
			'note_19_09_18.txt'
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
			$.ajax({
				type: 'GET',	
				url: 'notes/' + note,
				success: function(data) {
				  	// Добавляем в ссылку только первую строку
					a.textContent = data.slice(0, data.indexOf('\n'));
					a.href = 'notes/' + note;
				}
			});

			td.appendChild(a);
			th.textContent = date;

			tr.appendChild(th)
			tr.appendChild(td)

			//Ввозвращаем строку таблицы
			return tr;				
		}		

		// Пробегаем по всем статьям
		for (var i = 0, l = notes.length; i < l; i++) {
			select_tbody.append(article(notes[i]))			
		}

	}());
});