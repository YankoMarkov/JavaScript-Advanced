function listBuilder(selector) {
	return {
		createNewList: function () {
			$(selector).empty();
			$(selector).append($('<ul>'));
		},
		addItem: function (item) {
			$(selector + " ul")
				.append($('<li>').text(item)
					.append($('<button>').text('Up').click(function () {
						$(this).parent().insertBefore($(this).parent().prev())
					}))
					.append($('<button>').text('Down').click(function () {
						$(this).parent().insertAfter($(this).parent().next())
					})))
		}
	}
}