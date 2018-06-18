function attachEvents() {
	$('#btnDelete').click(function () {
		let found = false;
		let townName = $('#townName').val();
		$('#townName').val('');
		for (let town of $('#towns option')) {
			if (town.textContent === townName) {
				found = true;
				town.remove();
			}
		}
		if (found) {
			$('#result').text(`${townName} deleted.`)
		} else {
			$('#result').text(`${townName} not found.`)
		}
	});
}