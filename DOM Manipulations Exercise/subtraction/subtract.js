function subtract() {
	let num1 = document.getElementById("firstNumber");
	let num2 = document.getElementById("secondNumber");
	let result = Number(num1.value) - Number(num2.value);
	document.getElementById("result").textContent = result;
}