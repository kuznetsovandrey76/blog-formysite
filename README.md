``` 
data.js   - [хронология] 
app.js   - [сервер]
public/   - [css, js]
  - style.css
  - update_table.js    - [отрисовываем таблицу]
  - event.js   - [временный]
views/   - []
  - layouts/    - [основной шаблон]
  - notes/   - [записи]
  - home.handlebars   - [шаблон таблицы]   
```

Добавление записей:  
в `data.js` добавляю `note_<date>`  
где `<date>` - дата в формате `dd_mm_yy`   
example - `note_18_03_90`  
если наступает новый месяц или год пишу месяц или год соответственно   

В папке `views/notes` хранятся все статьи  
Именование статей:    
`note_<date>.handlebars`   

Для локальной работы:  
`git clone https://github.com/kuznetsovandrey76/blog-formysite.git`   
`npm install`  
`node app` - запуск сервера    