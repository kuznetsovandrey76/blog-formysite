var links = document.querySelector('body');

links.addEventListener('click', function(e) {

	// Отмена стандартного события
	// e.preventDefault();

	var itIsLink = e.toElement.href;

	if (itIsLink) {

		// Название записи
		var noteName = itIsLink.slice(-8);
	} 
});