let solve = function () {
	let robot = {
		protein: 0,
		carbohydrate: 0,
		fat: 0,
		flavour: 0
	};
	return function (str) {
		let input = str.split(" ");
		
		switch (input[0]) {
			case "restock":
				switch (input[1]) {
					case "protein":
						robot.protein += Number(input[2]);
						return "Success";
					case "carbohydrate":
						robot.carbohydrate += Number(input[2]);
						return "Success";
					case "fat":
						robot.fat += Number(input[2]);
						return "Success";
					case "flavour":
						robot.flavour += Number(input[2]);
						return "Success";
				}
				break;
			case "prepare":
				let proteins = 0;
				let fats = 0;
				let flavours = 0;
				let carb = 0;
				switch (input[1]) {
					case "apple":
						carb = Number(input[2]) * 1;
						flavours = Number(input[2]) * 2;
						if (robot.carbohydrate >= carb) {
							if (robot.flavour >= flavours) {
								robot.carbohydrate -= carb;
								robot.flavour -= flavours;
								return "Success";
							} else {
								return "Error: not enough flavour in stock";
							}
						} else {
							return "Error: not enough carbohydrate in stock";
						}
					case "coke":
						carb = Number(input[2]) * 10;
						flavours = Number(input[2]) * 20;
						if (robot.carbohydrate >= carb) {
							if (robot.flavour >= flavours) {
								robot.carbohydrate -= carb;
								robot.flavour -= flavours;
								return "Success";
							} else {
								return "Error: not enough flavour in stock";
							}
						} else {
							return "Error: not enough carbohydrate in stock";
						}
					case "burger":
						fats = Number(input[2]) * 7;
						carb = Number(input[2]) * 5;
						flavours = Number(input[2]) * 3;
						if (robot.carbohydrate >= carb) {
							if (robot.fat >= fats) {
								if (robot.flavour >= flavours) {
									robot.carbohydrate -= carb;
									robot.flavour -= flavours;
									robot.fat -= fats;
									return "Success";
								} else {
									return "Error: not enough flavour in stock";
								}
							} else {
								return "Error: not enough fat in stock";
							}
						} else {
							return "Error: not enough carbohydrate in stock";
						}
					case "omelet":
						proteins = Number(input[2]) * 5;
						fats = Number(input[2]) * 1;
						flavours = Number(input[2]) * 1;
						if (robot.protein >= proteins) {
							if (robot.fat >= fats) {
								if (robot.flavour >= flavours) {
									robot.fat -= fats;
									robot.flavour -= flavours;
									robot.protein -= proteins;
									return "Success";
								} else {
									return "Error: not enough flavour in stock";
								}
							} else {
								return "Error: not enough fat in stock";
							}
						} else {
							return "Error: not enough protein in stock";
						}
					case "cheverme":
						proteins = Number(input[2]) * 10;
						fats = Number(input[2]) * 10;
						flavours = Number(input[2]) * 10;
						carb = Number(input[2]) * 10;
						if (robot.protein >= proteins) {
							if (robot.carbohydrate >= carb) {
								if (robot.fat >= fats) {
									if (robot.flavour >= flavours) {
										robot.carbohydrate -= carb;
										robot.flavour -= flavours;
										robot.protein -= proteins;
										robot.fat -= fats;
										return "Success";
									} else {
										return "Error: not enough flavour in stock";
									}
								} else {
									return "Error: not enough fat in stock";
								}
							} else {
								return "Error: not enough carbohydrate in stock";
							}
						} else {
							return "Error: not enough protein in stock";
						}
				}
				break;
			case "report":
				let res = [];
				for (let obj in robot) {
					res.push(`${obj}=${robot[obj]}`);
				}
				return res.join(" ");
		}
	}
};
solve = solve();

console.log(solve('restock protein 100'));
console.log(solve('restock carbohydrate 100'));
console.log(solve('restock fat 100'));
console.log(solve('restock flavour 100'));
console.log(solve('report'));
console.log(solve('prepare omelet 2'));
console.log(solve('report'));
console.log(solve('prepare omelet 1'));
console.log(solve('report'));


// ['restock protein 100', 'Success'],
// ['restock carbohydrate 100', 'Success'],
// ['restock fat 100', 'Success'],
// ['restock flavour 100', 'Success'],
// ['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'],
// ['prepare omelet 2', 'Success'],
// ['report', 'protein=90 carbohydrate=100 fat=98 flavour=98'],
// ['prepare omelet 1', 'Success'],
// ['report', 'protein=85 carbohydrate=100 fat=97 flavour=97']