function addProduct() {
	let total = Number($('#bill tfoot tr').find('td:last').text());
	let newProduct = $('#add-product').find('input:first');
	let newPrice = $('#add-product').find('input:last');
	if (newProduct.val() === '' || newPrice.val() === '') return;
	let productList = $('#product-list');
	let tr = $('<tr>');
	tr.append($('<td>').text(newProduct.val()));
	tr.append($('<td>').text(newPrice.val()));
	productList.append(tr);
	let price = newPrice.val();
	total += +price;
	$('#bill tfoot tr').find('td:last').text(total);
	newProduct.val('');
	newPrice.val('');
}