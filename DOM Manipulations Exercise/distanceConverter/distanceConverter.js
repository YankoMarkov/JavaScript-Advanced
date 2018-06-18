function attachEventsListeners() {
	let input = document.getElementById("inputDistance");
	let convertRate = {
		'km': 1000,
		'm': 1,
		'cm': 0.01,
		'mm': 0.001,
		'mi': 1609.34,
		'yrd': 0.9144,
		'ft': 0.3048,
		'in': 0.0254
	};
	let con = document.getElementById("convert");
	con.addEventListener('click', convert);
	
	function convert() {
		let inputUn = document.getElementById("inputUnits");
		let outputUn = document.getElementById("outputUnits");
		let result = Number(input.value) * convertRate[inputUn.value] / convertRate[outputUn.value];
		document.getElementById("outputDistance").value = result;
	}
}