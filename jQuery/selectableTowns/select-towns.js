function attachEvents() {
	$('#items').on('click', 'li', function () {
		let li = $(this);
		if (li.attr('data-selected')) {
			li.removeAttr('data-selected');
			li.css('background', '');
		} else {
			li.attr('data-selected', 'true');
			li.css('background', '#DDD');
		}
	});
	$('#showTownsButton').click(function () {
		let selectLi = $('#items li[data-selected=true]');
		let town = selectLi.toArray()
			.map(li => li.textContent).join(", ");
		$('#selectedTowns').text(`Selected towns: ${town}`);
	})
}