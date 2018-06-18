function summary(selector) {
	$(selector).click(extractSummary);
	
	function extractSummary() {
		let parent = $('#content').parent();
		let summaries = $(`<div id="summary"><h2>Summary</h2></div>`);
		let summary = $('<p>');
		summaries.append(summary);
		let strong = $('#content strong');
		
		for (let el of strong) {
			summary.append(el.textContent);
		}
		parent.append(summaries);
	}
}