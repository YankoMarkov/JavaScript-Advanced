function sortArray(inputArr, sortMethod) {
	let ascending = (a, b) => a - b;
	let descending = (a, b) => b - a;
	let sorting = {
		"asc": ascending,
		"desc": descending
	};
	return inputArr.sort(sorting[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));