function search() {
	let word = $("#searchText").val();
	let res = $(`#towns li:contains(${word})`).css("font-weight", "bold");
	$(`#towns li:not(:contains(${word}))`).css("font-weight", "");
	$('#result').text(`${res.length} matches found.`)
}