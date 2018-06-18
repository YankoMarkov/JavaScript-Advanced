function subSum(array, startIndex, endIndex) {
	let sum = 0;
	if(!Array.isArray(array)) {
		return NaN;
	}
	if (startIndex < 0) {
		startIndex = 0;
	}
	if (endIndex > array.length - 1) {
		endIndex = array.length - 1;
	}
	for (let i = startIndex; i <= endIndex; i++) {
	sum += Number(array[i]);
	}
	return sum;
}

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));