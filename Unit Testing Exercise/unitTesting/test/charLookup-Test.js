let lookupChar = require("../charLookup").lookupChar;
let expect = require("chai").expect;

describe("Test lookupChar(string, index)", function () {
	it("Should return undefined with a non-string first parameter", function () {
		expect(lookupChar(5, 5)).to.equal(undefined);
	});
	it("Should return undefined with a non-number second parameter", function () {
		expect(lookupChar("pesho", "5")).to.equal(undefined);
	});
	it("Should return undefined with a non-Integer second parameter", function () {
		expect(lookupChar("pesho", 3.5)).to.equal(undefined);
	});
	it("Should return incorrect index with incorrect index value", function () {
		expect(lookupChar("pesho", -3)).to.equal("Incorrect index");
	});
	it("Should return incorrect index with incorrect index value", function () {
		expect(lookupChar("pesho", 10)).to.equal("Incorrect index");
	});
	it("Should return correct value with correct parameters value", function () {
		expect(lookupChar("pesho", 2)).to.equal("s");
	});
});