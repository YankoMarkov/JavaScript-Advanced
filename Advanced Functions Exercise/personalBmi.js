function personalBmi(name, age, weight, height) {
	let bmi = Math.round(weight / Math.pow((height / 100), 2));
	let status = "";
	if (bmi < 18.5) {
		status = "underweight";
	} else if (bmi < 25) {
		status = "normal";
	} else if (bmi < 30) {
		status = "overweight";
	} else {
		status = "obese";
	}
	let patients = {
		name: name,
		personalInfo: {
			age: age,
			weight: weight,
			height: height
		},
		BMI: bmi,
		status: status
	};
	if (bmi >= 30) {
		patients["recommendation"] = "admission required"
	}
	return patients;
}

console.log(personalBmi("Honey Boo Boo", 9, 57, 137));