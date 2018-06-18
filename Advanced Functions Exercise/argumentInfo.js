function argumentInfo() {
	let summary = {};
	for (let obj of arguments) {
		let type = typeof obj;
		console.log(`${type}: ${obj}`);
		if (!summary[type]) {
			summary[type] = 1;
		} else {
			summary[type]++;
		}
	}
	let sortable = [];
	
	for (let type in summary) {
		sortable.push([type, summary[type]]);
	}
	sortable.sort((a, b) => {
		if (a[1] < b[1]) {
			return 1;
		} else if (a[1] > b[1]) {
			return -1;
		} else {
			return 0;
		}
	});
	
	for (let obj of sortable) {
		console.log(`${obj[0]} = ${obj[1]}`);
	}
}

argumentInfo('cat', 42, function () {
	console.log('Hello world!');
});