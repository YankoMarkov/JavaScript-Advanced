function createRectangle(width, height) {
	let rectangle = {
		width: width,
		height: height,
		area: () => rectangle.height * rectangle.width,
		compareTo: function (other) {
			let result = other.area() - rectangle.area();
			return result || (other.width - rectangle.width);
		}
	};
	return rectangle;
}

function orderRectangle(RectsArr) {
	let result = [];
	for (let [width, height] of RectsArr) {
		result.push(createRectangle(width, height));
	}
	result.sort((a, b) => a.compareTo(b));
	return result;
}