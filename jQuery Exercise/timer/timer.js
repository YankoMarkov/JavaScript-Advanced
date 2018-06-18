function timer() {
	let hour = $('#hours');
	let minute = $('#minutes');
	let seconds = $('#seconds');
	let time = 0;
	let timer = null;
	let isRunning = false;
	
	$('#start-timer').on('click', function () {
		if (!isRunning) {
			timer = setInterval(stepInterval, 1000);
			isRunning = true;
		}
	});
	$('#stop-timer').on('click', function () {
		clearInterval(timer);
		isRunning = false;
	});
	
	function stepInterval() {
		time++;
		hour.text(('0' + Math.trunc(time / 60 / 60)).slice(-2));
		minute.text(('0' + (Math.trunc(time / 60)) % 60).slice(-2));
		seconds.text(('0' + Math.trunc(time % 60)).slice(-2));
	}
}