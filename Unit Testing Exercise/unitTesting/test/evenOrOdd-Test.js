let isOddOrEven = require("../evenOrOdd").isOddOrEven;
let expect = require("chai").expect;

describe("Test isOddOrEven(string)", function () {
	it("Should return undefined with a number parameter", function () {
		expect(isOddOrEven(5)).to.equal(undefined);
	});
	it("Should return undefined with a object parameter", function () {
		expect(isOddOrEven({name: "Pesho"})).to.equal(undefined);
	});
	it("Should return 'even' with even string length", function () {
		expect(isOddOrEven("gogo")).to.equal("even");
	});
	it("Should return 'odd' with odd string length", function () {
		expect(isOddOrEven("emo")).to.equal("odd");
	});
	it("Should return 'even' with even string length", function () {
		expect(isOddOrEven("is it even")).to.equal("even");
	});
});