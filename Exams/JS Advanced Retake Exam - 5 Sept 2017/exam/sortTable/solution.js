function sort(colIndex, descending) {
	let table = $('#products');
	let body = table.find('tbody');
	let tr = body.find('tr').toArray();
	let sorter = null;
	
	if (colIndex === 0) {
		sorter = (a, b) => {
			a = $(a).find("td:first").text();
			b = $(b).find("td:first").text();
			return a.localeCompare(b);
		}
	} else {
		sorter = (a, b) => {
			a = $(a).find("td:last").text();
			b = $(b).find("td:last").text();
			return a - b;
		}
	}
	tr.sort(sorter);
	if (descending) {
		tr.reverse();
	}
	tr.forEach((e) => $(e).appendTo(body));
}