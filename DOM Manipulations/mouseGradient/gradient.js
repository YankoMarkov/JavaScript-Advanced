function attachGradientEvents() {
	document.getElementById("gradient").addEventListener('mousemove', gradientMove);
	document.getElementById("gradient").addEventListener('mouseout', gradientOut);
	let percentage = document.getElementById("result");
	
	function gradientMove(event) {
		let x = event.offsetX;
		let percent = (x / this.clientWidth) * 100;
		percentage.textContent = Math.floor(percent) + "%";
	}
	
	function gradientOut() {
		percentage.textContent = "";
	}
}