let express = require('express'),
	bodyParser = require('body-parser'),
	exphbs  = require('express-handlebars'),
	data = require('./data.js'),
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

  // Передаем данные из data.js в виде строки
  // views/home.handlebars 
  res.render('home', {data: data, text: 'hello'});

}); 

// Перехватываем request
// id - берем из a.id
app.get('/notes/:id', function(req, res){

  res.render('notes/' + req.params.id);
});

// При загрузке через Heroku 
// Приложение включается через другой порт: process.env.PORT
app.listen(process.env.PORT || 8080, function(){
	console.log('http://localhost:8080');
});