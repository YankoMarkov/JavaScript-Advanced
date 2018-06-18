function tableBuilder(selector) {
	return {
		createTable: function (columnNames) {
			$(selector)
				.append($('<table>')
					.append($('<tr>')));
			
			for (let columnName of columnNames) {
				$(selector + ' table tr:first').append($('<th>').text(columnName));
			}
			$(selector + ' table tr:first').append($('<th>').text("Action"));
		},
		fillData: function (dataRows) {
			for (let row of dataRows) {
				$(selector + " table").append($('<tr>'));
				
				for (let data of row) {
					$(selector + " table tr:last").append($('<td>').text(data));
				}
				$(selector + " table tr:last")
					.append($('<td>')
						.append($('<button>Delete</button>').click(function () {
							$(this).parent().parent().remove();
						})));
			}
		}
	}
}