function addItem() {
	let itemText = document.getElementById("newItemText");
	let itemValue = document.getElementById("newItemValue");
	let item = document.createElement("option");
	item.value = itemValue.value;
	item.textContent = itemText.value;
	document.getElementById("menu").appendChild(item);
	itemText.value = '';
	itemValue.value = '';
}