function attachEventsListeners() {
	let day = document.getElementById("days");
	let hour = document.getElementById("hours");
	let minute = document.getElementById("minutes");
	let second = document.getElementById("seconds");
	let dayBtn = document.getElementById("daysBtn");
	let hourBtn = document.getElementById("hoursBtn");
	let minuteBtn = document.getElementById("minutesBtn");
	let secondBtn = document.getElementById("secondsBtn");
	dayBtn.addEventListener('click', function () {
		hour.value = 24 * Number(day.value);
		minute.value = 24 * 60 * Number(day.value);
		second.value = 24 * 60 * 60 * Number(day.value);
	});
	hourBtn.addEventListener('click', function () {
		day.value = Number(hour.value) / 24;
		minute.value = 60 * Number(hour.value);
		second.value = 60 * 60 * Number(hour.value);
	});
	minuteBtn.addEventListener('click', function () {
		day.value = Number(minute.value) / 60 / 24;
		hour.value = Number(minute.value) / 60;
		second.value = 60 * Number(minute.value);
	});
	secondBtn.addEventListener('click', function () {
		day.value = Number(second.value) / 60 / 60 / 24;
		hour.value = Number(second.value) / 60 / 60;
		minute.value = Number(second.value) / 60;
	});
}