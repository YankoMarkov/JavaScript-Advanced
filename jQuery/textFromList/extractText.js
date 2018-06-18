function extractText() {
	let result = [];
	let items = $("#items li").each((i, e) => result.push(e.textContent));
	console.log(items);
	$("#result").text(result.join(", "));
}