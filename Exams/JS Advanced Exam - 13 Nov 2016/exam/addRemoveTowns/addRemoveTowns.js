function attachEvents() {
	$('#btnDelete').click(deleteItem);
	$('#btnAdd').click(addItem);
	
	function deleteItem() {
		$('#towns:selected').remove();
	}
	
	function addItem() {
		let input = $('#newItem');
		if (input.val() === '') return;
		$('#towns').append($('<option>').text(input.val()));
		input.val('');
	}
}