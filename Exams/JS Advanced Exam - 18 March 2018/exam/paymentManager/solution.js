class PaymentManager {
	constructor(title) {
		this.title = title;
	}
	
	render(target) {
		let input = [];
		
		let table = $('<table>');
		table.append($(`<caption>${this.title} Payment Manager</caption>`))
			.append($('<thead>')
				.append($('<tr>')
					.append($('<th class="name">Name</th>'))
					.append($('<th class="category">Category</th>'))
					.append($('<th class="price">Price</th>'))
					.append($('<th>Actions</th>'))));
		table.append($('<tbody class="payments">')
			.append($('<tr>')
				.append($('<td><!-- Payment\'s name --></td>'))
				.append($('<td><!-- Payment\'s category --></td>'))
				.append($('<td><!-- Payment\'s price --></td>'))
				.append($('<td><button>Delete</button></td>').click(deletes))));
		table.append($('<tfoot class="input-data">')
			.append($('<tr>')
				.append($('<td><input name="name" type="text"></td>'))
				.append($('<td><input name="category" type="text"></td>'))
				.append($('<td><input name="price" type="number"></td>'))
				.append($('<td><button>Add</button></td></tr>').click(adds))));
		
		function deletes() {
		
		}
		
		function adds() {
			let name = table.append($('<tfoot class="input-data">')
				.append($('<tr>')
					.append($('<td><input name="name" type="text"></td>').val())));
			let category = table.append($('<tfoot class="input-data">')
				.append($('<tr>')
					.append($('<td><input name="category" type="text"></td>').val())));
			let price = table.append($('<tfoot class="input-data">')
				.append($('<tr>')
					.append($('<td><input name="price" type="number"></td>').val())));
			input.push(table.append($('<tbody class="payments">')
				.append($('<tr>')
					.append($('<td>').text(name))
					.append($('<td>').text(category))
					.append($('<td>').text(price))
					.append($('<td><button>Delete</button></td>').click(function () {
						input.
					})))));
		}
		
		if (target === 'amazon') {
			$('#amazon').append(table);
		}
		if (target === 'ebay') {
			$('#ebay').append(table);
		}
		if (target === 'walmart') {
			$('#walmart').append(table);
		}
	}
}