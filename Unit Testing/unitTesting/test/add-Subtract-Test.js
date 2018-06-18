let createCalculator = require("../add-Subtract").createCalculator;
let expect = require("chai").expect;

describe("Test createCalculator()", function () {
	let calc;
	beforeEach(function () {
		calc = createCalculator();
	});
	it("Should return 8 after add(5); add(3);", function () {
		calc.add(5);
		calc.add(3);
		expect(calc.get()).to.equal(8);
	});
	it("Should return -5 after subtract(2); subtract(3);", function () {
		calc.subtract(2);
		calc.subtract(3);
		expect(calc.get()).to.equal(-5);
	});
	it("Should return 4.2 after add(5.3); subtract(1.1);", function () {
		calc.add(5.3);
		calc.subtract(1.1);
		expect(calc.get()).to.equal(5.3 - 1.1);
	});
	it("Should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
		calc.add(10);
		calc.subtract('7');
		calc.add('-2');
		calc.subtract(-1);
		expect(calc.get()).to.equal(2);
	});
	it("Should return NaN for add(string)", function () {
		calc.add('hello');
		expect(calc.get()).to.be.NaN;
	});
	it("Should return NanN for subtract(string)", function () {
		calc.subtract('hello');
		expect(calc.get()).to.be.NaN;
	});
});