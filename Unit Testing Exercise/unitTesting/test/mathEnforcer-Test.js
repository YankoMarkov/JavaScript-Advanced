let mathEnforcer = require("../mathEnforcer").mathEnforcer;
let expect = require("chai").expect;

describe("Test mathEnforcer", function () {
	describe("addFive", function () {
		it("Should return undefined for non-number parameter", function () {
			expect(mathEnforcer.addFive("5")).to.equal(undefined);
		});
		it("Should return 11 for addFive(6)", function () {
			expect(mathEnforcer.addFive(6)).to.equal(11);
		});
		it("Should return 11.5 for addFive(6.5)", function () {
			expect(mathEnforcer.addFive(6.5)).to.equal(11.5);
		});
		it("Should return 1 for addFive(-4)", function () {
			expect(mathEnforcer.addFive(-4)).to.equal(1);
		});
	});
	describe("subtractTen", function () {
		it("Should return undefined for non-number parameter", function () {
			expect(mathEnforcer.subtractTen("5")).to.equal(undefined);
		});
		it("Should return 3 for subtractTen(13)", function () {
			expect(mathEnforcer.subtractTen(13)).to.equal(3);
		});
		it("Should return 3.5 for subtractTen(13.5)", function () {
			expect(mathEnforcer.subtractTen(13.5)).to.equal(3.5);
		});
		it("Should return -15 for subtractTen(-5)", function () {
			expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
		});
	});
	describe("sum", function () {
		it("Should return undefined for non-number parameter", function () {
			expect(mathEnforcer.sum("5", 5)).to.equal(undefined);
		});
		it("Should return undefined for non-number parameter", function () {
			expect(mathEnforcer.sum(5, "5")).to.equal(undefined);
		});
		it("Should return 10 for sum(5, 5)", function () {
			expect(mathEnforcer.sum(5, 5)).to.equal(10);
		});
		it("Should return 2 for sum(7, -5)", function () {
			expect(mathEnforcer.sum(7, -5)).to.equal(2);
		});
		it("Should return 5.5 for sum(3.14, 2.5)", function () {
			expect(mathEnforcer.sum(3.14, 2.5)).to.be.closeTo(5.64, 0.001);
		});
	});
});