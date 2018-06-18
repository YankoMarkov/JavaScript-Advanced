function getArticleGenerator(arr) {
	return function () {
		let content = $("#content");
		let article = $("<article>");
		if (arr.length > 0) {
			article.append($(`<p>${arr.shift()}</p>`));
			content.append(article);
		}
	}
}