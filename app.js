// document.addEventListener("DOMContentLoaded", function() { 
// 	(function() {

// 		var notes = [
// 			'2018',

// 			'september',
// 			'note_21_09_18.txt', // friday
// 		];
			
// 		// Выбрать DOM элемент  
// 		function select(elem) {
// 			return document.querySelector(elem);
// 		};

// 		var select_tbody = select('tbody');

// 		// Создаем новую строку
// 		// которая будет показывать год, месяц или статью
// 		// note - название статьи
// 		function article(note) {

// 			// Проверка чем является note
// 			// год, месяц или статья
// 			if (note.indexOf('.txt') > 0) {
// 				// Преобразуем note в дату 
// 				var date = note.slice(5, 13).replace(/_/g, '.');
// 			} else {
// 				var date = note;
// 			}

// 			// создание DOM элемента
// 			// elem - создаваемый элемент
// 			function create(elem) {
// 				return document.createElement(elem);
// 			};

// 			var tr = create('tr'),
// 				// год, месяц или число 
// 				th = create('th'),
// 				td = create('td'),
// 				// название статьи
// 				a = create('a');

// 			// Берем заголовок из первой строки 
// 			// $.ajax({
// 			// 	type: 'GET',	
// 			// 	url: 'notes/' + note,
// 			// 	success: function(data) {
// 			// 	  	// Добавляем в ссылку только первую строку
// 			// 		a.textContent = data.slice(0, data.indexOf('\n'));
// 			// 		a.href = 'notes/' + note;
// 			// 	}
// 			// });

// 			// [Аналог] Для моего телефона
// 			var xhr = new XMLHttpRequest();
// 			xhr.open('GET', 'notes/' + note, true);

// 			xhr.onload = function() {
// 				if (this.status == 200) {
// 					a.textContent = this.response.slice(0, this.response.indexOf('\n'));
// 					a.href = 'notes/' + note;	
// 				}
// 			}
// 			xhr.send();


// 			td.append(a);
// 			th.textContent = date;

// 			tr.append(th)
// 			tr.append(td)

// 			//Ввозвращаем строку таблицы
// 			return tr;				
// 		}		

// 		// Пробегаем по всем статьям
// 		for (var i = 0, l = notes.length; i < l; i++) {
// 			select_tbody.append(article(notes[i]))			
// 		}

// 	}());
// });


let express = require('express'),
	bodyParser = require('body-parser'),
	exphbs  = require('express-handlebars'),
	app = express();

// Размещаем css, js в public/
app.use(express.static(__dirname + '/public'));

// Размещаем основной шаблон handlebars во views/layouts/main.handlebars
// А другие во views/
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// Корень сайта
app.get('/', function(req, res){

  res.render('home');

}); 


// Удаляю пост (снова капитан :))
app.delete('/delete/:id', function(req, res) {
	const client = new Client({
	  connectionString: connect,
	  ssl: true
	});
	client.connect();

	client.query(`DELETE FROM ${USER.table} WHERE id = $1`, 
		[req.params.id], (err, res2) => {
	  		client.end();
	  		res.sendStatus(200); // ?
		});

});


// При загрузке через Heroku 
// Приложение включается через другой порт: process.env.PORT
app.listen(process.env.PORT || 8080, function(){
	console.log('http://localhost:8080');
});