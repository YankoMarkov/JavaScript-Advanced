function calendar([day, month, year]) {
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	let currentDate = new Date(year, month - 1, 1);
	
	let content = $("#content");
	let table = $("<table>");
	
	let caption = $(`<caption>${months[currentDate.getMonth()]} ${currentDate.getFullYear()}</caption>`);
	caption.appendTo(table);
	
	let tableBody = $("<tbody>");
	tableBody.appendTo(table);
	
	let weekDayTr = $("<tr>");
	for (let d of days) {
		let dayTh = $(`<th>${d}</th>`);
		dayTh.appendTo(weekDayTr);
	}
	weekDayTr.appendTo(tableBody);
	
	let lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate();
	
	if (currentDate.getDate() !== 0) {
		currentDate = new Date(year, month - 2, lastDayOfPrevMonth - currentDate.getDay() - 1);
	}
	let previousMonth = new Date(year, month - 2, 1);
	let nextMonth = new Date(year, month, 1);
	
	let dayTr = $();
	
	while (true) {
		if (currentDate.getMonth() + 1 === nextMonth.getMonth() + 1 && currentDate.getDay() === 0) {
			break;
		}
		if (currentDate.getDay() === 1) {
			dayTr = $("<tr>");
		}
		if (currentDate.getMonth() + 1 === previousMonth.getMonth() + 1) {
			let dayTd = $("<td>");
			dayTd.appendTo(dayTr);
		}
		if (currentDate.getDate() === day && currentDate.getMonth() + 1 === month) {
			let dayTd = $(`<td class="today">${currentDate.getDate()}</td>`);
			dayTd.appendTo(dayTr);
		} else if (currentDate.getMonth() + 1 === month) {
			let dayTd = $(`<td>${currentDate.getDate()}</td>`);
			dayTd.appendTo(dayTr);
		}
		if (currentDate.getMonth() + 1 === nextMonth.getMonth() + 1) {
			let dayTd = $("<td>");
			dayTd.appendTo(dayTr);
		}
		if (currentDate.getDay() === 6) {
			dayTr.appendTo(tableBody);
		}
		currentDate.setDate(currentDate.getDate() + 1);
	}
	content.append(table);
}