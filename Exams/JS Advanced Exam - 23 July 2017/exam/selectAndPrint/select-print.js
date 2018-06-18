function move(command) {
	
	if (command === "right") {
		let townToMove = $('#available-towns').find('option:selected');
		townToMove.prop('selected', false);
		$('#selected-towns').append(townToMove);
	}
	if (command === "left") {
		let townToMove = $('#selected-towns').find('option:selected');
		townToMove.prop('selected', false);
		$('#available-towns').append(townToMove);
	}
	if (command === "print") {
		let townToPrint = $('#selected-towns').find('option').toArray().map(e => e.textContent);
		$('#output').text(townToPrint.join("; "));
	}
}