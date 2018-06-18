function initializeTable() {
	$("#createLink").click(addCountry);
	createCountry("Bulgaria", "Sofia");
	createCountry("Germany", "Berlin");
	createCountry("Russia", "Moscow");
	fixRowLinks();
	
	function addCountry() {
		let country = $('#newCountryText');
		let capital = $('#newCapitalText');
		createCountry(country.val(), capital.val());
		country.val('');
		capital.val('');
		fixRowLinks();
	}
	
	function createCountry(country, capital) {
		let row = $('<tr>')
			.append($('<td>').text(country))
			.append($('<td>').text(capital))
			.append($('<td>')
				.append($("<a href='#'>[Up]</a>").click(moveUp))
				.append(" ")
				.append($("<a href='#'>[Down]</a>").click(moveDown))
				.append(" ")
				.append($("<a href='#'>[Delete]</a>").click(deleteRow)));
		row.css('display', 'none');
		row.appendTo($('#countriesTable'));
		row.fadeIn();
	}
	
	function moveUp() {
		let row = $(this).parent().parent();
		row.fadeOut(() => {
			row.insertBefore(row.prev());
			row.fadeIn();
			fixRowLinks();
		});
	}
	
	function moveDown() {
		let row = $(this).parent().parent();
		row.fadeOut(() => {
			row.insertAfter(row.next());
			row.fadeIn();
			fixRowLinks();
		});
	}
	
	function deleteRow() {
		let row = $(this).parent().parent();
		row.fadeOut(() => {
			row.remove();
			fixRowLinks();
		});
	}
	
	function fixRowLinks() {
		$('tr a').css('display', 'inline');
		$('tr:last-child a:contains("Down")').css('display', 'none');
		$('tr:eq(2) a:contains("Up")').css('display', 'none');
	}
	
}